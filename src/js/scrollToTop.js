export default function toggleScrollToTopBtn() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Call the function on initial load
toggleScrollToTopBtn();

// Event listener for window scroll to toggle the scroll-to-top button
window.onscroll = toggleScrollToTopBtn;

// Event listener for the button click to scroll to the top of the document
document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    // For modern browsers
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
    // For older browsers like IE
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
