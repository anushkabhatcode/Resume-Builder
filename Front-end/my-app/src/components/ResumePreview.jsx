import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export function ResumePreview({ markdownContent }) {
  return (
    // {markdownContent && ( 
    <div className="resume-preview">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
    
  );
}