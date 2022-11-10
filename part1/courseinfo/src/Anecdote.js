import React, { useState } from 'react';

const AnecdoteApp = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];

  const generateInitialPointCount = () => anecdotes.map(anecdote => 0);

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(generateInitialPointCount());

  const displayRandom = () => {
    let quoteCount = anecdotes.length;
    let index = Math.floor(Math.random() * quoteCount);
    setSelected(index);
  };

  const addVote = () => {
    const updatedPoints = [...points];
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  };

  const locateAnecdoteWithMostVotes = () => {
    let highVotesIdx = 0;
    let highVote = 0;

    points.forEach((pointCount, idx) => {
      if (pointCount > highVote) highVotesIdx = idx;
    });

    return highVotesIdx;
  };

  const mostVotes = locateAnecdoteWithMostVotes();

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has {points[selected]} votes</p>
      <button onClick={addVote}>Vote for This Anecdote</button>
      <button onClick={displayRandom}>Display Random Quote</button>
      <h1>Anecdote with Most Votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>This anecdode has {points[mostVotes]} votes.</p>
    </div>
  )
};

export default AnecdoteApp;