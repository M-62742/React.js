import React, { useState, memo } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// Person Component
const Person = memo((props) => {
  return <li className="person">I am {props.name}</li>;
});

// Wealth Component
const Wealth = memo((props) => {
  return (
    <li className="wealth">
      {props.name} has {props.wealth}
    </li>
  );
});

// Money Component
const Money = memo((props) => {
  const { names } = props; // Receive names as a prop
  const wealthStatuses = ["millions", "billions", "trillions"];

  return (
    <ul className="money">
      {names.map((name, index) => (
        <Wealth
          key={index}
          name={name}
          wealth={wealthStatuses[index % wealthStatuses.length]}
        />
      ))}
    </ul>
  );
});

// Garage Component
const Garage = memo(() => {
  const names = ["Elon Musk", "Bill Gates", "Jeff Bezos"];

  return (
    <>
      <h1>Who Lives a Luxurious Life?</h1>
      <ul className="garage">
        {names.map((name, index) => (
          <Person key={index} name={name} />
        ))}
      </ul>
      <h2>What are their financial statuses?</h2>
      <Money names={names} />
    </>
  );
});

// Form Component
const Form = memo(() => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [car, setCar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <h1>Want to become one of the above?</h1>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Choose your car:
          <select value={car} onChange={handleCarChange}>
            <option value="select">Select</option>
            <option value="Rolls Royce">Rolls Royce</option>
            <option value="Bugatti">Bugatti</option>
            <option value="BMW">BMW</option>
            <option value="Thar">Thar</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {submittedName && (
        <p className="message">
          {submittedName} is one of the richest people in the future!
        </p>
      )}
      <p className="message">Your dream car is {car}.</p>
    </>
  );
});

// Main App Component
function App() {
  return (
    <div className="app">
      <Garage />
      <Form />
    </div>
  );
}

// Render the App component into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
