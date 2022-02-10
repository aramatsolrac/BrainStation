'use strict';

const main = document.getElementById("main");
const newSection = document.createElement("section"); // add section
main.prepend(newSection); // append section to main

const newTittle = document.createElement("h2"); // add h2
newTittle.textContent = "Shows"; // add tittle text
newSection.appendChild(newTittle); // append tittle to section

const newList = document.createElement("ul"); // add list
newList.setAttribute("id", "concerts-list"); // add id to the list
newSection.appendChild(newList); // append list to section
const concertsList = document.getElementById("concerts-list");
const concertsDiv = document.createElement("div");
concertsList.appendChild(newTittle);

let concerts = [{
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
        button: "Buy Tickets"
    }
]

concerts.forEach((item) => {
    const labelsConcerts = Object.keys(item);
    console.log(labelsConcerts)

    // date label
    const dateLabel = document.createElement("li");
    dateLabel.textContent = labelsConcerts[0].toUpperCase();
    dateLabel.classList.add("concerts__label");

    // date data
    const date = document.createElement("li");
    date.textContent = item.date

    // venue label
    const venueLabel = document.createElement("li");
    venueLabel.textContent = labelsConcerts[1].toUpperCase();
    venueLabel.classList.add("concerts__label");

    // venue data
    const venue = document.createElement("li");
    venue.textContent = item.venue;
    venue.classList.add("concerts__info--venue");

    // location label
    const locationLabel = document.createElement("li");
    locationLabel.textContent = labelsConcerts[2].toUpperCase();
    locationLabel.classList.add("concerts__label");

    // location data
    const location = document.createElement("li");
    location.textContent = item.location;
    location.classList.add("concerts__info--location");

    // button
    const button = document.createElement("button");
    button.textContent = item.button
    button.classList.add('concerts__button') // only to test if it works


    const concertCardDiv = document.createElement("div");
    const concertInfoDiv = document.createElement("div");
    concertInfoDiv.appendChild(dateLabel);
    concertInfoDiv.appendChild(date);
    concertInfoDiv.appendChild(venueLabel);
    concertInfoDiv.appendChild(venue);
    concertInfoDiv.appendChild(locationLabel);
    concertInfoDiv.appendChild(location);
    concertInfoDiv.appendChild(button);
    concertInfoDiv.classList.add("concerts__info")

    concertCardDiv.appendChild(concertInfoDiv);
    concertCardDiv.classList.add("concerts__cards");

    concertsList.appendChild(concertCardDiv);
    concertsList.classList.add("concerts__list");
});


// function highlight selected row
// TODO: apply it only to lis.
concertsList.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.target.classList.toggle("selected");
    console.log(event.target)
});