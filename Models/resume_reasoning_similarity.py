from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from docx import Document
import PyPDF2
from io import BytesIO
from docx.opc.exceptions import PackageNotFoundError

# Load the pre-trained model
model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

def read_file(file_path):
    """
    Extracts text from a file based on its format (PDF or DOCX).
    
    Args:
        file_path (str): Path to the file.
    
    Returns:
        str: Extracted text from the file.
    """
    if file_path.lower().endswith('.pdf'):
        try:
            with open(file_path, 'rb') as file:
                reader = PyPDF2.PdfReader(file)
                text = "".join(page.extract_text() for page in reader.pages if page.extract_text())
            return text
        except Exception as e:
            raise ValueError(f"Error reading PDF file: {e}")
    elif file_path.lower().endswith('.docx'):
        try:
            doc = Document(file_path)
            text = "\n".join(paragraph.text for paragraph in doc.paragraphs)
            return text
        except PackageNotFoundError:
            raise ValueError("The provided content is not a valid .docx file.")
        except Exception as e:
            raise ValueError(f"Error reading DOCX file: {e}")
    else:
        raise ValueError("Unsupported file format. Only 'pdf' and 'docx' are supported.")

def calculate_similarity(jd_text, resume_text):
    """
    Calculate cosine similarity between job description and resume text embeddings.
    
    Args:
        jd_text (str): Text content of the job description.
        resume_text (str): Text content of the resume.
    
    Returns:
        float: Similarity score as a percentage.
    """
    jd_embedding = model.encode([jd_text])
    resume_embedding = model.encode([resume_text])
    similarity_score = cosine_similarity(jd_embedding, resume_embedding)[0][0]
    return similarity_score * 100  # Convert to percentage

def analyze_similarity(similarity_score):
    """
    Provide reasoning based on similarity score.
    
    Args:
        similarity_score (float): Similarity score as a percentage.
    
    Returns:
        str: Reasoning explanation.
    """
    if similarity_score > 60:
        return ("The high similarity indicates a strong alignment between the job description and the resume.\n"
                "This means the resume contains skills, experiences, and qualifications that match well with the job.")
    elif similarity_score > 30:
        return ("The moderate similarity suggests some overlap between the resume and the job description.\n"
                "There are some relevant skills or experiences in the resume, but it might not be a perfect match for the job requirements.")
    else:
        return ("The low similarity indicates a weak alignment between the job description and the resume.\n"
                "The resume likely lacks key qualifications or experience that are important for the job.")

def process_files(jd_file_path, resume_file_path):
    """
    Main function to calculate the similarity score between a resume and a job description.
    
    Args:
        jd_file_path (str): Path to the job description file.
        resume_file_path (str): Path to the resume file.
    
    Returns:
        dict: A dictionary containing the similarity score and reasoning explanation.
    """
    try:
        # Extract text from the files (resume and job description)
        jd_text = read_file(jd_file_path)
        resume_text = read_file(resume_file_path)

        # Calculate similarity score
        similarity_score = calculate_similarity(jd_text, resume_text)

        # Get reasoning
        reasoning = analyze_similarity(similarity_score)

        # Return result as dictionary
        return {
            'similarity_score': f"{similarity_score:.2f}%",
            'reasoning': reasoning
        }

    except Exception as e:
        return {'error': str(e)}
