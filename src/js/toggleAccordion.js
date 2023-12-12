// toggleAccordion.js
export const toggleAccordion = (accordionId) => {
  const content = document.getElementById(accordionId);
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    const accordions = document.getElementsByClassName("accordion-content");
    Array.from(accordions).forEach(acc => acc.style.display = "none");
    content.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const accordionId = button.getAttribute('data-accordion-target');
      toggleAccordion(accordionId);
    });
  });
});
