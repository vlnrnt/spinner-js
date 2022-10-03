document.addEventListener("DOMContentLoaded", function () {
    const image = document.createElement("img");

    image.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1518730518541-d0843268c287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    );

    image.setAttribute("alt", "boats");
    image.classList.add("image");

    document.body.appendChild(image);

    window.onload = function () {
      document.body.classList.add("loaded_hiding");
      window.setTimeout(function () {
        document.body.classList.add("loaded");
        document.body.classList.remove("loaded_hiding");
      }, 500);
    };
  });