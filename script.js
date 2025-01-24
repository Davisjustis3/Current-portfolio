
  const menuToggle = document.querySelector('.fa-bars');
  const hiddenMenu = document.getElementById('nav-list2');

  menuToggle.addEventListener('click', () => {
      hiddenMenu.style.display == 'block' ? 
      hiddenMenu.style.display = 'none' :
      hiddenMenu.style.display = 'block'
  });
