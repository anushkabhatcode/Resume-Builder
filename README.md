# Resume Builder with Google Gemini Pro

This application tailors a user's resume to align with a given job description by leveraging the capabilities of Google’s Gemini Pro AI model. It streamlines the resume customization process, helping users quickly highlight relevant skills and experiences to increase their chances of securing interviews.

**Access the Live Application:** [http://34.132.65.232:3000/](http://34.132.65.232:3000/)

## Overview

The Resume Builder project enables Purdue University Fort Wayne (PFW) Career Development Center and PFW students to simplify and enhance the resume preparation process. By integrating advanced AI-driven text generation and job readiness analysis, the system helps students present their qualifications in a way that best matches the target job description.

### Key Features
1. **Resume Upload:**  
   Upload your current resume in `.docx` or `.pdf` format.
2. **Job Description Analysis & Comparison:**  
   Upload the target job description to assess how closely your current resume matches the job requirements.  
   A similarity score (0–100%) is provided to help gauge alignment.
3. **Generate Enhanced Resume:**  
   With a single click, generate a tailored resume using Google’s Gemini Pro AI model. The tool emphasizes the most relevant skills, experiences, and achievements for the selected job description.
4. **Download Generated Resume:**  
   Obtain the new, customized resume in `.docx` (and optionally `.pdf`) format.

## How It Works

1. **Upload Documents:**  
   Provide your existing resume and the job description you want to target.
   
2. **AI Analysis & Tailoring:**  
   The system extracts text from the uploaded files and constructs prompts for Gemini Pro.  
   - **Gemini Pro** receives the combined context and transforms the original resume into a version that highlights the most relevant qualifications.
   
3. **Similarity Scoring:**  
   The tailored resume and job description are compared to generate a similarity score. This helps you understand how well the your current skills presented in the original resume aligns with the job requirements.

4. **Download & Refine:**  
   Download the customized resume and, if needed, make final manual adjustments before submitting it to prospective employers.

## Technology Stack
- **Frontend:**  
  - [React](https://reactjs.org/) for building a responsive and interactive user interface.
  
- **Backend & Server:**  
  - [Flask](https://flask.palletsprojects.com/) for handling server-side logic, API endpoints, and communication between the frontend and the AI services.

- **AI Model Integration:**  
  - [Google Generative AI](https://cloud.google.com/gen-ai) with Gemini Pro for content generation and resume tailoring.

- **File Parsing & Processing:**  
  - `PyPDF2` for extracting text from PDFs.  
  - `docx2txt` and `python-docx` for reading and manipulating `.docx` files.

- **Text Processing & Conversion:**  
  - Tokenization and text preprocessing using `tf.keras.preprocessing`.  
  - Resume formatting and conversion to DOCX and PDF using `python-docx` and headless LibreOffice.

- **Comparison & Similarity:** Custom logic to measure alignment between the candidates resume and the job description.
  
## Setup & Deployment

## Setup & Deployment

**Prerequisites:**  
- [Node.js](https://nodejs.org/en/) installed on your machine for running the React frontend.
- [Python 3.x](https://www.python.org/downloads/) installed for running the Flask backend.
- Access to the Google Generative AI API (Gemini Pro) and a valid `GOOGLE_GEMINI_KEY`.

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/resume-builder-gemini-pro.git
cd resume-builder-gemini-pro
```
### 2. Set Environment Variables
export GOOGLE_GEMINI_KEY="your_google_gemini_api_key"

### 3. Frontend Setup (React)

cd frontend/my-app
npm install    # Install frontend dependencies
npm run build  # Optionally build for production, or skip and just run locally
npm start      # Start the React development server

### 4. Backend Setup (Flask)
cd ../../backend   # Navigate back and into the backend folder
pip install -r requirements.txt   # Install backend dependencies

### 5. Run the Flask Server
flask run

### 6. Accessing the Deployed Version
A deployed version may be accessible at: http://34.132.65.232:3000/

If running locally, use:

Frontend: http://localhost:3000
Backend: http://127.0.0.1:5000


## Use Cases
Career Development Centers:
Help career advisors efficiently prepare students' resumes for different roles, enhancing the relevance of each application.

## Students & Job Seekers:
Quickly adapt a single "master resume" to fit multiple job applications, saving time and ensuring a better match each time.
