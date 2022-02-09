'use strict';

const main = document.getElementById("main");
const newSection = document.createElement("section"); // add section
main.prepend(newSection); // append section to main

const newTittle = document.createElement("h2"); // add h2
newTittle.textContent = "Shows"; // add tittle text
newSection.appendChild(newTittle); // append tittle to section

const newList = document.createElement("ul"); // add list
newList.setAttribute("id", "concerts-list"); // add id to the list
newSection.appendChild(newList) // append list to section
const concertsList = document.getElementById("concerts-list");

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

function displayConcerts() {
    for (let i = 0; i < concerts.length; i++) {
        const date = document.createElement("li");
        date.textContent = concerts[i].date
        concertsList.appendChild(date);

        const venue = document.createElement("li");
        venue.textContent = concerts[i].venue
        concertsList.appendChild(venue);

        const location = document.createElement("li");
        location.textContent = concerts[i].location
        concertsList.appendChild(location);

        const button = document.createElement("button");
        button.textContent = concerts[i].button
        button.classList.add('test') // only to test if it works
        concertsList.appendChild(button);
    }
};

displayConcerts();

function highlightSelectedRow() {
    // TODO: apply it only to lis.
    concertsList.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.target.classList.toggle("selected");
        console.log(event.target)
    });
}
highlightSelectedRow()