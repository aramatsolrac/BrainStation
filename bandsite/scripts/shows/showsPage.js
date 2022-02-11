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

    // create div
    const showsCardDiv = createElement("div", "shows__cards");
    const showsDateDiv = createElement("div");
    const showsVenueDiv = createElement("div");
    const showsLocationDiv = createElement("div");
    const showsButtonDiv = createElement("div");

    // create li and append them to a div
    showsDateDiv.appendChild(createElement("li", "shows__label", labelsShows[0]));
    showsDateDiv.appendChild(createElement("li", "shows__info--date", item.date));
    showsVenueDiv.appendChild(createElement("li", "shows__label", labelsShows[1]));
    showsVenueDiv.appendChild(createElement("li", "shows__info--venue", item.venue));
    showsLocationDiv.appendChild(createElement("li", "shows__label", labelsShows[2]));
    showsLocationDiv.appendChild(createElement("li", "shows__info--location", item.location));
    showsButtonDiv.appendChild(createElement("button", "shows__button", item.button));

    // append each div to a Card div
    showsCardDiv.appendChild(showsDateDiv);
    showsCardDiv.appendChild(showsVenueDiv);
    showsCardDiv.appendChild(showsLocationDiv);
    showsCardDiv.appendChild(showsButtonDiv);

    // append all Cards to the list
    showsList.appendChild(showsCardDiv);
});


// function highlight selected row
showsList.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.target.classList.toggle("selected");
    console.log(event.target)
});