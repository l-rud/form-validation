const registrationForm = document.getElementById("registration");

function alert(message) {
  const errorEl = document.getElementById("errorDisplay");
  errorEl.style.display = "block";
  errorEl.textContent = message;

  setTimeout(() => {
    errorEl.style.display = "none";
  }, 3000);
}
function uniqueChar(str) {
  // Use a regex pattern to match unique characters
  let uniqueChars = str.match(/(.)(?!\1)/g);

  return uniqueChars;
}

const specialCharsAndWhitespaceRegex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\\s]/;

registrationForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const userName = registrationForm.elements["username"];
  if (userName.value === "") {
    userName.focus();
    alert("The username cannot be blank");
    return;

    if (userName.value.length < 4) {
        userName.focus();
        alert("The username must be at least four characters long");
        return;
      }

      if (uniqueChar(userName.value).length < 2) {
        userName.focus();
        alert("The username must contain at least two unique characters");
        return;
      }

      if (specialCharsAndWhitespaceRegex.test(userName.value)) {
        userName.focus();
        alert("The username cannot contain any special characters or whitespace");
        return;
      }
      
  }
  
  registrationForm.submit();
});