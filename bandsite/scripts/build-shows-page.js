const concertsList = document.getElementById("concerts-list")


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

        const button = document.createElement("li");
        button.textContent = concerts[i].button
        button.classList.add('test') // only to test if it works
        concertsList.appendChild(button);
    }
};

displayConcerts();