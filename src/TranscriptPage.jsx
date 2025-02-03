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
            <div className="containerTranscript">
                <img src="/Transcript.JPG" alt="Transcript" />
                <p>Dwload My Transcript</p>
                <a 
                    href="https://drive.google.com/file/d/1otdG-oY9uxU1-5lZjDgjlPfeE3G8Tyri/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="download-button"
                >
                    Download Transcript
                </a>
            </div>

            {/* Footer */}
            <div className="footer">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:satitkunrus_t@silpakorn.edu">satitkunrus_t@silpakorn.edu</a></p>
                <p>Phone: <a href="tel:0988993238">098-899-3238</a></p>
                <p>Address: Minburi, Bangkok, Thailand</p>
            </div>
        </div>
    );
}
