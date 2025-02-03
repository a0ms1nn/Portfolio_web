import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import ResumePage from './ResumePage.jsx'
import TranscriptPage from "./TranscriptPage.jsx";
import ProjectPage from "./ProjectPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />

  },
  {
    path: "/ResumePage",
    element: <ResumePage />

  },
  {
    path: "/TranscriptPage",
    element: <TranscriptPage />,
  },
  {
    path: "/ProjectPage",
    element: <ProjectPage />,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
