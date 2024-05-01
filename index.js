const registrationForm = document.getElementById("registration");

registrationForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  registrationForm.submit();

  const userName = registrationForm.elements["username"];
  if (userName.value === "") {
    userName.focus();
    alert("The username cannot be blank");
    return;
  }
});
