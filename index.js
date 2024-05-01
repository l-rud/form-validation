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
  }

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

  const email = registrationForm.elements["email"];
  let emailVal = email.value;
  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    email.focus();
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    return;
  }

  if (dotpos < 1) {
    email.focus();
    alert(
      "Your email must include an . symbol, which must be a part of domain name."
    );
    return;
  }

  if (dotpos - atpos < 2) {
    email.focus();
    alert(
      "E-mail is invalid: @.\nYou must include a domain name after the @ symbol."
    );
    return;
  }

  if (emailVal.substring(atpos + 1).toLowerCase() === "example.com") {
    email.focus();
    alert('The email must not be from the domain "example.com."');
    return;
  }

  const password = registrationForm.elements["password"];
  if (password.value.length < 12) {
    password.focus();
    alert("Passwords must be at least 12 characters long.");
    return;
  }

  registrationForm.submit();
});