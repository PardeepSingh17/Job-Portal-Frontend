import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./RecruiterPostDashboard.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';

export default function RecruiterPostDashboard() {
    let Navigate = useNavigate()
    let [applications , setApplications] = useState([])
    let [job, setJob] = useState({})
    let [noApplicant , setNoApplicant] = useState("")

    let params = useParams()
    let id = params.id
    
    useEffect(() => {
        let getApplicants = async () => {
            let token = localStorage.getItem("token")
            let res = await fetch(`/api/jobs/myJobs/${id}`, {
                headers : {
                    "authorization" : `Bearer ${token}`
                }
            })
            let data = await res.json()
            
            if(data.success) {
                setApplications(data.message.applications)
            } else {
                setNoApplicant("No application yet!")
            }
        }

        let getJob = async () => {
            let res = await fetch(`/api/jobs/${id}`)
            let data = await res.json()
            
            setJob(data)
        }

        getJob()
        getApplicants()
    } , [])

    let handleDeleteClick = async () => {
        try{
            let token = localStorage.getItem("token")
            let res = await fetch(`/api/jobs/${job._id}`, {
                method : "DELETE",
                headers : {
                    "authorization" : `Bearer ${token}`
                }
            })
            let data = await res.json()
            console.log(data)
            if(data) {
                Navigate("/result" , {state : {data : data}})
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <div>
        <Navbar/>

        <div className="dashboard">

            <div className="jobDetails">
                <h2>{job.title}</h2>
                <div className="jobDetailsInsideDiv">
                    <span className="company">Company : {job.company}</span>  
                    <span className="LocationSpan"><LocationOnIcon sx={{opacity : 0.6}}/> {job.location}</span>
                </div>
                <p className="salary"><b>Salary :</b> {job.salary}</p>
            </div>

            <hr className="hrLine"/>

            <div className="applications">
                {noApplicant ? 
                    <h2>{noApplicant}</h2> 
                    : 
                    <div>
                    <h2>All Applications</h2>
                    {applications.map((application) => {
                        return <div className="applicant" key={application._id}>
                            <CardContent sx={{width : "500px", padding: 3}}>
                                <Typography gutterBottom sx={{ color: 'white', fontSize: 14 , display: "flex", alignItems: "center"}}>
                                    <EmailIcon/> &nbsp; {application.applicant.email}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {application.applicant.username}
                                </Typography> <br />
                                <Typography sx={{ color: 'white'}}>
                                    {application.appliedAt.split("T")[0]} &nbsp; 
                                    {application.appliedAt.split("T")[1].split(".")[0]}
                                </Typography>
                            </CardContent>
                        </div>
                    })
                    }</div>
                }
            </div> <br /> <br />

            <hr className="hrLine"/> <br />

            <Button variant="outlined" onClick={handleDeleteClick}>Delete post</Button>

        </div>

        <Footer/>
    </div>
}