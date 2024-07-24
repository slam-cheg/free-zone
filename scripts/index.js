import data from "./data.js";

const categories = data.categories;
const cards = data.cards;
const cardsContainer = document.querySelector(".cards-wrapper");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const filtersContainer = document.querySelector(".filters");
const filterItemTemplate = document.querySelector("#filter-item-template").content.querySelector(".filter");
const categoriesList = document.querySelectorAll(".list__item");
let activeFilters = HTMLCollection;

categoriesList.forEach((category) =>
	category.addEventListener("click", () => {
		setCategoryActive(category);
	}),
);
filtersContainer.addEventListener("wheel", (evt) => {
	evt.preventDefault();
	filtersContainer.scrollLeft += evt.deltaY;
});

function setCategoryActive(clickedCategory) {
	categoriesList.forEach((category) => category.classList.remove("list__item_active"));
	clearCards();
	clickedCategory.classList.add("list__item_active");
	createInitialCards(clickedCategory.id);
	setNeededFilters(clickedCategory.id);
}

function setNeededFilters(categoryId) {
	const currentCategoryFilters = categories[categoryId].entries;
	clearFilters();
	if (currentCategoryFilters.length > 1) {
		for (let key in cards) {
			if (categoryId !== "all") {
				filtersContainer.classList.add("filters_visible");
			}
			if (cards[key].id === categoryId) {
				renderFilter(key, cards[key].id);
			}
		}
	}
}

function changeFilters(clickedFilter) {
	if (!clickedFilter.classList.contains("filter_active")) {
		clickedFilter.classList.add("filter_active");
		activeFilters = document.querySelectorAll(".filter_active");
		renderActiveCards(activeFilters);
	} else {
		activeFilters = document.querySelectorAll(".filter_active");
		if (activeFilters.length > 1) {
			clickedFilter.classList.remove("filter_active");
			renderActiveCards(activeFilters);
		}
	}
}

function renderActiveCards(activeFilters) {
	clearCards();
	activeFilters.forEach((filter) => {
		const currentCategoryFilters = categories[filter.id].entries;
		const currentFilterName = filter.querySelector(".filter__name").textContent;
		currentCategoryFilters.forEach((filterInner) => {
			const neededCards = cards[filterInner].entries;
			if (currentFilterName === filterInner) {
				for (let key in neededCards) {
					renderCard(key, neededCards[key].img, neededCards[key].description, neededCards[key].id);
				}
			}
		});
	});
}

function clearFilters() {
	filtersContainer.innerHTML = "";
	filtersContainer.classList.remove("filters_visible");
}

function clearCards() {
	cardsContainer.innerHTML = "";
}

function renderFilter(filter, id) {
	const filterElement = filterItemTemplate.cloneNode(true);
	const filterName = filterElement.querySelector(".filter__name");

	if (filter === "Все направления") {
		filterElement.classList.add("filter_active");
	}

	filterElement.addEventListener("click", () => changeFilters(filterElement));

	filterName.textContent = filter;
	filterElement.id = id;

	filtersContainer.append(filterElement);
}

function renderCard(title, image, description, id) {
	if (cardsContainer.querySelector(`#${id}`)) {
		return;
	}
	const cardElement = cardTemplate.cloneNode(true);
	const cardImage = cardElement.querySelector(".card__image");
	const cardTitle = cardElement.querySelector(".h3-title");
	const cardDescription = cardElement.querySelector(".card__description");

	cardImage.src = image;
	cardImage.alt = title;
	cardTitle.textContent = title;
	cardDescription.textContent = description;
	cardElement.id = id;

	if (cardsContainer.querySelector(`#${id}`)) {
		return;
	}

	cardsContainer.append(cardElement);
}

const initialCategory = [...categoriesList].find((category) => category.id === "all");
setCategoryActive(initialCategory);
setNeededFilters("all");

function createInitialCards(id) {
	for (let key in cards) {
		const categoryCards = cards[key].entries;
		for (let filter in categoryCards) {
			if (id === cards[key].id) {
				renderCard(filter, categoryCards[filter].img, categoryCards[filter].description, categoryCards[filter].id);
			}
		}
	}
}

createInitialCards("design");
createInitialCards("marketing");
createInitialCards("other");
