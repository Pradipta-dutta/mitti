import pickle
import numpy as np

# Load the model
model = pickle.load(open('model.pkl', 'rb'))

# Prepare input data (ensure it is in the correct shape)
input_data = np.array([[10, 20, 30, 25, 60, 6.5, 100, 0]])  # Example data with the correct shape

# Make predictions
predictions = model.predict(input_data)

print(predictions)
