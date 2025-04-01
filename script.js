document.querySelectorAll(".read-more-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const articleText = button.previousElementSibling;
    articleText.classList.toggle("expanded");
    button.textContent = articleText.classList.contains("expanded")
      ? "Zwiń"
      : "Czytaj więcej";
  });
});
