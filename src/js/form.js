document.addEventListener("DOMContentLoaded", () => {
  // Function to set the minimum date input
  const setMinDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    document
      .getElementById("appointmentDate")
      .setAttribute("min", `${year}-${month}-${day}`);
  };

  // Function to display status messages
  const displayStatus = (message, isSuccess = true) => {
    const status = document.getElementById("formSuccessMessage");
    status.textContent = message;
    status.classList.toggle("success-message", isSuccess);
    status.classList.toggle("error-message", !isSuccess);
    status.style.display = "block";
    if (isSuccess) {
      setTimeout(() => (status.style.display = "none"), 4000);
    }
  };

  // Async function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        displayStatus("Thanks for your submission!");
        form.reset();
      } else {
        const responseData = await response.json();
        displayStatus(
          responseData.errors?.map((error) => error.message).join(", ") ||
            "Oops! There was a problem submitting your form",
          false
        );
      }
    } catch (error) {
      displayStatus("Oops! There was a problem with your submission", false);
    }
  };

  // Set minimum date for appointmentDate input
  setMinDate();

  // Add event listener for the form submission
  const form = document.getElementById("contact-form");
  form && form.addEventListener("submit", handleSubmit);
});
