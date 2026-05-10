import Footer from "../components/footer"
import Navbar from "../components/navbar"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import "./HomePage.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CandidateHomePage from "./CandidateHomePage";
import RecruiterHomePage from "./RecruiterHomePage";


export default function HomePage() {
    const Navigate = useNavigate()
    const [search, setSearch] = useState("")

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

    let role = localStorage.getItem("role") || "NoRole"

    return <div>
        <Navbar/>

        {role === "candidate" && <CandidateHomePage/>}
        {role === "recruiter" && <RecruiterHomePage/>}

        
        {role === "NoRole" && <div className="mainHomePage">
            <TextField 
                placeholder="Search your field"
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
                            <SearchIcon sx={{cursor : "pointer"}} onClick={handleSearchButtonClick}/>
                        </InputAdornment>
                        ),
                    },
        }}
            /> <br /><br /><br />

            <h1 style={{color: "#1976d2"}}>Let's Start by Making an account !</h1> <br /><br /><br />

            <div style={{border: "1px solid #1976d2"}}>
                <Button onClick={() => Navigate("/login")}>Login</Button> |
                <Button onClick={() => Navigate("/register")}>Register</Button> |
                <Button onClick={() => Navigate("/jobs")}>View jobs instead</Button>
            </div>
        </div>
        }
        <Footer/>
    </div>
}