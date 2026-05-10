import "./footer.css"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return <div className="footerDiv">
        <div className="footer"> 
            <div className="Upper footerComponent">
                <span>
                    <a href="https://github.com/PardeepSingh17"><GitHubIcon sx={{fontSize : 30 , marginTop : 2 , marginRight : 3}}/></a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/pardeep-singh-b4b079248/"><LinkedInIcon sx={{fontSize : 30 , marginTop : 2}}/></a>
                </span>                           
            </div>
            
             <hr className="hrLine"/>
            <div className="Lower footerComponent">
                <span>Project by : <b>Pardeep Singh </b></span> &nbsp;
                <b>|</b> &nbsp;
                <span> pard6508@gmail.com </span> &nbsp;
                <b>|</b> &nbsp;
                <span> +91 8851530495 </span>
            </div>
            
        </div>
    </div>
}