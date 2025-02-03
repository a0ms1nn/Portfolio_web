import React from 'react';
import { Link } from "react-router-dom";
import './TranscriptPage.css';

export default function TranscriptPage() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <Link className="name" to="/">Portfolio Website</Link>
                <div className="container">
                    <Link className="Resume" to="/ResumePage">Resume</Link>
                    <Link className="Transcript active" to="/TranscriptPage">Transcript</Link>
                    <Link className="Project" to="/ProjectPage">Project</Link>
                </div>
            </nav>

            {/* Transcript Section */}
            <div className="resume-section">
            <div className="resume-container">
                <img src="/Transcript.JPG" alt="Resume" className="resume-image" />
                <div className="resume-download">
                    <p>Download my Transcript</p>
                    <a 
                        href="https://drive.google.com/file/d/1otdG-oY9uxU1-5lZjDgjlPfeE3G8Tyri/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        📄 Download transcript
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
