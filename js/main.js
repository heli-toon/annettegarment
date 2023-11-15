const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
    document.getElementById('navbar').style.background = 'var(--yellow)';
  }else{
    document.getElementById('navbar').style.background = 'var(--blue)';
  }
}