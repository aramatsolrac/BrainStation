'use strict';

// utility to build DOM elements with classes and text content
function createElement(element, className = null, text = null) {
    const newElement = document.createElement(element);
    if (text) newElement.textContent = text;
    if (className) newElement.classList.add(className);
    return newElement;
}

const concertsList = document.getElementById("concerts-list");

concerts.forEach((item) => {
    const labelsConcerts = Object.keys(item);

    // create div
    const concertCardDiv = createElement("div", "concerts__cards");
    const concertDateDiv = createElement("div");
    const concertVenueDiv = createElement("div");
    const concertLocationDiv = createElement("div");
    const concertButtonDiv = createElement("div");

    // create li and append them to a div
    concertDateDiv.appendChild(createElement("li", "concerts__label", labelsConcerts[0]));
    concertDateDiv.appendChild(createElement("li", "concerts__info--date", item.date));
    concertVenueDiv.appendChild(createElement("li", "concerts__label", labelsConcerts[1]));
    concertVenueDiv.appendChild(createElement("li", "concerts__info--venue", item.venue));
    concertLocationDiv.appendChild(createElement("li", "concerts__label", labelsConcerts[2]));
    concertLocationDiv.appendChild(createElement("li", "concerts__info--location", item.location));
    concertButtonDiv.appendChild(createElement("button", "concerts__button", item.button));

    // append each div to a Card div
    concertCardDiv.appendChild(concertDateDiv);
    concertCardDiv.appendChild(concertVenueDiv);
    concertCardDiv.appendChild(concertLocationDiv);
    concertCardDiv.appendChild(concertButtonDiv);

    // append all Cards to the list
    concertsList.appendChild(concertCardDiv);
});


// function highlight selected row
concertsList.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.target.classList.toggle("selected");
    console.log(event.target)
});