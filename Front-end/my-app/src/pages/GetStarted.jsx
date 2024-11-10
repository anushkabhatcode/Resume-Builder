import React, { useState } from 'react';
import '../styles/get-started.css';
import { Slide, Zoom } from "react-awesome-reveal";

export function GetStarted() {
  const [jobDescriptionText, setJobDescriptionText] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const handleGetResumeScoreClick = () => {
    setShowMessage(true);
  };

  const handleFileUpload = (event) => {
    setResumeFile(event.target.files[0]);
    console.log("File uploaded:", event.target.files[0]);
  };

  return (
    <div className="get-started-container">
      {/* Header */}
      <header className="header">
        <h1>
          <span className="highlight"> Job Aligned Personalized Resume </span>
        </h1>
      </header>

      <section className="get-started-banner">
        <div className="content">
          <div className="description-label">
            <label>Job Description Text</label>
          </div>
          <textarea
            placeholder="Paste job description text here..."
            value={jobDescriptionText}
            onChange={(e) => setJobDescriptionText(e.target.value)}
            maxLength={5500}
          />
          <p>Upload your resume (PDF)</p>
          <input type="file" accept=".pdf" onChange={handleFileUpload} />
          {/* Buttons */}
          <div className="buttons-row">
            <Slide direction="up" triggerOnce={true}><button onClick={handleGetResumeScoreClick}>Get Resume Score</button></Slide>
            <Slide direction="up" triggerOnce={true}><button>Download Resume (PDF)</button></Slide>
            <Slide direction="up" triggerOnce={true}><button>Download Resume (.docx)</button></Slide>
          </div>
          {/* Display message instead of score meter */}
          {showMessage && <div className="score-message">Your Resume Score is : </div>}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-copy">
        <p>2024 &copy; Resume Magic</p>
      </footer>
    </div>
  );
}
