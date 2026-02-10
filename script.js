const loadBtn = document.getElementById("loadBtn");
const loader = document.getElementById("loader");
const fail = document.getElementById("fail");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    setTimeout(() => {
      fail.textContent = `Error `;
      fail.style.background = "#dc3545";
      setTimeout(() => {
        fail.style.display = "none";
      }, 2000);
    }, 1000);
  } else {
    loadBtn.disabled = true;
    loader.style.display = "block";
    fail.textContent = ``;

    setTimeout(() => {
      loadBtn.disabled = false;
      loader.style.display = "none";
      alert("Submitted successfully!");
    }, 2000);
  }
});
