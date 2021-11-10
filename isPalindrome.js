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