import React from 'react';
import { Link } from "react-router-dom";
import './ResumePage.css';

export default function ResumePage() {
  return (
    <div>
        {/* Navbar */}
        <nav className="navbar">
            <Link className="name" to="/">Portfolio Website</Link>
            <div className="container">
                <Link className="Resume active" to="/ResumePage">Resume</Link>
                <Link className="Transcript" to="/TranscriptPage">Transcript</Link>
                <Link className="Project" to="/ProjectPage">Project</Link>
            </div>
        </nav>

        {/* Resume Section */}
        <div className="resume-section">
            <div className="resume-container">
                <img src="/ResumePic.jpg" alt="Resume" className="resume-image" />
                <div className="resume-download">
                    <p>Download my resume</p>
                    <a 
                        href="https://drive.google.com/file/d/1f9ErtnvXQWKzfOPbMbK-heEWf14OYebb/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        📄 Download Resume
                    </a>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="footer">
            <h2>Contact</h2>
            <p>Email: satitkunrus_t@silpakorn.edu</p>
            <p>Phone: 098-899-3238</p>
            <p>Address: Minburi, Bangkok, Thailand</p>
        </div>
    </div>
  );
}
