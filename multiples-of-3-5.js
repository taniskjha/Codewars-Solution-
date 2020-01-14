// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){

// Place to Store Sum of Solution

let sum = 0;

// iterate from 0 to 10

for (let i = number-1; i > 0; i--) {

// if the number is divisible by 3

if (i % 3 === 0) {

  // Add it to the sum

  sum += i; 

}

// if the number is divisible by 5 

else if (i % 5 === 0) {

  // Add it to the sum
  sum += i;

}


}

// return sum

return sum;
  
  
}