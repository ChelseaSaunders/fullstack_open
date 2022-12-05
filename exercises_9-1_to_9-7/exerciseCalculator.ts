interface exerciseOutput {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

interface inputValues2 {
  targetHours: number,
  dailyExerciseHours: Array<number>
}

const parseArguments2 = (args: Array<string>): inputValues2 => {
  if (args.length < 4) throw new Error('Not enough arguments');

  const dailyExerciseHours = args.slice(3, args.length).map((str) => Number(str))

  if (dailyExerciseHours.filter(n => isNaN(n)).length > 0) {
    throw new Error('Only numbers are permitted inputs')
  } else {
   return {
    targetHours: Number(args[2]),
    dailyExerciseHours: dailyExerciseHours
   }
  }
}

const calculateEcercises = (dailyExerciseHours: Array<number>, targetHours: number) : exerciseOutput => {
    const totalHours = dailyExerciseHours.reduce((sum, num) => sum + num);

    const calculateRating = (total: number, target: number, days: number) => {
      let difference = target - total;

      if (difference > days) {
        return 1
      } else if (difference = days) {
        return 2
      } else {
        return 3
      }
    }

    const determineRatingDescription = (rating: number) => {
      switch (rating) {
        case 3:
          return 'Perfect';
        case 2:
          return 'Ok';
        case 1:
          return 'You can do better';
        default:
          return 'Oops something went wrong!'
      }
    }
    const rating = calculateRating(totalHours, targetHours, dailyExerciseHours.length);

    const exerciseReport = {
      periodLength: dailyExerciseHours.length,
      trainingDays: dailyExerciseHours.filter((n) => n !== 0).length,
      success: totalHours >= targetHours,
      rating: rating,
      ratingDescription: determineRatingDescription(rating),
      target: targetHours,
      average: totalHours/dailyExerciseHours.length,
    }

    return exerciseReport;
}

try {
  const { targetHours, dailyExerciseHours } = parseArguments2(process.argv);
  console.log(calculateEcercises(dailyExerciseHours, targetHours));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}