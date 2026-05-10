import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"


export default function NoPage() {
    let Navigate = useNavigate()

    const returnToHomePage = () => {
        Navigate("/")
    }
    return <div>
        No page Found <br /><br />

        <Button onClick={returnToHomePage}>Return to Home Page.</Button>
    </div>
}