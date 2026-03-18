# RetailInsight AI: Data Mining & Interactive Dashboard


## 🚀 Overview
This project was developed to solve the challenge of understanding customer behavior in a retail environment. Using the `retail_sales_dataset.csv`, we applied several machine learning techniques to categorize customers and predict future sales performance.

### Key Insights from Data Mining:
* **Classification:** The **Decision Tree** model achieved a perfect **1.00 Accuracy**, significantly outperforming Naïve Bayes (0.91).
* **Regression:** Our Linear Regression model achieved an **R-squared of 0.8547**, meaning it can explain ~85.5% of the variance in total sales based on price and quantity.
* **Segmentation:** Identified distinct clusters of "Young Budget Shoppers" vs. "Premium Established Shoppers" using K-Means logic.

---

## 🛠️ Tech Stack
* **Analysis:** Python (Pandas, Scikit-Learn, Matplotlib)
* **Frontend:** HTML5, Tailwind CSS (Styling)
* **Animations:** Animate.css (Fade-in effects)
* **Charts:** Chart.js (Interactive data visualization)

---

## 📂 Project Structure
* `/analysis`: Contains the original `.ipynb` notebook with full model training logs.
* `/web`: 
    * `index.html`: The dashboard structure.
    * `style.css`: Glassmorphism and UI animations.
    * `script.js`: CSV parsing logic and model simulation.
* `README.md`: Project documentation.

---

## 💻 How to Use
1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/retail-data-mining.git](https://github.com/your-username/retail-data-mining.git)
    ```
2.  **Open the Dashboard:**
    Simply open `index.html` in any modern web browser (Chrome, Edge, or Firefox).
3.  **Upload Data:**
    Upload the `retail_sales_dataset.csv`. The dashboard will automatically trigger fade-in animations as it processes the KPIs and charts.
4.  **Run Predictions:**
    Use the "Revenue Predictor" sidebar to input hypothetical prices and quantities to see the model's estimated total.

---

## 📊 Model Evaluation Summary
| Model | Metric | Result |
| :--- | :--- | :--- |
| **Decision Tree** | Accuracy | 1.0000 |
| **Naïve Bayes** | Accuracy | 0.9100 |
| **Linear Regression** | R-Squared | 0.8547 |
| **Linear Regression** | RMSE | 201.53 |

---

## 🤝 Contact
Made by NoelleAnt
Project Link: [https://github.com/NoelleAnt/RETAIL_INSIGHT](https://github.com/NoelleAnt/RETAIL_INSIGHT/)
