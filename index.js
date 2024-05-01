const registrationForm = document.getElementById("registration");

registrationForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  registrationForm.submit();

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
      
  }
});
