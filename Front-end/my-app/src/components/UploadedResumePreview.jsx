import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export function UploadedResumePreview({ uploadedResumeContent }) {
  return (
    <div className="resume-preview">
      <ReactMarkdown>{uploadedResumeContent}</ReactMarkdown>
    </div>
    
  );
}