import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [highest, setHighest] = useState();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function largestNumberInArray() {
    const max = Math.max(...votes);
    return max;
  }

  function findIndex(arr) {
    const largestValue = largestNumberInArray(arr);
    const largestIndex = arr.indexOf(largestValue);
    console.log(largestValue);
    console.log(largestIndex);
    return largestIndex;
  }

  function pickRandomNumber() {
    setSelected(getRandomInt(anecdotes.length));
  }

  function addVote() {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setSelected(selected);
    setVotes(newVotes);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {votes[selected]} votes </div>
      <button onClick={addVote}>vote</button>
      <button onClick={pickRandomNumber}>next anecdote</button>
      <h1>Anecdote with the most votes </h1>
      <div>{anecdotes[findIndex(votes)]}</div>
      <div>has {largestNumberInArray(votes)} votes</div>
    </div>
  );
};

export default App;
