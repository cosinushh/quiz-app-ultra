import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* const response = fetch(
  "https://quizapi.io/api/v1/questions?apiKey=8odWMCvYZBI2tAdJlm1xu0wojzJTPKLi0fZGiJlR&category=code&limit=10&tags=HTML"
);
const data = response.then((response) => response.json());
data.then((data) => console.log(data)); */
