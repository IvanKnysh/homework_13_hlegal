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

// Tabs
const removeAllActiveClassesLi = () => {
	document.querySelectorAll(".info .tab__nav .nav__item").forEach((item) => {
		item.classList.remove("active");
	});
};

document.querySelectorAll(".info .tab__nav .nav__item").forEach((item) => {
	item.addEventListener("click", (e) => {
		e.preventDefault();

		const href = item.closest("li").querySelector("a").hash.substring(1);

		removeAllActiveClassesLi();
		item.classList.add("active");

		item
			.closest(".tab")
			.querySelectorAll(".tab__content .tab__item")
			.forEach((tabItem) => {
				tabItem.classList.remove("active");

				if (href === tabItem.getAttribute("id")) {
					tabItem.classList.add("active");
				}
			});
	});
});

// scroll
document.querySelector("button.content__btn").addEventListener("click", () => {
	document.querySelector(".info").scrollIntoView({ behavior: "smooth" });
});
