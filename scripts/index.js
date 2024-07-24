import data from "./data.js";

const categories = data.categories;
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
	if(clickedCategory.innerText === "Все категории") {
		clearFilters();
		return
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
	const size = Object.keys(currentCategoryFilters).length;
	if(size < 2) {
		return
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
			return
		}
	}
}

function renderActiveCards(activeFilters) {
	clearCards();
	activeFilters.forEach((filter) => {
		const currentCategoryCards = cards[filter.innerText].entries;
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
setNeededFilters({id: "all", innerText: "Все категории"});

function createInitialCards(id) {
	if (categories[id].entries[0] === undefined) {
		cardsContainer.classList.add("cards-wrapper_empty");
		cardsContainer.innerHTML = "Cейчас в этой категории курсов нет, но они скоро появятся!";
	} else {
		cardsContainer.classList.remove("cards-wrapper_empty");
	}
	for (let key in categories) {
		if (categories[key].id === id) {
			const categoryCards = categories[key].entries;
			categoryCards.forEach((filter) => {
				if (id === cards[filter].id || id === "all") {
					const filterCards = cards[filter].entries;
					for (let filterCard in filterCards) {
						renderCard(filterCard, filterCards[filterCard].img, filterCards[filterCard].description, filterCards[filterCard].id);
					}
				}
			});
		}
	}

}
