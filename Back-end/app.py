from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Function to handle the resume upload
def save_resume_file(resume):

    try:
        # Check if the resume file exists
        if resume.filename == '':
            return '', 400  # If no file is selected, return 400 Bad Request

        # Save the file to the uploads folder
        if resume:
            # create a temp folder for storing the resume
            os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
            filename = os.path.join(app.config['UPLOAD_FOLDER'], resume.filename)
            resume.save(filename)
            print(f"Received resume: {resume.filename}")
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
    try:
        # Retrieve the job description from the request
        data = request.json
        job_description = data.get("jobDescription")

        # Print the job description to the console
        if job_description:
            print("Received Job Description:", job_description)
            return jsonify({"message": "Job description received successfully"}), 200
        else:
            return jsonify({"error": "Job description not provided"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
