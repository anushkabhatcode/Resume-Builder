from flask import Flask, request, jsonify
from flask_cors import CORS
import os, sys
import ssl

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

ssl._create_default_https_context = ssl._create_unverified_context
sys.path.append(os.path.join(os.path.dirname(__file__), '../Models'))
from similarity_score_refined import *



# Function to handle the resume upload
def save_resume_file(resume):

    try:
        # Check if the resume file exists
        if resume.filename == '':
            return '', 400  # If no file is selected, return 400 Bad Request

        # Save the file to the uploads folder
        if resume:
            # create a temp folder for storing the resume
            os.makedirs(app.config['UPLOAD_FOLDER'] + '/resume' , exist_ok=True)
            filename = os.path.join(app.config['UPLOAD_FOLDER'] + '/resume' , resume.filename)
            app.config['RESUME_PATH'] = filename
            resume.save(filename)
            print(f"Received resume: {resume.filename}")
            return '', 200  # Return HTTP 200 with no body
    except Exception as e:
        print(f"Error: {e}")
        return '', 500  # Return HTTP 500 if there is any error

def save_JD_file(JD):
    try:
        # Check if the resume file exists
        if JD.filename == '':
            return '', 400  # If no file is selected, return 400 Bad Request

        # Save the file to the uploads folder
        if JD:
            os.makedirs(app.config['UPLOAD_FOLDER'] + '/JD' , exist_ok=True)
            filename = os.path.join(app.config['UPLOAD_FOLDER'] + '/JD',  JD.filename)
            app.config['JD_PATH'] = filename
            JD.save(filename)
            print(f"Received JD: {JD.filename}")
            return '', 200  # Return HTTP 200 with no body
    except Exception as e:
        print(f"Error: {e}")
        return '', 500  # Return HTTP 500 if there is any error

# Endpoint to handle the resume file received in a POST request
@app.route('/api/uploadresume', methods=['POST'])
def handle_resume():
    # Check if the request contains a file
    if 'resume' not in request.files:
        return '', 400  # If no file is found, return 400 Bad Request

    resume = request.files['resume']
    # Call the separate function to handle the file saving logic
    return save_resume_file(resume)


# Endpoint to handle the job description received in a POST request
@app.route('/api/submitjd', methods=['POST'])
def handle_job_description():
    # Check if a file is part of the request
    if 'JD' not in request.files:
        return jsonify({"error": "JD not provided"}), 400
        
    # Retrieve the uploaded file
    JD = request.files['JD']

    return save_JD_file(JD)


@app.route('/api/getscore', methods=['POST'])
def handle_similarity_score():

    resume_file_path = app.config['RESUME_PATH']
    JD_file_path = app.config['JD_PATH']
    score = similarity_main(resume_file_path,JD_file_path)
    return jsonify({"score" : score}) , 200
    


if __name__ == '__main__':
    app.run(debug=True)
