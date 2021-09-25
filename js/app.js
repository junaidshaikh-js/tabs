const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    // remove active class from all buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    // add active class to the button clicked
    e.target.classList.add("active");

    // hide all the articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });

    let currentActiveElement = document.getElementById(id);

    currentActiveElement.classList.add("active");
  }
});
