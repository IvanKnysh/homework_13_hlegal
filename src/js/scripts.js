// Menu mobile
document
	.querySelector("button.navbar__hamburger")
	.addEventListener("click", () => {
		document.querySelector("ul.nav-menu").classList.toggle("active");
	});

// Popup
document.querySelector(".nav-menu__spec").addEventListener("click", () => {
	document.querySelector(".popup").classList.add("active");
	document.querySelector(".overlay").classList.add("active");
});

document.querySelector(".popup .close").addEventListener("click", () => {
	document.querySelector(".popup").classList.remove("active");
	document.querySelector(".overlay").classList.remove("active");
});
