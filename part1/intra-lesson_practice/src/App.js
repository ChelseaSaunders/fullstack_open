import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  );
};

const App = () => {
  const age = 11;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="AnOtHeR tEsT ! " age={age} />
      <Hello name="Oh Hi Mark" age={120 + 4} />
    </div>
  );
};

export default App;