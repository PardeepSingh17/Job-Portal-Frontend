import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import "./CandidateHomePage.css"
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import JobCard from '../components/jobCard';

export default function CandidateHomePage() {
    let Navigate = useNavigate()
    let [search , setSearch] = useState("")
    let [appliedJobs , setAppliedJobs] = useState([])

    useEffect(() => {
        let getAppliedJobs = async () => {
            let token = localStorage.getItem("token")
            let res = await fetch("/api/jobs/applied" , {
                headers : {
                    "authorization" : `Bearer ${token}`
                }
            })
            let data = await res.json()
            if(data) {
                setAppliedJobs(data.appliedJobs)
            }
        }
        getAppliedJobs()
    },[])

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            Navigate(`/jobs?title=${search}`)
        }
    }

    const handleSearchButtonClick = () => {
        Navigate(`/jobs?title=${search}`)
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const viewJobsButtonClick = () => {
        Navigate("/jobs/")
    }

    return <div className="HomePageDiv">

        <TextField 
            placeholder="Search for jobs"
            value={search}
            onKeyDown={handleKeyDown}
            onChange={handleSearchChange}
            className="homePageComp" 
            sx={{width : "100vh"}} 
           id="fullWidth"
            slotProps={{
                input: {
                    endAdornment: (
                    <InputAdornment position="end">
                        {search!=="" && <SearchIcon sx={{cursor : "pointer"}} onClick={handleSearchButtonClick}/>}
                    </InputAdornment>
                    ),
                },
            }}
        />

        {!appliedJobs && <div style={{display: 'flex', justifyContent: 'space-between' , flexDirection: 'column' , height: "70vh"}}>

            <h2 style={{marginTop: 32 , color: "#1976d2"}}>
                Let's start applying now !
            </h2>

            <Button onClick={viewJobsButtonClick}>Veiw all jobs <NavigateNextIcon/></Button>

            </div>
        }
        {appliedJobs && <div className='jobsDiv'> 

            {<h2>Your Applied Jobs :</h2>}
             
            {appliedJobs.map((job) => {
            return <div key={job._id} className='cardsDiv'>
                <JobCard
                    title={job.title}
                    description={job.description}
                    company={job.company}
                    location={job.location}
                    creator={job.createdBy.username}
                    id={job._id}
                    page={"CandidateHomePage"}
                />
                <Button onClick={viewJobsButtonClick} variant='outlined' className='button' sx={{marginTop: 2}}>View new jobs</Button>
            </div>
            })} 
        
        </div>}
    </div>}
