import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./ApplyForm.css"
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";


export default function ApplyForm() {
    let Navigate = useNavigate()
    let params = useParams()
    let id = params.id

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let formData = new FormData(event.target)
            let token = localStorage.getItem("token")
            let res = await fetch(`/api/jobs/${id}/apply`, {
                method : "POST",
                headers : {   
                    'authorization': `Bearer ${token}`
                },
                body : formData
            })
            let data = await res.json()
            
            Navigate("/result" , {state: {data}})
            
        } catch (err) {
            console.log(err)
        }
    }


    return <div>
        <Navbar/>

        <div className="FormDiv">
            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                <InputLabel htmlFor="resume">Please upload your resume</InputLabel>
                <input type="file" name="resume" id="resume" required /><br /><br /><br />

                <Button type="submit" variant="contained">Apply</Button>
            </form> 
        </div>

        <Footer/>
    </div>
}