import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Load Dataset
data = pd.read_csv("dataset.csv")

print("Dataset:")
print(data)

# Features
X = data[["Hours"]]

# Labels
y = data["Score"]

# Create Model
model = LinearRegression()

# Train Model
model.fit(X, y)

# Predict
hours = [[7]]

prediction = model.predict(hours)

print(f"\nPredicted Score for 7 hours study: {prediction[0]:.2f}")

# Plot Graph
plt.scatter(X, y)

plt.plot(
    X,
    model.predict(X)
)

plt.xlabel("Study Hours")
plt.ylabel("Exam Score")
plt.title("Student Score Prediction")

plt.show()