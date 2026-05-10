
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Navbar from '../components/navbar';

import "./AllJobs.css"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Stack from '@mui/material/Stack';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import JobCard from '../components/jobCard';

export default function AllJobs() {
    let Navigate = useNavigate()
    let [searchParams] = useSearchParams()

    let title = searchParams.get("title") || ""
    let location = searchParams.get("location") || ""
    let salary = searchParams.get("salary") || ""
    let company = searchParams.get("company") || ""

    let [page, setPage] = useState(1)
    let [entries, setEntries] = useState([])

    useEffect(() => {
        let getJobs = async () => {
            try {
                let data = await fetch(`https://job-portal-3izy.onrender.com/api/jobs?page=${page}&title=${title}&location=${location}&salary=${salary}&company=${company}`)
                data = await data.json()
                
                setEntries(data.allJobs)
                
            } catch (err) {
                console.log("err")
            }
            
        }
        getJobs()
    } , [page])

    let handlePageClick = () => {
        setPage((oldPage) => oldPage+1)
    }

    let handlePageBackClick = () => {
        setPage((oldPage) => oldPage-1)
    }

    let redirectSingleJobPage = (id) => {
        Navigate(`/jobs/${id}`)
    }

    return <div>
        <Navbar/>
        <div className='cardsDiv'>
            {entries.map((entry) => (
                <JobCard 
                    key={entry._id} 
                    id={entry._id} 
                    company={entry.company} 
                    title={entry.title} 
                    location={entry.location} 
                    creator={entry.createdBy.username} 
                    description={entry.description}
                    page={"AllJobsPage"}
                />                                
            ))} <br /><br />

            <Stack direction={'row'}>
                {page > 1 ? <Button onClick={handlePageBackClick}><NavigateBeforeIcon/> Previous page</Button> : null} 
                {page > 1 && entries.length === 5 ? <hr /> : null}
                {entries.length === 5 ? <Button onClick={handlePageClick}> Next Page <NavigateNextIcon/> </Button> : null}
            </Stack>     
        </div>
        <Footer/>
    </div>
}