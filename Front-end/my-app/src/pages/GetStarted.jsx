import React, { useState } from 'react';
import '../styles/get-started.css';
import { Slide } from "react-awesome-reveal";

export function GetStarted() {
  const [resumeScore, setResumeScore] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [JDFile, setJDFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [docxBlob, setDocxBlob] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [showPreviewButtons, setShowPreviewButtons] = useState(false);
  const [isTailoring, setIsTailoring] = useState(false);

  const base_url = "http://127.0.0.1:5000/api";

  const handleJDSubmit = async (event) => {
    const file = event.target.files[0];
    setJDFile(file);

    const formData = new FormData();
    formData.append("JD", file);

    try {
      const response = await fetch(`${base_url}/submitjd`, {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        console.log("JD uploaded successfully");
      } else {
        console.error("Failed to upload JD");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
    setResumeScore(null);
    setShowMessage(false);
    setShowPreviewButtons(false);

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
    setLoading(true);
    try {
      const response = await fetch(`${base_url}/getscore`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setResumeScore(data.score);
        setShowMessage(true);
        console.log("Resume Score: ", data.score);
      } else {
        console.error("Failed to fetch resume score");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePreviewResumeClick = async () => {
    setIsTailoring(true); // Show tailoring message
    try {
      // Fetch DOCX
      const docxResponse = await fetch(`${base_url}/downloadresume/docx`, {
        method: 'POST',
      });
      if (!docxResponse.ok) throw new Error("Failed to fetch DOCX");
      const docxBlob = await docxResponse.blob();
      setDocxBlob(docxBlob);

      // Fetch PDF
      const pdfResponse = await fetch(`${base_url}/downloadresume/pdf`, {
        method: 'POST',
      });
      if (!pdfResponse.ok) throw new Error("Failed to fetch PDF");
      const pdfBlob = await pdfResponse.blob();
      setPdfBlob(pdfBlob);

      // Open preview in a new tab
      const url = window.URL.createObjectURL(pdfBlob); // Using PDF for preview
      window.open(url, "_blank");

      setShowPreviewButtons(true); // Enable download buttons
    } catch (error) {
      console.error("Error while previewing resume:", error);
    } finally {
      setIsTailoring(false); // Hide tailoring message
    }
  };

  const handleDownloadResumePDF = () => {
    if (!pdfBlob) return;
    const url = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const handleDownloadResumeDocx = () => {
    if (!docxBlob) return;
    const url = window.URL.createObjectURL(docxBlob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'resume.docx');
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div className="get-started-container">
      <header className="header">
        <h1>
          <span className="highlight"> Job Aligned Personalized Resume </span>
        </h1>
      </header>

      <section className="get-started-banner">
        <div className="content">
          <p>Upload your JD (PDF)</p>
          <div className="buttons-row">
            <input type="file" accept=".pdf" onChange={handleJDSubmit} />
          </div>
          <p>Upload your resume (PDF)</p>
          <div className="buttons-row">
            <input type="file" accept=".pdf" onChange={handleFileUpload} />
          </div>

          {JDFile && resumeFile && (
            <Slide direction="up" triggerOnce={true}>
              <div className="buttons-row">
                <button onClick={handleGetResumeScoreClick}>Get Resume Score</button>
                <button onClick={handlePreviewResumeClick}>Preview Resume</button>
                {showPreviewButtons && (
                  <>
                    <button onClick={handleDownloadResumePDF}>Download Resume (PDF)</button>
                    <button onClick={handleDownloadResumeDocx}>Download Resume (.docx)</button>
                  </>
                )}
              </div>
            </Slide>
          )}

          {loading ? (
            <div className="score-message">Loading...</div>
          ) : (
            <>
              {showMessage && (
                <div className="semicircle-container">
                <div 
                  className="semicircle" 
                  style={{
                    borderColor: 
                      parseFloat(resumeScore.replace('%', '')) < 50 ? 'red' : 
                      parseFloat(resumeScore.replace('%', '')) < 75 ? 'yellow' : 
                      'green'
                  }}
                >
                  <span 
                    className="score-label" 
                    style={{
                      color: 
                        parseFloat(resumeScore.replace('%', '')) < 50 ? 'red' : 
                        parseFloat(resumeScore.replace('%', '')) < 75 ? 'yellow' : 
                        'green'
                    }}
                  >
                    {parseFloat(resumeScore.replace('%', '')) < 50 ? 'Low' : 
                     parseFloat(resumeScore.replace('%', '')) < 75 ? 'Mid' : 
                     'High'}
                  </span>
                </div>
              </div>              
              )}
              {isTailoring && (
                <div className="tailoring-message" style={{ marginTop: '10px', color: 'blue' }}>
                  Your resume is getting tailored. Please wait...
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <footer className="footer-copy">
        <p>2024 &copy; Resume Magic</p>
      </footer>
    </div>
  );
}
