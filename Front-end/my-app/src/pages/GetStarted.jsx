import React, { useState } from 'react';
import '../styles/get-started.css';
import { Slide } from "react-awesome-reveal";

export function GetStarted() {
  const [jobDescriptionText, setJobDescriptionText] = useState('');
  const [resumeScore, setResumeScore] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [isJDSubmitted, setIsJDSubmitted] = useState(false);

  const base_url = "http://127.0.0.1:5000/api"

  const handleJDSubmit = async () => {
    if (jobDescriptionText.trim() !== '') {
      try {
        const response = await fetch(`${base_url}/submitjd`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ jobDescription: jobDescriptionText })
        });    
        if (response.ok) {
          setIsJDSubmitted(true);
          console.log("JD submitted successfully");
          setShowMessage(false);
          setResumeScore(null);
        } else {
          console.error("Failed to submit job description");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      alert("Please enter a job description.");
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setResumeFile(file);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch(`${base_url}/uploadresume`, {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        console.log("Resume uploaded successfully");
      } else {
        console.error("Failed to upload resume");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGetResumeScoreClick = async () => {
    try {
      const response = await fetch(`${base_url}/getscore`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setResumeScore(data.score);
        setShowMessage(true);
      } else {
        console.error("Failed to fetch resume score");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          <div className="buttons-row">
            <button onClick={handleJDSubmit}>Submit JD</button>
          </div>
          <p>Upload your resume (PDF)</p>
          <div className="buttons-row">
            <input type="file" accept=".pdf" onChange={handleFileUpload} />
          </div>

          {/* Buttons only show up when JD is submitted and resume is uploaded */}
          {isJDSubmitted && resumeFile && (
            <Slide direction="up" triggerOnce={true}>
              <div className="buttons-row">
                <button onClick={handleGetResumeScoreClick}>Get Resume Score</button>
                <button>Download Resume (PDF)</button>
                <button>Download Resume (.docx)</button>
              </div>
            </Slide>
          )}

          {showMessage && (
            <div className="score-message">Your Resume Score is: {resumeScore}</div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-copy">
        <p>2024 &copy; Resume Magic</p>
      </footer>
    </div>
  );
}
