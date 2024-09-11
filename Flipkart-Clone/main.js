document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.submenu');
    
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.submenu-content').style.display = 'block';
      });
      dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.submenu-content').style.display = 'none';
      });
    });
  });
  