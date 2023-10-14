// Menu mobile
document
	.querySelector("button.navbar__hamburger")
	.addEventListener("click", () => {
		document.querySelector("ul.nav-menu").classList.toggle("active");
	});
