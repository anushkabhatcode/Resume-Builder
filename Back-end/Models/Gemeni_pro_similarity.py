from docx.opc.exceptions import PackageNotFoundError

def read_file(file_path):
    """
    Reads the content of a file. If the file is a PDF, it extracts the text using PyPDF2.
    If the file is a docx, it extracts the text using python-docx.
    Otherwise, it reads the file as a text file, trying different encodings if 'utf-8' fails.
    """

    # Check if the file exists before proceeding
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"File not found: {file_path}")

    if file_path.lower().endswith('.pdf'):
        with open(file_path, 'rb') as file:  # Open in binary read mode for PDFs
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page_num in range(len(reader.pages)):
                page = reader.pages[page_num]
                text += page.extract_text()
            return text
    elif file_path.lower().endswith('.docx'):
        # Handle docx files using python-docx
        try:
            doc = Document(file_path)
            text = ""
            for paragraph in doc.paragraphs:
                text += paragraph.text + "\n"  # Add newline for paragraph separation
            return text
        # Use the imported exception class
        except PackageNotFoundError:
            # Provide a more informative error message if the file is not a valid docx
            raise PackageNotFoundError(f"The file {file_path} is not a valid docx file. It may be corrupted or of a different format.")

import os
# from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain_community.vectorstores.faiss import FAISS

from docx import Document
import google.generativeai as genai
import PyPDF2

api_key_google = os.environ.get('GOOGLE_GEMINI_KEY')
genai.configure(api_key=api_key_google)

# Mount Google Drive

model = genai.GenerativeModel('gemini-pro')

def similarity_main(tailored_resume_path, job_description_path):
    """
    Use Gemini Pro to evaluate the relevance score between a tailored resume and job description.
    Args:
    - tailored_resume (str): Tailored resume content.
    - job_description (str): Job description content.
    Returns:
    - dict: A dictionary containing the 'score' (scaled to 0–100) and 'reason'.
    """

    resume_text = read_file(tailored_resume_path)
    job_description = read_file(job_description_path)
    prompt = f"""
You are a recruitment expert evaluating how well a tailored resume aligns with a job description. Provide a realistic and concise evaluation based on the following criteria:
1. Relevance of skills and experience: Do the candidate’s skills, accomplishments, and experience meet the job's core requirements?
2. Domain Match: Are the candidate's experiences and achievements relevant to the industry or role?
3. Clarity and Conciseness: Is the resume focused on the job requirements?
4. Highlight any gaps or mismatched qualifications realistically.

Provide your response in this exact format and make sure that score is a floating point number.
Score: [Score between 0 and 1]
Reason: [One or two sentences explaining the score]

Here is the tailored resume:
[Resume Start]
{resume_text}
[Resume End]

And the job description below:
[Job Description Start]
{job_description}
[Job Description End]
"""

    try:
        # Get the response from Gemini Pro

        response = model.generate_content(prompt,generation_config={"temperature": 0.2})
        candidates = response.candidates
        if not candidates or len(candidates) == 0:
            raise ValueError("No candidates found in the response.")

        # Extract content text
        content_text = candidates[0].content.parts[0].text

        # Extract score and reason with simple parsing
        lines = content_text.split("\n")
        score = None
        reason = None
        
        for line in lines:
            if line.lower().startswith("score:"):
                try:
                    line_cleaned = line.replace("**", "").strip()
                    score = float(line_cleaned.split(":", 1)[1].strip())
                except ValueError:
                    raise ValueError(f"Invalid score format: {line}")
            elif line.lower().startswith("reason:"):

                reason = line.replace("**", "").split(":", 1)[1].strip()

        # Ensure both score and reason are extracted
        if score is None:
            raise ValueError("Failed to extract score from the response.")
        if not reason:
            reason = "No reason provided."

        return {"score": score, "reason": reason}

    except Exception as e:
        print(f"Error in relevance checking: {e}")
        return None