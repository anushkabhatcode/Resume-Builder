import React, { useEffect, useState } from 'react';
import '../styles/get-started.css';
import { Slide } from "react-awesome-reveal";
import { ResumePreview } from '../components/ResumePreview';

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

  const [markdownContent, setMarkdownContent] = useState("");

  const base_url = "http://127.0.0.1:5000/api";
  // const base_url = "https://resume-builder-api-iuk0.onrender.com/api";

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
  
  
  const handleGetResumePath1 = async () => {
    setIsTailoring(true);
    try {
      const response = await fetch(`${base_url}/tailorresume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      // Display tailored resume content as markdown
      setMarkdownContent(data.resume);
  
      // Fetch file paths
      const docxFilePath = `${base_url}/downloads/${data.filepath}`;
      const pdfFilePath = `${base_url}/downloads/${data.filepath.replace(".docx", ".pdf")}`;
  
      console.log("DOCX Download URL:", docxFilePath);
      console.log("PDF Download URL:", pdfFilePath);
  
      // Fetch DOCX Blob
      const docxResponse = await fetch(docxFilePath);
      const contentType = docxResponse.headers.get("Content-Type");
      if (!docxResponse.ok) throw new Error("Failed to fetch DOCX Blob");
      if (contentType !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        console.error("Invalid DOCX response");
        return;
      }
      const docxBlob = await docxResponse.blob();
      setDocxBlob(docxBlob);
      console.log("DOCX Blob fetched successfully");
  
      // Fetch PDF Blob
      // const pdfResponse = await fetch(pdfFilePath);
      // if (!pdfResponse.ok) throw new Error("Failed to fetch PDF Blob");
      // const pdfBlob = await pdfResponse.blob();      
      // setPdfBlob(pdfBlob);      
      // console.log("PDF Blob fetched successfully");
  
      setShowPreviewButtons(true);
    } catch (error) {
      console.error("Error while fetching resume paths:", error);
    }finally {
      setIsTailoring(false); // Hide tailoring message
    }
  };
  
  
  // const handlePreviewResumeClick = async () => {
  //   setIsTailoring(true); // Show tailoring message
  //   try {
  //     // Fetch DOCX
  //     const docxResponse = await fetch(`${base_url}/downloadresume/docx`, {
  //       method: 'POST',
  //     });
  //     if (!docxResponse.ok) throw new Error("Failed to fetch DOCX");
  //     const docxBlob = await docxResponse.blob();
  //     setDocxBlob(docxBlob);

  //     // Fetch PDF
  //     const pdfResponse = await fetch(`${base_url}/downloadresume/pdf`, {
  //       method: 'POST',
  //     });
  //     if (!pdfResponse.ok) throw new Error("Failed to fetch PDF");
  //     const pdfBlob = await pdfResponse.blob();
  //     setPdfBlob(pdfBlob);

  //     // Open preview in a new tab
  //     const url = window.URL.createObjectURL(pdfBlob); // Using PDF for preview
  //     window.open(url, "_blank");

  //     setShowPreviewButtons(true); // Enable download buttons
  //   } catch (error) {
  //     console.error("Error while previewing resume:", error);
  //   } finally {
  //     setIsTailoring(false); // Hide tailoring message
  //   }
  // };

  useEffect(() => {
    if (docxBlob && pdfBlob) {
      console.log("DOCX and PDF blobs have been updated!");
      console.log("DOCX Blob:", docxBlob);
      console.log("PDF Blob:", pdfBlob);
    }
  }, [docxBlob, pdfBlob]); 


  const handleDownloadResumePDF = () => {
    if (!pdfBlob) {
      console.error("PDF Blob is not available for download.");
      return;
    }
    const url = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    // link.parentNode.removeChild(link);
    document.body.removeChild(link);
  };
  
  const handleDownloadResumeDocx = () => {
    if (!docxBlob) return;
    
    const url = window.URL.createObjectURL(docxBlob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.docx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    //   link.parentNode.removeChild(link);
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
          <span>Upload your JD (PDF)</span>
          <div className="buttons-row">
            <input type="file" accept=".pdf" onChange={handleJDSubmit} />
          </div>
          <span>Upload your resume (PDF)</span>
          <div className="buttons-row">
            <input type="file" accept=".pdf" onChange={handleFileUpload} />
          </div>

          {JDFile && resumeFile && (
            <Slide direction="up" triggerOnce={true}>
              <div className="buttons-row">
                <button onClick={handleGetResumeScoreClick}>Get Resume Score</button>
                {/* <button onClick={handlePreviewResumeClick}>Preview Resume</button> */}
                {/* <button onClick={handleTailorResumeClick}>Preview Resume</button> */}
                <button onClick={handleGetResumePath1}>Tailor Resume</button>
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
                      parseFloat(resumeScore.replace('%', '')) < 50 ? '#472d30' : 
                      parseFloat(resumeScore.replace('%', '')) < 75 ? '#e36414' : 
                      '#0f4c5c'
                  }}
                >
                  <span 
                    className="score-label" 
                    style={{
                      color: 
                        parseFloat(resumeScore.replace('%', '')) < 50 ? '#472d30' : 
                        parseFloat(resumeScore.replace('%', '')) < 75 ? '#e36414' : 
                        '#0f4c5c'
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
                <div className="tailoring-message" style={{ marginTop: '10px', color: '#FAF9F6' }}>
                  Your resume is getting tailored. Please wait...
                </div>
              )}
              
              <div className="content">
                
              {markdownContent && (
                  <Slide direction="up" triggerOnce={true}>
                    <ResumePreview markdownContent={markdownContent} />
                  </Slide>
                )}

          </div>
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
