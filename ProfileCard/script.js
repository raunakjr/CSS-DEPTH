const linkedin = document.querySelector("#linkedin");
const instagram = document.querySelector("#instagram");
const github = document.querySelector("#github");

linkedin.addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/raunak-mishra-115b37215/";
});

instagram.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/_raunak.jr/";
});

const share = document.querySelector("#share");

share.addEventListener("click", () => {
  navigator.share({
    title: document.title,
    text: "Check this out!",
    url: location.href,
  });
});

github.addEventListener("click", () => {
  window.location.href = "https://github.com/raunakjr";
});
