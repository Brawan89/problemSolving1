//1
const fizzbuzz = (n) => {
for (let i = 1; i <= n; i++) {
    
    if (i%3 === 0 && i%5 === 0) {
        console.log(i + ' fizzbuzz');
    }
    else if (i%3 === 0) {
        console.log(i + "Fizz");
    }
    else if (i%5 === 0) {
        console.log(i + "Buzz");
    }

}}


//2
function isPalindrome(x) {
   return x.split('').reverse().join('').toLowerCase() === x.toLowerCase() ? true : false
 }
 //another answer.. 
 function isPalindrome(x) {
    let splitted = x.split("");
    let reversed = splitted.reverse("");
    let joined = reversed.join("");
    return joined.toLowerCase().replace('') == x.toLowerCase().replace('')
   }

//3
function solve(eq){
  return eq.split(/([*\+\-\/])/).reverse().join("");
}