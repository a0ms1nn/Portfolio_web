import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router
import "./App.css"; // Import CSS
import ResumePage from "./ResumePage";
import { Link } from "react-router-dom";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="name">Portfolio Website</div>
        <div className="container">
          <Link className="Resume" to="/ResumePage">Resume</Link>
          <Link className="Transcript" to="/TranscriptPage">Transcript</Link>
          <Link className="Project" to="/ProjectPage">Project</Link>
        </div>
      </nav>

      <div className="content-container">
        <div className="containerText">
          <h1>Hello</h1>
          <h1>I'm Aomsin!</h1>
          <p>
            Hello, this website is the portfolio of Thanaphat Satitkunrus (Aomsin).
          </p>
          <p>
            This page will showcase my educational background, skills, and work experience. It is created with the intention of being used for job applications.
          </p>
        </div>
        <div className="containerProfile">
          <img src="/ProfilePic.png" alt="My Profile" />
        </div>
      </div>

      <div className="containerSchoolEducation">
        <div className="containerSchool">
          <img src="/schoolLogo.png" alt="School" />
        </div>
        <div className="containerEducation">
          <h2>Education</h2>
          <h3>Computer Science</h3>
          <p>Silpakorn University, Sanam Chandra</p>
          <p>Expected Graduation: 2026</p>
          <p>GPA: 3.06 (5 semesters)</p>

          <h3>Science-Mathematics Program</h3>
          <p>Triam Udom Suksa Patthanakarn Suvarnabhumi School</p>
          <p>GPA: 3.44</p>
        </div>
      </div>

      <div className="containerWorkSection">
        <div className="containerWorkExperience">
          <h2>Work Experience</h2>
          <div className="workExperienceDetails">
            <h4>Odd-e Thailand (Internship)</h4>
            <h5>May-June 2024</h5>
          </div>
          <div className="workExperienceDetails1">
            <p>I have learned to work with Scrum and Agile methodologies, written in Ruby, and gained experience using Git.</p>
            <p>I have also worked on both frontend and backend development, and developed various soft skills in collaborating with others.</p>
          </div>
        </div>
        <div className="containerWork">
          <img src="/oddsLogo.png" alt="work" />
        </div>
      </div>

      
      <div className="footer">
        <h2>Contact</h2>
        <p>Email: satitkunrus_t@silpakorn.edu</p>
        <p>Phone: 098-899-3238</p>
        <p>Address: Minburi, Bankok, Thailand </p>
      </div>

    </div>
  );
}
