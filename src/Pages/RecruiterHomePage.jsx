import { useEffect, useState } from "react"
import "./CandidateHomePage.css"


import "./RecruiterHomePage.css"
import { useNavigate } from "react-router-dom";
import JobCard from "../components/jobCard";


export default function RecruiterHomePage() {
    let Navigate = useNavigate()
    let [recuiterJobs , setRecruiterJobs] = useState([])

    useEffect(() => {
        let getRecruiterJobs = async () => {
            try {
                let token = localStorage.getItem("token")
                let res = await fetch("https://job-portal-3izy.onrender.com/api/jobs/myJobs" , {
                    headers : {
                        "authorization" : `Bearer ${token}`
                    }
                })
                let data = await res.json()
                
                if(data.success) {
                    setRecruiterJobs(data.message)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getRecruiterJobs()
    }, [])

    return <div>
        {recuiterJobs && <div className="jobsDiv"> 

            {<h2>Your Posted Jobs : </h2>}
            
            {recuiterJobs.map((job) => {
            return <div key={job._id} className='cardsDiv'>
                <JobCard
                    title={job.title}
                    description={job.description}
                    company={job.company}
                    location={job.location}
                    creator={job.createdBy.username}
                    id={job._id}
                    page={"RecruiterHomePage"}                   
                />
            </div>
            })} </div>
        }
        
        
    </div>
}