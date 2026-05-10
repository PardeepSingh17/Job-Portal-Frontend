import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useEffect, useState } from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./JobsById.css"
import Button from "@mui/material/Button";


export default function JobById() {
    const Navigate = useNavigate()
    let [jobDetails , setJobDetails] = useState({}) 
    let [owner , setOwner] = useState("")
    let params = useParams()
    let id = params.id

    useEffect(() => {
        let getJobByID = async () => {
            let job = await fetch(`/api/jobs/${id}`)
            let data = await job.json()
            setJobDetails(data)
            setOwner(data.createdBy.username)
       }
       getJobByID()
    }, [])

    const handleApplyClick = (id) => {
        Navigate(`/jobs/${id}/apply`)
    }

    return <div>
        <Navbar/>

        <div className="JobDiv">
            <h1>{jobDetails.title}</h1>
            <p><span>Company : {jobDetails.company}</span>  <span className="LocationSpan"><LocationOnIcon sx={{opacity : 0.6}}/> {jobDetails.location}</span></p>
            <p><b>Salary :</b> {jobDetails.salary}</p>

            <hr />

            <div>
                <h3>Job Description : </h3>              
                <p>{jobDetails.description}</p>
            </div>

            <hr />

            <div className="ApplyDiv">
                <h3>Owner : {owner}</h3>
                <Button variant="contained" onClick={() => handleApplyClick(jobDetails._id)}>APPLY</Button>
            </div>
        </div>

        <Footer/>
    </div>
}