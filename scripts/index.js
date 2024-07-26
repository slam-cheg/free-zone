import data from "./data.js";

const cards = data.cards;
const cardsContainer = document.querySelector(".cards-wrapper");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const filtersContainer = document.querySelector(".filters");
const filterItemTemplate = document.querySelector("#filter-item-template").content.querySelector(".filter");
const categoriesList = document.querySelectorAll(".list__item");
const popup = document.querySelector(".popup");

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
		//renderFilter("Все направления", `all-${categoryId}`);
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
			renderCard(card, currentCategoryCards[card].img, currentCategoryCards[card].description, currentCategoryCards[card].id, currentCategoryCards[card]);
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

function renderCard(title, image, description, id, cardData) {
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

	cardElement.addEventListener("click", () => {
		openPopup(title, cardData);
	});

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
				renderCard(card, categoryCards[card].img, categoryCards[card].description, categoryCards[card].id, categoryCards[card]);
			}
			continue;
		}
		if (Object.keys(cards[key].entries).length < 1 && cards[key].id === id) {
			cardsContainer.classList.add("cards-wrapper_empty");
			cardsContainer.innerHTML = "Cейчас в этой категории курсов нет, но они скоро появятся!";
		}
	}
}

function serachPopupElements() {
	return {
		title: popup.querySelector(".popup__title"),
		ico: popup.querySelector(".popup__ico"),
		close: popup.querySelector(".popup__close"),
		speakerPhotoContainer: popup.querySelector(".popup__photo-wrapper"),
		speakerName: popup.querySelector(".popup__speaker-name"),
		speakerAbout: popup.querySelector(".popup__speaker-about"),
		lessonsText: popup.querySelector("#duration-lessons"),
		timeText: popup.querySelector("#duration-time"),
		programContainer: popup.querySelector("#program"),
	};
}

function openPopup(title, cardData) {
	const programItemTemplate = document.querySelector("#program-item-template").content;
	const speakerPhotoTemplate = document.querySelector("#speaker-photo-template").content;
	const popupContentNodes = serachPopupElements();

	popupContentNodes.close.addEventListener("click", closePopup);
	popup.addEventListener("click", closePopupByOverlay);
	document.addEventListener("keyup", closePopupByEsc);

	popupContentNodes.ico.src = cardData.img;
	popupContentNodes.ico.alt = title;
	popupContentNodes.title.textContent = title;
	popupContentNodes.speakerName.textContent = cardData.description;
	popupContentNodes.speakerAbout.textContent = cardData.speakerAbout;
	popupContentNodes.lessonsText.textContent = cardData.duration.lessons;
	popupContentNodes.timeText.textContent = cardData.duration.time;

	cardData.program.forEach((programItem) => {
		const newItem = programItemTemplate.cloneNode(true);
		const itemText = newItem.querySelector(".popup__program-item");

		itemText.textContent = programItem;
		popupContentNodes.programContainer.append(newItem);
	});

	for(let i = 0; i < cardData.speakerPhoto.length; i++) {
		if(i > 3 || cardData.speakerPhoto[i] === "") {
			break;
		}
	    const newPhoto = speakerPhotoTemplate.cloneNode(true);
		const photoItem = newPhoto.querySelector(".popup__speaker-photo");
		photoItem.src = cardData.speakerPhoto[i];
		
		popupContentNodes.speakerPhotoContainer.append(newPhoto);
	}

	popup.classList.add("popup_visible");
}

function closePopup() {
	popup.classList.remove("popup_visible");
	const popupContentNodes = serachPopupElements();

	setTimeout(() => {
		popupContentNodes.ico.src = "";
		popupContentNodes.ico.alt = "";
		popupContentNodes.title.textContent = "";
		popupContentNodes.speakerPhotoContainer.innerHTML = "";
		popupContentNodes.speakerName.textContent = "";
		popupContentNodes.speakerAbout.textContent = "";
		popupContentNodes.lessonsText.textContent = "";
		popupContentNodes.timeText.textContent = "";
		popupContentNodes.programContainer.innerHTML = "";
	}, 500);
}

function closePopupByEsc(evt) {
	if (evt.key === "Escape") {
		closePopup();
	}
}

function closePopupByOverlay(evt) {
	if (evt.target === evt.currentTarget) {
		closePopup();
	}
}

function formatPrices(num) {
	return num.toString().toLocaleString("ru-RU");
}
