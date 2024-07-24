import data from "./data.js";

const cards = data.cards;
const cardsContainer = document.querySelector(".cards-wrapper");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const filtersContainer = document.querySelector(".filters");
const filterItemTemplate = document.querySelector("#filter-item-template").content.querySelector(".filter");
const categoriesList = document.querySelectorAll(".list__item");

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
	setNeededFilters(clickedCategory);
}

function setNeededFilters(clickedCategory) {
	if (clickedCategory.innerText === "Все категории") {
		clearFilters();
		return;
	}
	const categoryId = clickedCategory.id;
	const currentCategoryFilters = {};
	for (let key in cards) {
		if (cards[key].id === categoryId) {
			currentCategoryFilters[key] = {};
			currentCategoryFilters[key].categoryId = categoryId;
			currentCategoryFilters[key].name = key;
			currentCategoryFilters[key].filter = cards[key].filter;
		}
		if (categoryId === "all") {
			currentCategoryFilters["all"] = {};
			currentCategoryFilters["all"].categoryId = categoryId;
			currentCategoryFilters["all"].name = "Все направления";
			currentCategoryFilters["all"].filter = cards[key].filter;
		}
	}

	clearFilters();
	if (Object.keys(currentCategoryFilters).length < 2) {
		return;
	} else {
		renderFilter("Все направления", `all-${categoryId}`);
	}
	for (let key in currentCategoryFilters) {
		renderFilter(currentCategoryFilters[key].name, currentCategoryFilters[key].filter);
	}
	if (filtersContainer.innerHTML !== "") {
		filtersContainer.classList.add("filters_visible");
	}
}

function changeFilters(clickedFilter) {
	let activeFilters = document.querySelectorAll(".filter_active");
	if (!clickedFilter.classList.contains("filter_active")) {
		clickedFilter.classList.add("filter_active");
		activeFilters = document.querySelectorAll(".filter_active");
		renderActiveCards(activeFilters);
	} else {
		if (activeFilters.length > 1) {
			clickedFilter.classList.remove("filter_active");
			activeFilters = document.querySelectorAll(".filter_active");
			renderActiveCards(activeFilters);
		} else {
			return;
		}
	}
}

function renderActiveCards(activeFilters) {
	clearCards();
	let currentCategoryCards;
	activeFilters.forEach((filter) => {
		if (!cards[filter.innerText]) {
			const filterCut = filter.id.split("-")[1];
			currentCategoryCards = {};
			for (let category in cards) {
				if (cards[category].id === filterCut) {
					const entries = cards[category].entries;
					for (let fil in entries) {
						currentCategoryCards[fil] = entries[fil];
					}
				}
			}
		} else {
			currentCategoryCards = cards[filter.innerText].entries;
		}
		for (let card in currentCategoryCards) {
			renderCard(card, currentCategoryCards[card].img, currentCategoryCards[card].description, currentCategoryCards[card].id);
		}
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
		console.log(`${id} - double. Not rendered`);
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

	cardsContainer.append(cardElement);
}

const initialCategory = [...categoriesList].find((category) => category.id === "all");
setCategoryActive(initialCategory);
setNeededFilters({ id: "all", innerText: "Все категории" });

function createInitialCards(id) {
	cardsContainer.classList.remove("cards-wrapper_empty");

	for (let key in cards) {
		if ((cards[key].id === id && Object.keys(cards[key].entries).length > 1) || id === "all") {
			const categoryCards = cards[key].entries;
			for (let card in categoryCards) {
				renderCard(card, categoryCards[card].img, categoryCards[card].description, categoryCards[card].id);
			}
			continue;
		}
		if (Object.keys(cards[key].entries).length < 1 && cards[key].id === id) {
			cardsContainer.classList.add("cards-wrapper_empty");
			cardsContainer.innerHTML = "Cейчас в этой категории курсов нет, но они скоро появятся!";
		}
	}
}
