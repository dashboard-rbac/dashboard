class MobileNavBar {
  constructor(mobileMenu, navList, navLinks, submenus) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.submenus = document.querySelectorAll(submenus);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards 0.2s`);
    });
  }

  adjustSubmenuPosition() {
    this.submenus.forEach((submenu) => {
      if (submenu.classList.contains(this.activeClass)) {
        const menuRect = submenu.parentElement.getBoundingClientRect();
        submenu.style.top = `${menuRect.top}px`;
      }
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
    this.adjustSubmenuPosition(); 
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar(
  ".mobile-menu",
  "#menu",
  "#menu li",
  ".submenu"
);
mobileNavBar.init();
