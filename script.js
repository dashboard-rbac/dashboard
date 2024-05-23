function toggleSubMenu() {
  const submenu = document.getElementById("submenu");
  submenu.classList.toggle("show");
}

function toggleFilterForm() {
  const formContainer = document.getElementById('posts-by-knowledge-area-bncc-filter-form-container');

  if (formContainer.style.display === 'none' || formContainer.style.display === '') {
    formContainer.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
  }
}