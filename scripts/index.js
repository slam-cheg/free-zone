import cards from "./data.js";

const cardsContainer = document.querySelector(".cards-wrapper");
const cardTemplate = document.querySelector("#card-template");
const filtersContainer = document.querySelector(".filters");
const filterItemTemplate = document.querySelector("#filter-item-template");
const filters = document.querySelector(".wrapper-filters");

const categoriesList = document.querySelectorAll(".list__item");

function renderFilter() {
    
}

function renderCard(title, image, description) {
	const cardElement = cardTemplate.content.cloneNode(true);
	const cardImage = cardElement.querySelector(".card__image");
	const cardTitle = cardElement.querySelector(".h3-title");
	const cardDescription = cardElement.querySelector(".card__description");

	cardImage.src = image;
	cardImage.alt = title;
	cardTitle.textContent = title;
	cardDescription.textContent = description;

	cardsContainer.append(cardElement);
}
