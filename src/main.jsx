import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
import RegisterPage from './Pages/RegisterPage.jsx'
import NoPage from './Pages/NoPage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import Result from './Pages/Result.jsx'
import PostJob from './Pages/PostJob.jsx'
import AllJobs from './Pages/AllJobs.jsx'
import JobById from './Pages/JobsById.jsx'
import ApplyForm from './Pages/ApplyForm.jsx'
import RecruiterPostDashboard from './Pages/RecruiterPostDashboard.jsx'


const Router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/register",
    element : <RegisterPage/>
  },
  {
    path : "/login",
    element : <LoginPage/>
  },
  {
    path : "/result",
    element : <Result/>
  },
  {
    path : "/newJob",
    element : <PostJob/>
  },
  {
    path : "/jobs",
    element : <AllJobs/>
  },
  {
    path : "/jobs/myJob/:id",
    element : <RecruiterPostDashboard/>
  },
  {
    path : "/jobs/:id",
    element : <JobById/>
  },
  {
    path : "/jobs/:id/apply",
    element : <ApplyForm/>
  },
  {
    path : "*",
    element : <NoPage/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
