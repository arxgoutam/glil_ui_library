document.querySelectorAll(".modal-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("#modal").classList.add("show");
    });
  });
  
  document.querySelector(".modal-close").addEventListener("click", () => {
    document.querySelector("#modal").classList.remove("show");
  });
  