'use strict';
const commentsSection = document.querySelector(".comments");
const newSection = document.createElement("section"); // add section
newSection.classList.add('display-comments')
commentsSection.appendChild(newSection); // append section to main

const newList = document.createElement("ul"); // add list
newList.classList.add('display-comments__list')
newList.setAttribute("id", "comments-list"); // add id to the list
newSection.appendChild(newList) // append list to section

const commentsList = document.getElementById("comments-list");

let commentsArr = [{
        name: "Connor Walton",
        timestamp: "02/17/2021",
        commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        commentText: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        commentText: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

// Display comment
function displayComment(comment) {
    const commentDiv = document.createElement("div");
    const commentCardDiv = document.createElement("div");
    const nameAndDataDiv = document.createElement("div");
    const textDiv = document.createElement("div");

    const imgDiv = document.createElement("img");
    imgDiv.classList.add("profile-pic");

    const nameP = document.createElement("p");
    nameP.textContent = comment.name
    nameP.classList.add('display-comments__name');

    const dateP = document.createElement("p");
    dateP.textContent = comment.timestamp
    dateP.classList.add('display-comments__date');

    const commentP = document.createElement("p");
    commentP.textContent = comment.commentText
    commentP.classList.add('display-comments__text');

    nameAndDataDiv.appendChild(nameP);
    nameAndDataDiv.appendChild(dateP);
    nameAndDataDiv.classList.add('display-comments__name-and-data');

    textDiv.appendChild(commentP);

    commentCardDiv.appendChild(nameAndDataDiv);
    commentCardDiv.appendChild(textDiv);
    commentCardDiv.classList.add('display-comments__content');

    commentDiv.appendChild(imgDiv);
    commentDiv.appendChild(commentCardDiv);
    commentDiv.classList.add('display-comments__card')

    commentsList.appendChild(commentDiv);
};

// clean and add comments
function cleanAndAddComments() {
    commentsList.textContent = "";
    for (let i = 0; i < commentsArr.length; i++) {
        displayComment(commentsArr[i])
    }
};

cleanAndAddComments();


// Generate today's date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// Add new comment
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = event.target.user_name.value;
    const comment = event.target.user_comment.value;

    commentsArr.unshift({
        name: userName,
        timestamp: today,
        commentText: comment,
    })

    event.target.user_name.value = ""
    event.target.user_comment.value = ""
    cleanAndAddComments();
});