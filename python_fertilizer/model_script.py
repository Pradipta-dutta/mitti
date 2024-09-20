import pickle
import numpy as np

# Define the path to your saved model
MODEL_PATH = 'fertilizer_model.pkl'

# Load the trained model
def load_model():
    with open(MODEL_PATH, 'rb') as model_file:
        model = pickle.load(model_file)
    return model

# Define the prediction function
def predict_fertilizer(nitrogen, phosphorous, potassium):
    model = load_model()
    features = np.array([[nitrogen, phosphorous, potassium]])
    prediction = model.predict(features)
    return prediction[0]

if __name__ == "__main__":
    nitrogen = 10
    phosphorous = 20
    potassium = 30
    print(f'Predicted Fertilizer: {predict_fertilizer(nitrogen, phosphorous, potassium)}')
