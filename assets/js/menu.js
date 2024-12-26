document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll("#mobile-menu ul li a");
  
    menuItems.forEach((item) => {
      const itemPath = item.getAttribute("href").split('/').pop();
      if (itemPath === currentPath || (currentPath === '' && itemPath === 'index.html')) {
        item.parentElement.classList.add("active");
      }
    });
  });    