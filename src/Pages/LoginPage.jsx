import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

import "./LoginPage.css"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const Navigate = useNavigate()
    let [loginInfo, setLoginInfo] = useState({username : "" , password : ""})
    let [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }

    const handleChange = (event) => {
        let field = event.target.name
        let value = event.target.value

        setLoginInfo((oldLoginInfo) => {
            return {
                ...oldLoginInfo,
                [field] : value
            }
        })
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()

        try { 
            const res = await fetch("https://job-portal-3izy.onrender.com/api/auth/login", {
                method : "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(loginInfo)
            })

            const data = await res.json()

            if(data.success) {
                localStorage.setItem("token" , data.token)
                localStorage.setItem("role", data.user.role)
            }
                        
            if(data) {
                Navigate("/result" , {state : {data}})
            }
        } catch (err) {
            console.log(err)
        }
    }

    return <div >
        <Navbar/>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h1 style={{color : "#1976d2"}}>Welcome back User!</h1><br />
                <TextField required className='inputField' id="outlined-basic" label="Username" variant="outlined" name="username" onChange={handleChange} value={loginInfo.username}/><br /><br />

                <FormControl variant="outlined" className='inputField'>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        required
                        id="outlined-adornment-password"
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        onChange={handleChange}
                        value={loginInfo.password}
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
            </FormControl><br /><br />

            <Button variant="outlined" type='submit'>Login</Button>
            </form>
        </div>
        <Footer/>
    </div>
}