from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os, sys
import ssl
from flask import send_from_directory

app = Flask(__name__)
# CORS(app)
CORS(app, resources={r"/*": {"origins": ["*"]} })
# CORS(app, resources={r"/*": {
#     "origins": 
#     [
#     "http://localhost:3000", 
#     "https://resume-builder-5mbc.onrender.com/"
#     ]
#     }})
                             
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)


DOWNLOAD_FOLDER = 'downloads'
app.config['DOWNLOAD_FOLDER'] = DOWNLOAD_FOLDER
os.makedirs(app.config['DOWNLOAD_FOLDER'], exist_ok=True)

ssl._create_default_https_context = ssl._create_unverified_context
sys.path.append(os.path.join(os.path.dirname(__file__), 'Models'))
from resume_generation_gemini_pro import *
from Gemeni_pro_similarity import *

# Serve React frontend
@app.route('/')
def serve_react():
    return send_from_directory(app.static_folder, 'index.html')

# Serve React static files (CSS, JS, images)
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)


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
    response = similarity_main(resume_file_path,JD_file_path)
    score = response["score"]
    reason = response["reason"]
    return jsonify({"score" : score , "reason" : reason}) , 200

#Tailored Resume Similarity Score 
@app.route('/api/getnewscore', methods=['POST'])
def handle_new_resume_similarity_score():
    JD_file_path = app.config['JD_PATH']
    file_name = app.config["FILE_NAME"]
    file_path = returnFile(file_name , "pdf")
    download_path = app.config['DOWNLOAD_FOLDER']
    resume_file_path = os.path.join(download_path , file_path)
    response = similarity_main(resume_file_path,JD_file_path)
    score = response["score"]
    reason = response["reason"]
    return jsonify({"score" : score , "reason" : reason}) , 200
    


@app.route('/api/downloadresume/<filetype>' , methods=['POST'])
def download_resume(filetype):
    # resume_file_path = app.config['RESUME_PATH']
    # JD_file_path = app.config['JD_PATH']
    download_path = app.config['DOWNLOAD_FOLDER']
    # resume , file_path = generate_gemini(resume_file_path, JD_file_path , download_path , filetype)
    file_name = app.config["FILE_NAME"]
    file_path = returnFile(file_name , filetype)
    download_path = os.path.join(download_path , file_path)
    return send_file(download_path)
    


# PK: Tailor resume and send as markdown to frontend
"""
Method to tailor the resume based on the job description and resume uploaded
returns json data
"""
@app.route('/api/tailorresume', methods=['POST'])
def tailor_resume_endpoint():
    try:
        # Get resume and job description paths
        resume_file_path = app.config['RESUME_PATH']
        jd_file_path = app.config['JD_PATH']

        # Generate the tailored resume using gemini_pro
        download_path = app.config['DOWNLOAD_FOLDER']
        tailored_resume, filepath = generate_gemini(resume_file_path, jd_file_path, download_path)

        # filename = os.path.basename(filepath)
        print(f"Generated file path: {filepath}")
        filename = os.path.basename(filepath)
        app.config['FILE_NAME'] = filename
        if tailored_resume:
            return jsonify({"resume": tailored_resume, "filepath": filename}), 200
        else:
            return jsonify({"error": "Failed to generate resume"}), 500
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Internal server error"}), 500
    
# @app.route('/api/downloads/<filename>', methods=['GET'])
# def download_file(filename):
#     try:
#         file_path = os.path.join(app.config['DOWNLOAD_FOLDER'], filename)
#         print(f"Requested file path: {file_path}")
#         if not os.path.exists(file_path):
#             print("File does not exist.")
#             return jsonify({"error": "File not found"}), 404

#         print("File found. Returning file.")
#         return send_file(
#             file_path,
#             as_attachment=True,
#             mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
#         )
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": "Internal server error"}), 500

# Function to get score of tailored resume against JD
@app.route('/api/get_new_score', methods=['GET'])
def handle_new_similarity_score():
    resume_file_path = app.config['DOWNLOAD_FOLDER']
    JD_file_path = app.config['JD_PATH']
    # score = similarity_main(resume_file_path,JD_file_path)
    score = process_files(JD_file_path, resume_file_path)
    return jsonify({"score" : score}) , 200


if __name__ == '__main__':
    app.run(debug=True , host='0.0.0.0', port=5000)
