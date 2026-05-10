import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./PostJob.css"
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default function PostJob() {
    return <div>
        <Navbar/>
        <div className='formDiv'>           
            <form >
                <h1 className='formItem heading'>Making more Oportunities for candidates!</h1>
                <TextField className='formItem title' id="outlined-basic" label="Title" variant="outlined"/> <br /> <br />
                <TextField className="formItem description" label="description" multiline rows={6} /> <br /> <br />
                <TextField className="formItem salary" type="number" id="outlined-basic" label="salary" variant="outlined" sx={{marginRight : "2%"}}/>
                <TextField className="formItem location" id="outlined-basic" label="location" variant="outlined" /> <br /> <br />
                <TextField className="formItem company" id="outlined-basic" label="company name" variant="outlined" /> <br /><br />
                <div className='buttonDiv'>
                    <Button className='formItem button' type='submit' variant='outlined'>
                        Post Job
                    </Button>
                </div>
                
            </form>
        </div>
        <Footer/>
        
    </div>
}