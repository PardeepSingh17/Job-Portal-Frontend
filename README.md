# Job Portal Frontend

A full-stack MERN Job Portal frontend built using React and Vite. This application allows candidates to search and apply for jobs while recruiters can post and manage job listings.

## Features

### Authentication
- User Registration
- User Login
- Role-based access (Candidate / Recruiter)
- JWT Authentication

### Candidate Features
- Search jobs
- View all jobs
- View job details
- Apply to jobs
- Upload resume
- View applied jobs

### Recruiter Features
- Post jobs
- View posted jobs
- View applicants
- Delete job posts

### General Features
- Dynamic Routing
- Pagination
- API Integration
- File Upload Support
- Result / Alert pages

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Material UI (MUI)
- Vite

## Backend
- Node.js
- Express.js
- MongoDB

---

# Installation

## Clone the repository

```bash
git clone <your-repository-link>
```

## Navigate to project directory

```bash
cd jobportalfrontend
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

---

# Environment Setup

Make sure the backend server is running on:

```bash
http://localhost:8080
```

Proxy is configured in:

```js
vite.config.js
```

---

# Project Structure

```bash
src/
│
├── components/
│   ├── navbar.jsx
│   └── footer.jsx
│
├── Pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── AllJobs.jsx
│   ├── JobsById.jsx
│   ├── ApplyForm.jsx
│   ├── RecruiterHomePage.jsx
│   ├── RecruiterPostDashboard.jsx
│   └── Result.jsx
│
├── App.jsx
└── main.jsx
```

---

# Available Scripts

## Start development server

```bash
npm run dev
```

## Build production version

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

---

# Future Improvements

- Fully responsive UI
- Protected routes
- Better error handling
- Loading states
- Reusable components
- Global state management
- Improved UI/UX

---

# Author

Pardeep Singh
