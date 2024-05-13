/*
Work only in the solution/*.js file, don't touch the other files.
Fill the function adultsAverageAge(), which gets an array of users as parameter.

A user object in the received array will look like this:

{
  "id": 123,
  "name": "Alex Smith",
  "age": 20,
}

Calculate the average age of those users who are adults (above or equal 18). Return the result (as a number).
You do not have to deal with the case, when there are only underage users in the list.

*/
/*
function averageAgeOfAdults(users) {
  const adultsOnly = [];
  let ageSum = 0;
  const averageAge = ageSum / adultsOnly.length;
  for (let i = 0; i < users.length ; i++){
    if (users[i].age >= 18){
      adultsOnly.push(users[i].age);
      ageSum += users[i].age;
    }
  } return averageAge;
}
*/

function averageAgeOfAdults(users) {
  const adultsOnly = [];
  let ageSum = 0;
  const averageAge = ageSum / adultsOnly.length;
  for (const element of users){
    if (element.age >= 18){
      adultsOnly.push(element.age);
      ageSum++;
    }
  }
  return averageAge;
}

module.exports = averageAgeOfAdults;
