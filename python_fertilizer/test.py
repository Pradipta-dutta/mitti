import time
import firebase_admin
from firebase_admin import db
from sklearn.externals import joblib

# Initialize Firebase app
firebase_admin.initialize_app(options={
    'databaseURL': 'https://mitti-c2063-default-rtdb.firebaseio.com/'
})

# Load the trained model
model = joblib.load('fertilizer_model.pkl')

# Global variable to store the latest prediction
latest_prediction = {}

# Create a global variable to store the last known sensor data
last_known_sensor_data = {
    'Nitrogen': None,
    'Phosphorous': None,
    'Potassium': None
}

# Function to make a prediction using the machine learning model
def make_prediction(sensor_data):
    try:
        # Extract features from the sensor data
        features = [sensor_data['Nitrogen'], sensor_data['Phosphorous'], sensor_data['Potassium']]
        prediction = model.predict([features])
        return prediction[0]  # Return the predicted fertilizer
    except Exception as e:
        print(f"Error making prediction: {e}")
        return None

# Firebase listener function to listen for changes in sensor data
def firebase_listener(event):
    global last_known_sensor_data
    
    print("Listener triggered")
    
    data = event.data
    print(f"Data received from Firebase: {data}")

    # Check if the received data is a dictionary and contains the expected keys
    if isinstance(data, dict) and all(key in data for key in ['Nitrogen', 'Phosphorous', 'Potassium']):
        # Update the last known sensor data with new values
        last_known_sensor_data.update(data)

        print(f"Valid sensor data: {last_known_sensor_data}")

        # Add a 10-second delay before making the prediction
        time.sleep(10)
        print("Processing data after a 10-second delay...")

        prediction = make_prediction(last_known_sensor_data)  # Call prediction with full data
        if prediction:
            # Store the prediction in Firebase under the 'fertilizer' key
            sensor_data_ref = db.reference('sensor_data')
            sensor_data_ref.update({'fertilizer': prediction})
            
            # Also store it in the global variable for API access
            latest_prediction["fertilizer"] = prediction
            
            print(f"Stored prediction: {prediction}")
        else:
            print("No prediction made")
    
    # Handle case where an integer or invalid data format is received
    elif isinstance(data, int):
        print(f"Received unexpected integer data: {data}")
    else:
        print(f"Unexpected data format received: {data}. Expected a dictionary with 'Nitrogen', 'Phosphorous', and 'Potassium'.")
        print("No valid sensor data received")

# Firebase reference and listener setup
sensor_data_ref = db.reference('sensor_data')
sensor_data_ref.listen(firebase_listener)

# Flask app to display the prediction on the frontend
from flask import Flask, jsonify

app = Flask(__name__)

# API endpoint to return the latest prediction
@app.route('/get_prediction', methods=['GET'])
def get_prediction():
    return jsonify(latest_prediction)

if __name__ == '__main__':
    app.run(debug=True)
