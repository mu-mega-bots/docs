// Load Navbar
fetch('./elements/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// Fetch the JSON data
let docs = {};
fetch('./static/docs.json')
  .then(response => response.json())
  .then(data => {
    docs = data;
    // Load the default content (home page)
    loadContent('home');
  });

// Function to load content dynamically from JSON
function loadContent(page) {
  const pageData = docs[page];
  if (pageData) {
    document.getElementById('content').innerHTML = `
      <h1>${pageData.title}</h1>
      ${pageData.content}
    `;
  } else {
    document.getElementById('content').innerHTML = `
      <h1>Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    `;
  }
}
