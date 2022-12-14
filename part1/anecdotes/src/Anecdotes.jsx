import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button
    onClick={handleClick}
    style={{ fontSize: 16 + "px", marginRight: 4 + "px" }}
  >
    {text}
  </button>
);

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const iOfMostVotes = votes.indexOf(Math.max(...votes));
  const mostVotedAnec = anecdotes[iOfMostVotes];

  const calcRandom = () => {
    let randomNum;

    // Checking that the new random integer is not the same as the previous one
    do {
      randomNum = Math.floor(Math.random() * anecdotes.length);
    } while (randomNum === selected);

    setSelected(randomNum);
  };

  const handleVote = () => {
    const cloneVotes = [...votes];

    cloneVotes[selected] += 1;

    setVotes(cloneVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button handleClick={handleVote} text="Vote"></Button>
      <Button handleClick={calcRandom} text="Next anecdote"></Button>
      <h2>Anecdote with the most votes</h2>
      <Anecdote
        anecdote={mostVotedAnec}
        votes={votes[iOfMostVotes]}
      />
    </div>
  );
};

export default App;
