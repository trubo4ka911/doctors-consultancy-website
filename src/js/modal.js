document.addEventListener("DOMContentLoaded", () => {
    // Function to open a modal
    const openModal = (modalId) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "block";
      }
    };
  
    // Function to close a modal
    const closeModal = (modalId) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = "none";
      }
    };
  
    // Bind open modal events
    document.querySelectorAll("[data-modal-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal-target");
        openModal(modalId);
      });
    });
  
    // Bind close modal events
    document.querySelectorAll(".close-button").forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        if (modal) {
          closeModal(modal.id);
        }
      });
    });
  
    // Close modal if clicked outside of content
    window.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal")) {
        closeModal(event.target.id);
      }
    });
  });