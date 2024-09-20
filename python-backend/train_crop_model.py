import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load dataset
df = pd.read_excel(r"crop_data.xlsx")
print(df.head())  # Display the first few rows of the dataset

# Label encoding for categorical columns
le = LabelEncoder()
df['label'] = le.fit_transform(df['label'])
df['soil'] = le.fit_transform(df['soil'])

# Grouping by soil type
x = df.groupby(['soil'])
print(x.first())  # Display the first item for each soil type group

# Prepare the data for training
X = df.drop('label', axis=1)
Y = df['label']
X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

# Train the RandomForest model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Save the trained model
pickle.dump(model, open("model.pkl", "wb"))

# Check the model accuracy
print("Model accuracy:", model.score(X_test, y_test))
