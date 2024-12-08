import React, { useEffect, useState } from 'react';
import '../styles/get-started.css';
import { Slide } from "react-awesome-reveal";
import { ResumePreview } from '../components/ResumePreview';
import { UploadedResumePreview } from '../components/UploadedResumePreview';
import mammoth from 'mammoth';  // For .docx files
// import * as pdfjsLib from 'pdfjs-dist';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
// import pdfWorker from 'pdfjs-dist/legacy/build/pdf.worker.entry';
// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;


export function GetStarted() {
  const [resumeScore, setResumeScore] = useState(null);
  const [resumeScoreReason, setResumeScoreReason] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [JDFile, setJDFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [docxBlob, setDocxBlob] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [showPreviewButtons, setShowPreviewButtons] = useState(false);
  const [isTailoring, setIsTailoring] = useState(false);
  const [uploadedResumeUrl, setUploadedResumeUrl] = useState(null); // State to store the uploaded resume URL
  const [markdownContent, setMarkdownContent] = useState("");
  const [uploadedResumeContent, setUploadedResumeContent] = useState("");
  const [tailorButtonClicked, setTailorButtonClicked] = useState(false); // Track if "Tailor Resume" button was clicked


  const base_url = "http://127.0.0.1:5000/api";

  const handleJDSubmit = async (event) => {
    const file = event.target.files[0];
    setJDFile(file);
     // Clear previous markdown content
    setMarkdownContent("");
    setUploadedResumeContent("");
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
    setUploadedResumeUrl(URL.createObjectURL(file)); // Create a blob URL for the uploaded resume

    // Clear previous data
    setMarkdownContent("");
    setUploadedResumeContent("");
    setTailorButtonClicked("");
    setResumeScore(null);
    setResumeScoreReason(null);
    setShowMessage(false);
    setShowPreviewButtons(false);
    // Code to show uploaded resume
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (fileExtension === 'docx') {
        // If it's a .docx file, extract text using mammoth.js
        const reader = new FileReader();
  
        reader.onload = async () => {
          const arrayBuffer = reader.result;
          try {
            // Extract raw text from the .docx file using mammoth
            const result = await mammoth.extractRawText({ arrayBuffer });
            const fileContent = result.value;
            setUploadedResumeContent(fileContent);  // Set the extracted text as markdown content
            console.log("Extracted Text from .docx:", fileContent);  // Log the content
          } catch (error) {
            console.error("Error extracting text from .docx:", error);
          }
        };
        // Read the file as ArrayBuffer (required by mammoth.js for docx files)
      reader.readAsArrayBuffer(file);

    } else if (fileExtension === 'pdf') {
      // If it's a .pdf file, extract text using pdf.js
      const reader = new FileReader();
   
      reader.onload = async () => {
        const arrayBuffer = reader.result;
        
        try {
          // Load the PDF document using pdf.js
          const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          let textContent = '';
          
          // Extract text from all the pages of the PDF
          for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            const page = await pdfDoc.getPage(pageNum);
            const text = await page.getTextContent();
   
            let pageText = '';
            let previousY = null;
   
            // Loop through the items and detect line breaks
            text.items.forEach(item => {
              if (previousY !== null && Math.abs(previousY - item.transform[5]) > 10) {
                // If the vertical position (Y) has changed significantly, it's a new line
                pageText += '\n';
              }
              pageText += item.str;  // Add the text item
              previousY = item.transform[5];  // Store the Y position for next comparison
            });
   
            textContent += pageText + '\n';  // Append the text of each page
          }
          
          setUploadedResumeContent(textContent);  // Set the extracted text as markdown content
          console.log("Extracted Text from .pdf:", textContent);  // Log the content
        } catch (error) {
          console.error("Error extracting text from .pdf:", error);
        }
      };

      // Read the PDF file as ArrayBuffer
      reader.readAsArrayBuffer(file);

    } else {
      console.error("Unsupported file type. Please upload a .docx, or .pdf file.");
    }
  }

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
        setResumeScoreReason(data.reason);
        setShowMessage(true);
        console.log("Resume Score: ", data.score);
        console.log("Resume Score Reason: ", data.reason);
      } else {
        console.error("Failed to fetch resume score");
        console.error("Failed to fetch resume score reason");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetNewResumeScoreClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${base_url}/getnewscore`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setResumeScore(data.score);
        setResumeScoreReason(data.reason);
        setShowMessage(true);
        console.log("Resume Score: ", data.score);
        console.log("Resume Score Reason: ", data.reason);
      } else {
        console.error("Failed to fetch resume score");
        console.error("Failed to fetch resume score reason");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  
  
  const handleGetResumePath1 = async () => {
    setTailorButtonClicked(true);
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
      setMarkdownContent(data.resume);

      // Fetch DOCX & PDF Blobs
        // Fetch DOC
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
      // const docxFilePath = `${base_url}/downloads/${data.filepath}`;
      // const pdfFilePath = `${base_url}/downloads/${data.filepath.replace(".docx", ".pdf")}`;

      // // Fetch DOCX Blob
      // const docxResponse = await fetch(docxFilePath);
      // if (!docxResponse.ok) throw new Error("Failed to fetch DOCX Blob");
      // const docxBlob = await docxResponse.blob();
      // setDocxBlob(docxBlob);

      // Fetch PDF Blob
      setShowPreviewButtons(true);
    } catch (error) {
      console.error("Error while fetching resume paths:", error);
    } finally {
      setIsTailoring(false);
    }
  };

  useEffect(() => {
    if (docxBlob && pdfBlob) {
      console.log("DOCX and PDF blobs have been updated!");
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
    link.setAttribute("download", "Updated_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadResumeDocx = () => {
    if (!docxBlob) return;

    const url = window.URL.createObjectURL(docxBlob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Updated_Resume.docx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="get-started-container">
      <header className="header">
        <h1>
          <span className="highlight"> Job Aligned Personalized Resume </span>
        </h1>
      </header>

      <section className="get-started-banner">
        <div className="upload-content">
          <span>Upload your JD (PDF or DOCX)</span>
          <div className="buttons-row">
            <input type="file" accept=".pdf, .docx" onChange={handleJDSubmit} />
          </div>
          <span>Upload your resume (PDF or DOCX)</span>
          <div className="buttons-row">
            <input type="file" accept=".pdf, .docx" onChange={handleFileUpload} />
          </div>

          {JDFile && resumeFile && (
            <Slide direction="up" triggerOnce={true}>
              <div className="buttons-row">
                <button onClick={handleGetResumeScoreClick}>Get Resume Score</button>
                <button onClick={handleGetResumePath1}>Tailor Resume</button>
                {showPreviewButtons && (
                  <>
                    <button onClick={handleGetNewResumeScoreClick}>Get Tailored Resume Score</button>
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
                      borderColor: resumeScore < 50 ? '#e0281b' :
                        resumeScore < 75 ? '#ecbb09' : '#389410'
                    }}
                  >
                    <span
                      className="score-label"
                      style={{
                        color: resumeScore < 50 ? '#e0281b' :
                          resumeScore < 75 ? '#ecbb09' : '#389410'
                      }}
                    >
                      {/* {resumeScore < 50 ? 'Low' :
                        resumeScore < 75 ? 'Mid' : 'High'} */}
                        {resumeScore}%
                    </span>
                  </div>
                  <div className="score-reason-container">
                    <p className="score-reason">Resume Score Reason: {resumeScoreReason}</p>
                  </div>
                </div>
              )}

              {isTailoring && (
                <div className="tailoring-message" style={{ marginTop: '10px', color: '#ecbb09' }}>
                  Your resume is getting tailored. Please wait...
                </div>
              )}

              {/* <div className="display-content"> */}
                {/* {uploadedResumeUrl && (
                  <div>
                    {resumeFile && resumeFile.name.endsWith(".pdf") ? (
                      <iframe
                        src={uploadedResumeUrl}
                        title="Uploaded Resume"
                        width="100%"
                        height="600px"
                        style={{ border: "1px solid #ccc" }}
                      />
                    ) : (
                      <a href={uploadedResumeUrl} target="_blank" rel="noopener noreferrer">
                        View Uploaded Resume (DOCX)
                      </a>
                    )}
                  </div>
                )} */}
                <div className= "resume-container">
                  {tailorButtonClicked && uploadedResumeContent && (
                    <Slide direction="up" triggerOnce={true}>
                      <div className="uploaded-resume-preview">
                        <h4>Uploaded Resume</h4>
                        <UploadedResumePreview uploadedResumeContent={uploadedResumeContent} />
                      </div>
                    </Slide>
                  )}

                  {/* Display tailored resume if available */}
                  {markdownContent && (
                    <Slide direction="up" triggerOnce={true}>
                      <div className="resume-preview">
                        <h4>Tailored Resume</h4>
                        <ResumePreview markdownContent={markdownContent} />
                      </div>
                    </Slide>
                  )}
                </div>
              {/* </div> */}
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
