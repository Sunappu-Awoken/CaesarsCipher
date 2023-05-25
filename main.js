function rot13(str) {
  var decodedStr = "";

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    // Decode uppercase letters (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      // Pass non-alphabetic characters as they are
      decodedStr += str[i];
    }
  }

  return decodedStr;
}

// Test cases
console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
