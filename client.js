const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function bonusCalc( array ) {
  let newEmployeeSalaryArray = []
  for ( let employee of array ) {
    // Calculate Name
    let name = employee.name;

    // Calculate bonusPercentage
    let bonusPercentage = 0;

    // Those who have a rating of a 2 or below should not receive a bonus.
    if (employee.reviewRating <= 2) {
      bonusPercentage = 0;
    }

    // Those who have a rating of a 3 should receive a base bonus of 4 % of their base annual income.
    else if (employee.reviewRating === 3) {
      bonusPercentage = 0.04;
    }

    // Those who have a rating of a 4 should receive a base bonus of 6 % of their base annual income.
    else if (employee.reviewRating === 4) {
      bonusPercentage = 0.06;
    }

    // Those who have a rating of a 5 should receive a base bonus of 10 % of their base annual income.
    else if (employee.reviewRating === 5) {
      bonusPercentage = 0.10;
    }

    // If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5 %.
    if (employee.employeeNumber.toString().length === 4) {
      bonusPercentage += 0.05;
    }

    // However, if their annual income is greater than $65, 000, they should have their bonus adjusted down 1 %.
    if (employee.annualSalary > 65000) {
      bonusPercentage -= 0.01;
    }

    // No bonus can be above 13 % or below 0 % total.
    if (bonusPercentage > .13) {
      bonusPercentage =  .13;
    } else if (bonusPercentage < 0) {
      bonusPercentage = 0;
    }

    // Calculate totalBonus
    let totalBonus = employee.annualSalary * bonusPercentage;

    // Calculate totalCompensation
    let totalCompensation = Number(employee.annualSalary) + Number(totalBonus);

    let newEmployeeSalary = {
      name: name,
      bonusPercentage: bonusPercentage,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    }
    console.log(newEmployeeSalary);
    newEmployeeSalaryArray.push(newEmployeeSalary);
  } // for of loop
  
  // Return array of new objects
  return newEmployeeSalaryArray;
} // end function bonusCalc