//Factorial of given n numbers
let n = prompt("Enter a number")
let fact = 1
for (let i = 1; i <= n; i++) //for(let i=0;n<n;i++)
{
  fact *= i           //sum+= (i+1)
}
console.log(fact)
