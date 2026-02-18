import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Bmi(){
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const navigate = useNavigate();

  function calculate(e) {
    e.preventDefault();

    if (!weight || !height) {
      alert("Enter weight and height");
      return;
    }

    const bmiValue =(
      weight / ((height / 100) * (height / 100))
    ).toFixed(2);

    let message = "";

    if (bmiValue < 18.5) {
      message ="Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      message ="Normal";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      message ="Overweight";
    } else {
      message ="Obese";
    }
    navigate("/result", {
      state: { bmi: bmiValue, category: message }
    });
  }

  return (
    <div className="container">
      <h2>BMI Calculator</h2>

      <form onSubmit={calculate}>
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) =>setWeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) =>setHeight(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}
export default Bmi;