import React from 'react';
import { Link } from "react-router-dom";
import './ProjectPage.css';

export default function ProjectPage() {
    return (
        <div>
        <nav className="navbar">
            <Link className="name" to="/">Portfolio Website</Link>
            <div className="container">
            <Link className="Resume" to="/ResumePage">Resume</Link>
            <Link className="Transcript" to="/TranscriptPage">Transcript</Link>
            <Link className="Project" to="/ProjectPage">Project</Link>
            </div>
        </nav>
        <div className="project-content">
            <h2>Project Mobile Application</h2>
            <div className="content-wrapper">
                <div className="video-section">
                    <video width="200" height="400" controls>
                        <source src="MBAPP.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="text-section">
                    <p>
                        I have worked on both backend and frontend, but my primary focus has been on frontend development.
                    </p>
                    <p>
                        I used Flutter to build this project, integrating APIs from Spotify, YouTube, and Google. The project includes features such as music search and playlist organization based on the mood of the songs. I also collaborated in the design of the UI/UX.
                    </p>
                </div>
            </div>
            <h2>Project Web Application Development</h2>
            <div className="content-wrapper">
                <div className="Picture-section">
                <img src="/WebPizza.jpg" alt="Resume" className="resume-image" /> 
                </div>
                <div className="text-section">
                    <p>
                    I used HTML, CSS, and JavaScript to develop this website. It was a team project, and we used Git to make collaboration easier. In this project, I worked on both the frontend and backend equally.
                    </p>
                    <a href="https://drive.google.com/file/d/1nyx-vjdWALday-y5fyEB7YotPXhC8kk9/view?usp=drive_link" target="_blank" className="project-link">View the project on Google Drive</a>
                </div>
            </div>
        </div>
        <div className="footer">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:satitkunrus_t@silpakorn.edu">satitkunrus_t@silpakorn.edu</a></p>
                <p>Phone: <a href="tel:0988993238">098-899-3238</a></p>
                <p>Address: Minburi, Bangkok, Thailand</p>
            </div>
        
        </div>
        
    );
  }