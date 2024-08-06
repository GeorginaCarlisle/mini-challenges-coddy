function substitution(key, message) {
  let keyObject = {};
  for ( let i = 0; i < key.length; i++) {
    keyObject[String.fromCharCode(65 + i)] = key[i];
  }
  console.log(keyObject);
  
  let encryptedMessage = '';
  for ( let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.match(/[a-z]/i)) {
      let code = message.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        encryptedMessage += keyObject[char];
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(code - 32);
        encryptedMessage += keyObject[char].toLowerCase();
      } else {
        console.log("error!")
      }
      
    } else {
      encryptedMessage += char;
    }
  }
  return encryptedMessage;
}

module.exports = { substitution };