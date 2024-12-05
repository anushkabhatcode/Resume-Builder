// import React, { useEffect, useState } from "react";

// const ResumeManager = () => {
//   const [docxBlob, setDocxBlob] = useState(null);
//   const [pdfBlob, setPdfBlob] = useState(null);
//   const [showPreviewButtons, setShowPreviewButtons] = useState(false);
//   const [isTailoring, setIsTailoring] = useState(false);

//   const [markdownContent, setMarkdownContent] = useState("");

//   const base_url = "http://127.0.0.1:5000/api"; 

//   const handleTailorResumeClick = async () => {
//     setIsTailoring(true); 
//     try {
//       const response = await fetch(`${base_url}/tailorresume`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       if (response.status === 200) {
//         const data = await response.json(); 
//         // console.log("Tailored Resume: ", data.resume);
//         console.log("File Path: ", data.filepath);
  
//         // Display tailored resume content as markdown
//         setMarkdownContent(data.resume);
  
//         setDocxBlob(data.filepath); 
//         setPdfBlob(data.filepath.replace(".docx", ".pdf")); 
  
//         setShowPreviewButtons(true); 
//       } else {
//         console.error("Failed to fetch tailored resume");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsTailoring(false); 
//     }
//   };


//   const handleGetResumePath = async () => {
//     try {
//       // Fetch DOCX
//       const docxResponse = await fetch(`${base_url}/download/docx`, {
//         method: "POST",
//       });
//       if (!docxResponse.ok) throw new Error("Failed to fetch DOCX");
//       const docxBlob = await docxResponse.blob();
//       setDocxBlob(docxBlob);

//       // Fetch PDF
//       const pdfResponse = await fetch(`${base_url}/download/pdf`, {
//         method: "POST",
//       });
//       if (!pdfResponse.ok) throw new Error("Failed to fetch PDF");
//       const pdfBlob = await pdfResponse.blob();
//       setPdfBlob(pdfBlob);

//       console.log("DOCX Blob:", docxBlob);
//       console.log("PDF Blob:", pdfBlob);

//       setShowPreviewButtons(true); // Enable download buttons
//     } catch (error) {
//       console.error("Error while fetching resume paths:", error);
//     }
//   };


//   useEffect(() => {
//     if (docxBlob && pdfBlob) {
//       console.log("DOCX and PDF blobs have been updated!");
//       console.log("DOCX Blob:", docxBlob);
//       console.log("PDF Blob:", pdfBlob);
//     }
//   }, [docxBlob, pdfBlob]); 
//   const handleDownloadResumePDF = () => {
//     if (!pdfBlob) return;
//     const url = window.URL.createObjectURL(pdfBlob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "resume.pdf");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleDownloadResumeDocx = () => {
//     if (!docxBlob) return;
//     const url = window.URL.createObjectURL(docxBlob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "resume.docx");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <button onClick={handleTailorResumeClick}>Tailor Resume</button>

//       {showPreviewButtons && (
//         <>
//           <button onClick={handleDownloadResumeDocx}>Download (.docx)</button>
//           <button onClick={handleDownloadResumePDF}>Download (PDF)</button>
//         </>
//       )}

//       {isTailoring && <p>Loading resume files...</p>}
//     </div>
//   );
// };

// export default ResumeManager;
