import React, { useState } from 'react';

// exercises 1.6-1.11

const Title = ({ title }) => <h1>{title}</h1>;

const Button = ({ clickHandler, text }) => (
  <button onClick={clickHandler}>{text}</button>
);

const Statistics = ({ goodCount, badCount, neutralCount }) => {
  const generateVotedCategories = () => {
    let votedCategories = 0;

    if (goodCount > 0) votedCategories += 1;
    if (neutralCount > 0) votedCategories += 1;
    if (badCount > 0) votedCategories += 1;

    return votedCategories;
  }

  if (generateVotedCategories() === 0) return (<p>No feedback given.</p>)

  const generateTotalVotes = () => {
    let sum = 0;
    sum += goodCount ;
    sum += neutralCount;
    sum += badCount;

    return sum;
  }

  const calculateAverage = () => {
    let sum = 0;
    sum += goodCount;
    sum -= badCount ;

    let votedCategories = generateVotedCategories()
    return votedCategories === 0 ? 0 : sum / generateTotalVotes();
  };

  const calculateGoodPercent =() => {
    let votedCategories = generateVotedCategories();
    let percent = votedCategories === 0 ? 0 : goodCount/generateTotalVotes();
    return String(percent) + " %";
  }


  return (
    <React.Fragment>
      <Title title="Statistics" />
      <table>
        <tbody>
          <Result resultText="Good" count={goodCount} />
          <Result resultText="Neutral" count={neutralCount} />
          <Result resultText="Bad" count={badCount} />
          <Result resultText="All" count={generateTotalVotes()} />
          <Result resultText="Average" count={calculateAverage()} />
          <Result resultText="Positive" count={calculateGoodPercent()} />
        </tbody>
      </table>
    </React.Fragment>
  );
};

const Result = ({ resultText, count }) => (
  <tr>
    <td>{resultText}</td>
    <td>{count}</td>
  </tr>
);

const UnicafeApp = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleGood = () => setGoodCount(goodCount + 1);
  const handleNeutral = () => setNeutralCount(neutralCount + 1);
  const handleBad = () => setBadCount(badCount + 1);

  return (
    <React.Fragment>
      <Title title="Give Feedback" />
      <Button clickHandler={handleGood} text="good" />
      <Button clickHandler={handleNeutral} text="neutral" />
      <Button clickHandler={handleBad} text="bad" />
      <Statistics
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
      />
    </React.Fragment>
  );
};

export default UnicafeApp;