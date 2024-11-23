// Load Navbar
fetch('./elements/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// Dynamic Page Loading
function navigate(page) {
  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById('content').innerHTML = data;
    });
}

// Load default content (home page)
window.onload = () => navigate('../index.html');
