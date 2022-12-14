// interface inputValues {
//   value1: number;
//   value2: number;
// }

// const parseArguments = (args: Array<string>): inputValues => {
//   if (args.length < 4) throw new Error('Not enough arguments');
//   if (args.length > 4) throw new Error('Too many arguments');

//   if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//     return {
//       value1: Number(args[2]),
//       value2: Number(args[3])
//     }
//   } else {
//     throw new Error('Provided values were not numbers!');
//   }
// }

const calculateBMI = (height: number,  weight: number) => {
  const meters = height / 100;
  const bmi = weight / (meters * meters);

  if (bmi < 25) {
    return "normal";
  } else if (bmi >= 25 && bmi < 29) {
    return "overweight";
  } else {
    return "obese";
  }
};

// try {
//   const { value1, value2 } = parseArguments(process.argv);
//   console.log(calculateBMI(value1, value2));
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened.'
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }

export default calculateBMI;