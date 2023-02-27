const crypto = require('crypto');
const inputStringsObj = require('./inputStrings');

function generateCode(obj) {
  // Convert the object to a string
  const string = JSON.stringify(obj);

  // Compute the SHA-256 hash of the string
  const hashObject = crypto.createHash('sha256');
  hashObject.update(string);
  const hashHex = hashObject.digest('hex');

  // Take the first 11 characters of the hash as the code
  const code = hashHex.slice(0, 11);

  return code;
}

// Example usage
const inputStrings = inputStringsObj.inputStrings;
for (let i = 0; i < inputStrings.length; i++) {
  const inputString = inputStrings[i];
  const code = generateCode(inputString);
  console.log(`Name: ${inputString.name}`);
  // console.log(`Address: ${inputString.address}`);
  console.log(`Generated code: ${code}`);
}
