
function createBackButton(label = "← Back to Home", url = "index.html") {
  const button = document.createElement("button");
  button.textContent = label;
  button.className = "back-home-btn";
  button.addEventListener("click", () => {
    window.location.href = url;
  });
  return button;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  const year = new Date().getFullYear();

  footer.innerHTML = `
    <p>📧 Email: <a href="mailto:goinetug@gmail.com">goinetug@gmail.com</a></p>
    <p>📍 Buyiye Village, Busikho Parish, Masinya Subcounty, Busia, Uganda</p>
    <p>Connect with us:</p>
    <div class="social-links">
      <a href="https://www.facebook.com/share/p/1FnyU5En1f/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook fa-2x"></i></a>
      <a href="https://twitter.com/goinetug" target="_blank" aria-label="Twitter"><i class="fab fa-twitter fa-2x"></i></a>
      <a href="https://instagram.com/goinetug" target="_blank" aria-label="Instagram"><i class="fab fa-instagram fa-2x"></i></a>
    </div>
    <p>© ${year} Orchid Initiative. All rights reserved.</p>
  `;
  return footer;
}

function insertFooter() {
  if (!document.querySelector(".site-footer")) {
    document.body.appendChild(createFooter());
  }
}
window.createBackButton = createBackButton;
window.insertFooter = insertFooter;
