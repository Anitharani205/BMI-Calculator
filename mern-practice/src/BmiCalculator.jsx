import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");

  const navigate = useNavigate();

  function calculate(e) {
    e.preventDefault();

    if (!weight || !height) {
        alert("Enter weight and height");
      return;
    }

    let weightInKg = weight;
    let heightInCm = height;
    if (weightUnit === "lb") {
        weightInKg = weight * 0.453592;
    }
  
    if (heightUnit === "inch") {
       heightInCm = height * 2.54;
    }

    const bmiValue = (
      weightInKg / ((heightInCm/100) * (heightInCm/100))).toFixed(2);

    let message = "";

      if (bmiValue<18.5) {
        message = "UnderWeight";
    } else if (bmiValue<25)
       {
         message= "Normal";
    } 
    else if (bmiValue < 30)
       {
      message= "OverWeight";
    } 
    else {
      message= "Obese";
    }
    navigate("/result", {
         state: { bmi: bmiValue, category: message } });
  }

  return (
    <div className="container">
         <h2>BMI Calculator</h2>

      <form onSubmit={calculate}>
        <div>
          <input type="number" placeholder="Enter weight" value={weight}
            onChange={(e) => setWeight(e.target.value)}/>
          <select value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}>
            <option value="kg">Kg</option>
            <option value="lb">Pounds</option>
          </select>
        </div>

        <div>
          <input type="number" placeholder="Enter height" value={height}
            onChange={(e) => setHeight(e.target.value)}/>
          <select value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value)}>
            <option value="cm">Cm</option>
            <option value="inch">Inches</option>
         </select>
          </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default Bmi;
