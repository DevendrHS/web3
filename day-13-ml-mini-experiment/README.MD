# ML Mini-Experiment: Student Score Prediction

## Overview

This project demonstrates a basic Machine Learning experiment using Linear Regression to predict a student's exam score based on the number of hours studied. The objective is to understand the complete machine learning workflow, including data collection, preprocessing, model training, prediction, and visualization.

---

## Objective

To build a machine learning model that predicts student exam scores using study hours as input and to gain practical experience with machine learning fundamentals.

---

## Technologies Used

* Python
* Pandas
* NumPy
* Matplotlib
* Scikit-Learn

---

## Project Structure

day-13-ml-mini-experiment/

├── dataset.csv

├── student_score_prediction.py

├── README.md

├── notes.txt

└── screenshots/

---

## Dataset

The dataset contains two columns:

| Hours | Score |
| ----- | ----- |
| 1     | 15    |
| 2     | 25    |
| 3     | 35    |
| 4     | 45    |
| 5     | 55    |
| 6     | 65    |
| 7     | 75    |
| 8     | 85    |
| 9     | 95    |
| 10    | 100   |

Where:

* Hours = Number of study hours
* Score = Student exam score

---

## Machine Learning Workflow

1. Load dataset using Pandas.
2. Separate Features and Labels.
3. Train a Linear Regression model.
4. Predict score based on study hours.
5. Visualize results using Matplotlib.

Workflow:

Dataset → Data Processing → Model Training → Prediction → Visualization → Result

---

## Libraries Used

### Pandas

Used for reading and managing the dataset.

### NumPy

Provides numerical computing support.

### Matplotlib

Used for visualizing data and prediction results.

### Scikit-Learn

Provides the Linear Regression algorithm used for training and prediction.

---

## Algorithm Used

### Linear Regression

Linear Regression is a supervised machine learning algorithm used to predict continuous values by identifying the relationship between input and output variables.

Formula:

y = mx + b

Where:

* y = Predicted Score
* x = Study Hours
* m = Slope
* b = Intercept

---

## Results

The model successfully learns the relationship between study hours and exam scores and predicts expected scores for new study-hour values.

Example:

Input:
7 Study Hours

Output:
Predicted Score = 75

---

## Learning Outcomes

By completing this project, I learned:

* Fundamentals of Machine Learning
* Dataset Handling
* Feature and Label Selection
* Linear Regression
* Model Training
* Prediction Techniques
* Data Visualization
* Python ML Libraries
* Basic AI/ML Terminology

---

## Future Improvements

* Use larger datasets
* Apply Multiple Linear Regression
* Compare different ML algorithms
* Build a prediction web application
* Improve model accuracy

---

## Conclusion

This mini-experiment provides a practical introduction to Machine Learning by implementing a Student Score Prediction system using Linear Regression. It demonstrates how data can be used to train models and make accurate predictions for future observations.
