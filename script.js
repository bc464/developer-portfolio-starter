const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".section-header");
btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
});
