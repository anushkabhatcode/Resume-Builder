import React, { useState } from 'react';
import '../styles/get-started.css';
import { Slide } from "react-awesome-reveal";
import { ResumePreview } from '../components/ResumePreview';
import htmlToDocx from "html-to-docx";
import { jsPDF } from "jspdf";
import htmlToPdfMake from "html-to-pdfmake";

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
  const [tailoredFilePath, setTailoredFilePath] = useState();

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

  const handleTailorResumeClick = async () => {
    setIsTailoring(true); // Show tailoring message
    try {
      const response = await fetch(`${base_url}/tailorresume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMarkdownContent(data.resume);
        console.log(data.filepath);
        // setTailoredFilePath(data.filepath);
        setShowPreviewButtons(true); // Enable download buttons
      } else {
        console.error("Failed to fetch tailored resume");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // setLoading(false);
      setIsTailoring(false);
    }
  };

  // const handleDownload = async (format) => {
  //   if (!markdownContent) {
  //     console.error("No content to download.");
  //     return;
  //   }
  
  //   if (format === "word") {
  //     // Convert Markdown to HTML for Word
  //     const contentHtml = `<div>${markdownContent}</div>`;
  //     const blob = await htmlToDocx(contentHtml, null, {
  //       margins: { top: 720, right: 720, bottom: 720, left: 720 },
  //     });
  
  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(blob);
  //     link.download = "Tailored_Resume.docx";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else if (format === "pdf") {
  //     // Convert Markdown to HTML for PDF
  //     const doc = new jsPDF();
  //     const contentHtml = `<div>${markdownContent}</div>`;
  //     const pdfContent = htmlToPdfMake(contentHtml);
  
  //     // Add content to the PDF
  //     doc.html(contentHtml, {
  //       callback: (doc) => {
  //         doc.save("Tailored_Resume.pdf");
  //       },
  //     });
  //   }
  // };

  // const handleDownload = async (format) => {
  //   if (!markdownContent) {
  //     console.error("No content to download.");
  //     return;
  //   }
  
  //   if (format === "word") {
  //     const contentHtml = `<div>${markdownContent}</div>`;
  //     const blob = await htmlToDocx(contentHtml, null, {
  //       margins: { top: 720, right: 720, bottom: 720, left: 720 },
  //     });
  
  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(blob);
  //     link.download = "Tailored_Resume.docx";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else if (format === "pdf") {
  //     // generatePDF();
      
  //   }
  // };
  const handleDownload = async (format) => {
    if (!markdownContent) {
      console.error("No content to download.");
      return;
    }
  
    if (format === "word") {
      const contentHtml = `<div>${markdownContent}</div>`;
      const blob = await htmlToDocx(contentHtml, null, {
        margins: { top: 720, right: 720, bottom: 720, left: 720 },
      });
  
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Tailored_Resume.docx";
      setDocxBlob(docxBlob);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (format === "pdf") {
      // const pdfBlob = await pdfResponse.blob();
      setPdfBlob(pdfBlob);
      
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
  
    const contentHtml = `
      <div style="font-family: Arial, sans-serif; font-size: 12px; line-height: 1.6; text-align: left;">
        ${markdownContent}
      </div>
    `;
  
    doc.html(contentHtml, {
      callback: (doc) => {
        doc.save("Tailored_Resume.pdf");
      },
      x: 10,
      y: 10,
      width: 190, 
    });
  };

  const handleDownload2 = (format) => {
    const element = document.createElement("a");
    let fileContent;
    let fileName;

    if (format === "word") {
      fileContent = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${markdownContent}</body></html>`;
      fileName = "Tailored_Resume.docx";
    } else if (format === "pdf") {
      fileContent = markdownContent; 
      fileName = "Tailored_Resume.pdf";
    }

    const blob = new Blob([fileContent], {
      type: format === "word" ? "application/msword" : "application/pdf",
    });

    const url = URL.createObjectURL(blob);
    element.href = url;
    element.setAttribute("download", fileName);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
                {/* <button onClick={handlePreviewResumeClick}>Preview Resume</button> */}
                <button onClick={handleTailorResumeClick}>Preview Resume</button>
                {showPreviewButtons && (
                  <>
                    {/* <button onClick={handleDownloadResumePDF}>Download Resume (PDF)</button> */}
                    {/* <button onClick={handleDownloadResumeDocx}>Download Resume (.docx)</button> */}
                    <button onClick={() => handleDownload("word")}>Download (.docx)</button>
                    <button onClick={() => handleDownload("pdf")}>Download (PDF)</button>
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
