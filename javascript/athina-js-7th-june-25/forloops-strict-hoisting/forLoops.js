//1) Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i +"\n"+"\n");// Prints number with newline as one string
  console.log(i,"\n"); // Prints number and the string '\n' separately
}

// output:  1 2 3 4 5
// ------------------------------------------------------------------------------
// 2) Print even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// output: 2 4 6 8 10 12 14 16 18 20
// ------------------------------------------------------------------------------

// 3. Print numbers from 10 to 1 (reverse order) 
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// output: 10 9 8 7 6 5 4 3 2 1
// ------------------------------------------------------------------------------

// 4. Print squares of numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}
// output: 1 4 9 16 25
// ------------------------------------------------------------------------------

//  5. Print only odd numbers from 1 to 10
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}
// output: 1 3 5 7 9
