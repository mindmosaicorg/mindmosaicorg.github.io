// include.js

window.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => {
      if (!res.ok) throw new Error("Header not found");
      return res.text();
    })
    .then(text => {
      document.getElementById("header").innerHTML = text;
      console.log("Header loaded");
    })
    .catch(err => console.error(err));

  fetch("footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Footer not found");
      return res.text();
    })
    .then(text => {
      document.getElementById("footer").innerHTML = text;
      console.log("Footer loaded");
    })
    .catch(err => console.error(err));
});
