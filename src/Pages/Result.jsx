import Alert from '@mui/material/Alert';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Result.css"
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Button from '@mui/material/Button';

export default function Result() {
    const navigate = useNavigate()

    const location = useLocation()

    const data = location.state

    const homePageClick = () => {
        navigate("/")
    }

    return <div>
        <Navbar/>
        <div className='messageDiv'>
            {data.data.success? 
            <div className='alert'><Alert severity="success">{data.data.message}</Alert></div> 
            : 
            <div className='alert'><Alert severity="warning">{data.data.message}</Alert></div> } <br />
            <Button onClick={homePageClick}>Return to Home page</Button>
        </div>
        
        <Footer/>
    </div>
}