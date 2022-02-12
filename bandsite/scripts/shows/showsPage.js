'use strict';

// utility to build DOM elements with classes and text content
function createElement(element, className = null, text = null) {
    const newElement = document.createElement(element);
    if (text) newElement.textContent = text;
    if (className) newElement.classList.add(className);
    return newElement;
}

const showsList = document.getElementById("shows-list");

shows.forEach((item) => {
    const labelsShows = Object.keys(item);

    // create li
    const showsCardLi = createElement("li", "shows__cards");
    const showsDateUl = createElement("ul", "shows__cards--sub-list");
    const showsVenueUl = createElement("ul", "shows__cards--sub-list");
    const showsLocationUl = createElement("ul", "shows__cards--sub-list");
    const showsButtonUl = createElement("ul", "shows__cards--sub-list");

    // create div and append them to a li
    showsDateUl.appendChild(createElement("li", "shows__label", labelsShows[0]));
    showsDateUl.appendChild(createElement("li", "shows__info--date", item.date));
    showsVenueUl.appendChild(createElement("li", "shows__label", labelsShows[1]));
    showsVenueUl.appendChild(createElement("li", "shows__info--venue", item.venue));
    showsLocationUl.appendChild(createElement("li", "shows__label", labelsShows[2]));
    showsLocationUl.appendChild(createElement("li", "shows__info--location", item.location));
    showsButtonUl.appendChild(createElement("button", "shows__button", item.button));

    // append each li to a Card div
    showsCardLi.appendChild(showsDateUl);
    showsCardLi.appendChild(showsVenueUl);
    showsCardLi.appendChild(showsLocationUl);
    showsCardLi.appendChild(showsButtonUl);

    // append all Cards to the list
    showsList.appendChild(showsCardLi);

    // function highlight selected row
    showsCardLi.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        showsCardLi.classList.toggle("shows__cards--selected");
    });
});