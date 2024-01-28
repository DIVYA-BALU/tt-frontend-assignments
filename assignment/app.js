document.addEventListener("DOMContentLoaded", function () {
  // Initial page load
  navigateToPage(window.location.hash || "#home");

  // Handle navigation links
  document.querySelectorAll("nav a").forEach(function (link) {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetPage = this.getAttribute("href");
          navigateToPage(targetPage);
      });
  });

  // Listen for hash changes to handle navigation
  window.addEventListener("hashchange", function () {
      const targetPage = window.location.hash || "#home";
      navigateToPage(targetPage);
  });
});

function navigateToPage(pageId) {
  // Load content based on the page ID
  fetchContent(pageId, function (content) {
      document.getElementById("content").innerHTML = content;
  });
}

function fetchContent(pageId, callback) {
  // Simulate fetching content from a server (replace with actual API calls)
  const contentMap = {
      "#home": "<h2>Welcome to the Home Page!</h2><p>This is the home page content.</p>",
      "#about": "<h2>About Us</h2><p>This is the about page content.</p>",
      "#contact": "<h2>Contact Us</h2><p>This is the contact page content.</p>",
  };

  const content = contentMap[pageId] || "<h2>Page Not Found</h2><p>Sorry, the requested page was not found.</p>";
  callback(content);
}
