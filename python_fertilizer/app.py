from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os

app = Flask(__name__)
CORS(app, origins=["*"])  # Allow all origins for now, but you can restrict it later

# Load the trained model and label encoder
with open('fertilizer_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('label_encoder.pkl', 'rb') as encoder_file:
    label_encoder = pickle.load(encoder_file)

# Define a simple route for the root URL
@app.route('/')
def home():
    return "Backend is running successfully!"

# Define the route to handle predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Ensure the request is JSON
        if not request.is_json:
            return jsonify({'error': 'Request content-type must be application/json'}), 400

        # Get JSON data from request
        data = request.json
        nitrogen = float(data['nitrogen'])
        phosphorus = float(data['phosphorus'])
        potassium = float(data['potassium'])

        # Create the input array for the model
        input_data = np.array([[nitrogen, phosphorus, potassium]])

        # Predict the fertilizer using the model
        prediction_encoded = model.predict(input_data)[0]

        # Decode the prediction
        crop_name = label_encoder.inverse_transform([prediction_encoded])[0]

        # Send the result back to the frontend
        return jsonify({'fertilizer': crop_name})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5002))
    app.run(host='0.0.0.0', port=port)