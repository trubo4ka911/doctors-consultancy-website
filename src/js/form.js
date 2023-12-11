document.addEventListener("DOMContentLoaded", () => {
  // Set the min attribute for the appointmentDate input to today's date in the local timezone
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const year = today.getFullYear();
  const localDate = `${year}-${month}-${day}`;

  document.getElementById("appointmentDate").setAttribute("min", localDate);

  const form = document.getElementById("contact-form");
  const status = document.getElementById("formSuccessMessage");

  const displayStatus = (message, isSuccess = true) => {
    status.textContent = message;
    status.classList.toggle("success-message", isSuccess); // Assuming you have a 'success-message' class
    status.classList.toggle("error-message", !isSuccess); // Assuming you have an 'error-message' class
    status.style.display = "block";

    if (isSuccess) {
      setTimeout(() => {
        status.style.display = "none";
      }, 4000);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        displayStatus("Thanks for your submission!");
        form.reset(); // Reset the form after successful submission
      } else {
        const responseData = await response.json();
        if (responseData && responseData.errors) {
          displayStatus(
            responseData.errors.map((error) => error.message).join(", "),
            false
          );
        } else {
          displayStatus(
            "Oops! There was a problem submitting your form",
            false
          );
        }
      }
    } catch (error) {
      displayStatus("Oops! There was a problem with your submission", false);
    }
  }

  form.addEventListener("submit", handleSubmit);
});
