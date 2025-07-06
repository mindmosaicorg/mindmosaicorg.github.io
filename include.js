// include.js

fetch('/header.html')
  .then(res => res.text())
  .then(text => {
    document.getElementById('header').innerHTML = text;
  });

fetch('/footer.html')
  .then(res => res.text())
  .then(text => {
    document.getElementById('footer').innerHTML = text;
  });
