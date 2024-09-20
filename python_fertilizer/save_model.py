import pickle
from sklearn.ensemble import RandomForestClassifier
import numpy as np
from sklearn.preprocessing import LabelEncoder

try:
    # Load the dataset
    data = np.genfromtxt('Fertilizer.csv', delimiter=',', skip_header=1, dtype=str)

    if data.size == 0:
        raise ValueError("Data is empty. Please check the CSV file.")

    # Extract feature columns and labels
    features = data[:, :-1].astype(float)
    labels = data[:, -1]

    # Encode labels
    label_encoder = LabelEncoder()
    labels_encoded = label_encoder.fit_transform(labels)

    # Create and train the Random Forest model
    model = RandomForestClassifier()
    model.fit(features, labels_encoded)

    # Save the trained model to a file
    with open('fertilizer_model.pkl', 'wb') as file:
        pickle.dump(model, file)

    # Save the label encoder to a file
    with open('label_encoder.pkl', 'wb') as file:
        pickle.dump(label_encoder, file)

    print("Model and label encoder saved successfully!")

except FileNotFoundError as e:
    print(f"Error: {e}. Make sure 'Fertilizer.csv' is in the correct directory.")

except ValueError as e:
    print(f"Error: {e}")

except Exception as e:
    print(f"An unexpected error occurred: {e}")
