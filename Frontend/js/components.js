/**
 * 🚀 Café Gagu - Modern Web Components (2026 Standard)
 * Centralizing UI logic for better performance and maintainability.
 */

class GaguNavbar extends HTMLElement {
  connectedCallback() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const activePage = this.getAttribute("active") || "index";

    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark sticky-top" style="background-color: var(--primary-color);">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <i class="fas fa-coffee me-2"></i>Café Gagu
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              ${this.renderNavLink("index.html", "Inicio", activePage === "index")}
              ${this.renderNavLink("catalog.html", "Catálogo", activePage === "catalog")}
              ${this.renderNavLink("workshops.html", "Talleres", activePage === "workshops")}
              ${this.renderNavLink("farm.html", "Finca", activePage === "farm")}
              ${this.renderNavLink("about.html", "Acerca de", activePage === "about")}
              ${this.renderNavLink("contact.html", "Contacto", activePage === "contact")}
              ${this.renderNavLink("cart.html", "Carrito", activePage === "cart")}
              ${user?.role === "admin" ? this.renderNavLink("admin.html", "Admin", activePage === "admin") : ""}
            </ul>
            <ul class="navbar-nav">
              ${!user ? `
                <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                <li class="nav-item"><a class="nav-link" href="register.html">Registro</a></li>
              ` : `
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                    <i class="fas fa-user-circle me-1"></i>${user.email.split('@')[0]}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end shadow border-0">
                    <li><span class="dropdown-item-text small text-muted">${user.email}</span></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="#" onclick="logout()"><i class="fas fa-sign-out-alt me-2"></i>Salir</a></li>
                  </ul>
                </li>
              `}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  renderNavLink(href, text, isActive) {
    return `<li class="nav-item"><a class="nav-link ${isActive ? 'active' : ''}" href="${href}">${text}</a></li>`;
  }
}

class GaguFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-dark text-white py-5 mt-auto">
        <div class="container">
          <div class="row g-4">
            <div class="col-md-4">
              <h5 class="fw-bold mb-3"><i class="fas fa-coffee me-2 text-warning"></i>Café Gagu</h5>
              <p class="text-white-50 small">Tradición cafetera desde el corazón de Colombia. Calidad, sostenibilidad y pasión en cada grano.</p>
            </div>
            <div class="col-md-2">
              <h6 class="fw-bold mb-3">Enlaces</h6>
              <ul class="list-unstyled small">
                <li><a href="catalog.html" class="text-white-50 text-decoration-none">Catálogo</a></li>
                <li><a href="workshops.html" class="text-white-50 text-decoration-none">Talleres</a></li>
                <li><a href="farm.html" class="text-white-50 text-decoration-none">Finca</a></li>
              </ul>
            </div>
            <div class="col-md-2">
              <h6 class="fw-bold mb-3">Soporte</h6>
              <ul class="list-unstyled small">
                <li><a href="contact.html" class="text-white-50 text-decoration-none">Contacto</a></li>
                <li><a href="about.html" class="text-white-50 text-decoration-none">Nosotros</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h6 class="fw-bold mb-3">Síguenos</h6>
              <div class="d-flex gap-3">
                <a href="#" class="text-white-50 fs-5"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-white-50 fs-5"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-white-50 fs-5"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <hr class="border-secondary my-4">
          <div class="text-center text-white-50 small">
            &copy; ${new Date().getFullYear()} Café Gagu. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('gagu-navbar', GaguNavbar);
customElements.define('gagu-footer', GaguFooter);

// 🎬 View Transitions API Support (2026 Native Navigation)
window.addEventListener('pageshow', () => {
  if (document.startViewTransition) {
    // Page is ready for transition
  }
});
