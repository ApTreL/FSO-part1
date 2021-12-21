import React, { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, addGood, addNeutral, addBad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={addGood} />
        <Button text="neutral" onClick={addNeutral} />
        <Button text="bad" onClick={addBad} />
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    );
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={addGood} />
      <Button text="neutral" onClick={addNeutral} />
      <Button text="bad" onClick={addBad} />
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticLine
            text="positive"
            value={good / (good + neutral + bad)}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  return (
    <Statistics
      addGood={addGood}
      addNeutral={addNeutral}
      addBad={addBad}
      good={good}
      neutral={neutral}
      bad={bad}
    ></Statistics>
  );
};

export default App;
