const scriptURL =
  "https://script.google.com/macros/s/AKfycbwND6bc35hPVgkrvaSjuMsLZZARo2gyQVSBl6nqCIjuTDSvs4ZPGePXW-jY8eIwyU9atw/exec";
const form = document.forms["contact-us"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});
