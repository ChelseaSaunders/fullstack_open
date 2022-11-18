import React from 'react';

const Course = ({ courses }) => {
  const Header = ({ name }) => {
    return (<h2>{name}</h2>);
  };

  const Part = (props) => {
    return (
      <p>{props.part} {props.exercises}</p>
    );
  };

  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => (<Part
          part={part.name}
          exercises={part.exercises}
          key={part.id}
          />)
        )}
      </div>
    );
  };

  const calculateExerciseTotal = (parts) => {
    return parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0);
  }

  const Total = ({ parts }) => {
    return (
      <h3>Number of exercises: {calculateExerciseTotal(parts)}</h3>
    );
  };

  return (
    <React.Fragment>
    <h1>Web development Curriculum</h1>
      {
      courses.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        )
      })
    }
  </React.Fragment>
  );
};

export default Course;