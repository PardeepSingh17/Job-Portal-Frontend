import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function JobCard({title , id , company , description , location , creator , page}) {
    let Navigate = useNavigate()

    let redirectSingleJobPage = (id) => {
        Navigate(`/jobs/${id}`)
    }

    let recruiterJobClick = (id) => {
        Navigate(`/jobs/myJob/${id}`)
    }

    return (
        <Card className="jobCard"  sx={{ width : "80vh" , marginTop : 5 , cursor : "pointer" }} onClick={page !== "RecruiterHomePage" ? () => redirectSingleJobPage(id) : () => recruiterJobClick(id)}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {company}
                </Typography>
                        <Typography variant="h5" component="div">
                        {title}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{description}</Typography>
                        <Typography variant="body2">
                        {location}
                        <br />
                        {page === "RecruiterHomePage" ? null : creator}
                        
                    </Typography>
                    </CardContent>
                    {(page !== "CandidateHomePage" && page !== "RecruiterHomePage") ? <CardActions>
                        <Button size="small">Apply</Button>
                    </CardActions> : null}  
                </Card>
    )
}