import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Navbar() {
    const navigate = useNavigate()
    let [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        let LoginCheck = async () => {
            let token = localStorage.getItem("token") || ""
            let res = await fetch("https://job-portal-3izy.onrender.com/api/auth/isLogin", {
                headers : {
                    "authorization" : `bearer ${token}`
                }
            })
            let data = await res.json()
            
            if(data.success) {
                setIsLogin(true)
            }
        }
        LoginCheck()
    } , [])

    let handleRegisterClick = () => {
        navigate("/register")
    }

    let handleLoginClick = () => {
        navigate("/login")
    }

    let handleHomeClick = () => {
        navigate("/")
    }

    let handleLogoutClick = () => {
        localStorage.removeItem("role")
        localStorage.removeItem("token")
        window.location.reload()
        navigate("/")
    }

    return <div>
        <AppBar position="static" color='primary' sx={{width : "100%"}}>
            <Toolbar className='navbarToolbar'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , cursor : "pointer"}} onClick={handleHomeClick}>
                Job Portal
            </Typography>
            {isLogin ? 
                <Button color="inherit" onClick={handleLogoutClick}>Logout</Button> 
                :               
                <div>
                    <Button color="inherit" onClick={handleRegisterClick}>Register</Button> &nbsp;&nbsp;&nbsp;
                    <Button color="inherit" onClick={handleLoginClick}>Login</Button>
                </div>
            }
            </Toolbar>
        </AppBar>
    </div>
}