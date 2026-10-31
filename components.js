function insertFooter() {
  if (document.querySelector(".site-footer")) return;

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="shell footer-grid">
      <div><p class="footer-brand">Orchid Initiative</p><p>Growing opportunity with communities in Busia, Uganda.</p></div>
      <div><h2>Explore</h2><a href="projects.html">Projects</a><a href="index.html#future-plans">Future plans</a><a href="index.html#tap-to-grow">Tap to grow</a><a href="gallery.html">Gallery</a><a href="about.html">About us</a><a href="donate.html">Support us</a><h2 class="related-title">Related organization</h2><a href="https://www.reachone-touchone.org/ug/programmes" target="_blank" rel="noopener noreferrer">Reach One Touch One Ministries (ROTOM)</a></div>
      <div><h2>Contact</h2><a href="mailto:goinetug@gmail.com">goinetug@gmail.com</a><a href="https://wa.me/256780240187" target="_blank" rel="noopener noreferrer">WhatsApp: 0780240187</a><p>Buyiye Village, Busikho Parish, Masinya Subcounty, Busia, Uganda</p><div class="footer-social"><a href="https://www.facebook.com/share/p/1FnyU5En1f/" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://instagram.com/goinetug" target="_blank" rel="noopener noreferrer">Instagram</a></div></div>
    </div>
    <div class="shell footer-bottom">© ${new Date().getFullYear()} Orchid Initiative</div>`;
  document.body.appendChild(footer);
}
