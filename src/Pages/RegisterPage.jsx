import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

import "./RegisterPage.css"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    let Navigate = useNavigate()
    let [registerDetails, setRegisterDetails] = useState({username : "", email: "", password : "", role : "candidate"})
    let [showPassword, setShowPassword] = useState(false)

    const handleChange = (event) => {
        let field = event.target.name
        let value = event.target.value

        setRegisterDetails((oldDetails) => {
            return {
                ...oldDetails,
                [field] : value
            }
        })
    }

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try { 
            const res = await fetch("https://job-portal-3izy.onrender.com/api/auth/register", {
                method : "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(registerDetails)
            })

            const data = await res.json()

            if(data.success) {
                
                let loginRes = await fetch("https://job-portal-3izy.onrender.com/api/auth/login", {
                    method : "POST",
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body : JSON.stringify({
                        username : registerDetails.username,
                        password : registerDetails.password
                    })
                })
                let loginData = await loginRes.json()

                if(loginData.success) {
                    localStorage.setItem("token" , loginData.token)
                    localStorage.setItem("role", loginData.user.role)
                }
            }

            if(data) {
                Navigate("/result" , {state : {data : data}})
            }
        } catch (err) {
            console.log(err)
        }

        setRegisterDetails({username : "", email: "", password : "", role : "candidate"})
    }
    return <div >
        <Navbar/>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h1 style={{color : "#1976d2"}}>Welome to our community!</h1><br />
                <TextField required className='inputField' id="outlined-basic" label="Username" variant="outlined" name="username" onChange={handleChange} value={registerDetails.username}/><br /><br />

                <TextField required className='inputField' id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleChange} value={registerDetails.email}/><br /><br />

                <FormControl variant="outlined" className='inputField'>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        required
                        id="outlined-adornment-password"
                        name="password" 
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleChange} 
                        value={registerDetails.password}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <br /><br />

                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={registerDetails.role}
                    label="Role"
                    onChange={handleChange}
                    name='role'
                    className='inputField'
                >
                <MenuItem value={"candidate"}>Candidate</MenuItem>
                <MenuItem value={"recruiter"}>Recruiter</MenuItem>
                </Select> <br /><br />

                <div className="submitButtonDiv">
                    <Button variant="outlined" type='submit' >Register</Button>
                </div>
                
            </form>
        </div>
        <Footer/>
    </div>
}