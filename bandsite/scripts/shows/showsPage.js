'use strict';

const showsList = document.getElementById("shows-list");

const dataURL = "https://project-1-api.herokuapp.com/showdates/?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

// display shows list
axios.get(dataURL)
    .then(response => {
        const showsArr = response.data;
        console.log(showsArr)
        showsArr.forEach((item) => {
            const labelsShows = Object.keys(item);

            // create li
            const showsCardLi = createElement("li", "shows__cards");
            const showsDateUl = createElement("ul", "shows__cards--sub-list");
            const showsVenueUl = createElement("ul", "shows__cards--sub-list");
            const showsLocationUl = createElement("ul", "shows__cards--sub-list");
            const showsButtonUl = createElement("ul", "shows__cards--sub-list");

            // create li and append them to a ul
            showsDateUl.appendChild(createElement("li", "shows__label", labelsShows[0]));
            showsDateUl.appendChild(createElement("li", "shows__info--date", formatDate(item.date, { weekday: 'short' })));
            showsVenueUl.appendChild(createElement("li", "shows__label", labelsShows[1]));
            showsVenueUl.appendChild(createElement("li", "shows__info--venue", item.place));
            showsLocationUl.appendChild(createElement("li", "shows__label", labelsShows[2]));
            showsLocationUl.appendChild(createElement("li", "shows__info--location", item.location));
            showsButtonUl.appendChild(createElement("button", "shows__button", "Buy Tickets"));

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
    });