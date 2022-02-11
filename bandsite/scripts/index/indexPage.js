'use strict';

// utility to build DOM elements with classes and text content
function createElement(element, className = null, text = null) {
    const newElement = document.createElement(element);
    if (text) newElement.textContent = text;
    if (className) newElement.classList.add(className);
    return newElement;
}

const commentsSection = document.querySelector(".comments");
const newSection = createElement("section", "display-comments"); // add section
commentsSection.appendChild(newSection); // append section to main

const newList = createElement("ul", "display-comments__list"); // add list
newList.setAttribute("id", "comments-list"); // add id to the list
newSection.appendChild(newList) // append list to section

const commentsList = document.getElementById("comments-list");

// Display comments
function displayComment(comment) {
    // // create div
    const commentDiv = createElement("div", "display-comments__card");
    const commentCardDiv = createElement("div", "display-comments__content");
    const nameAndDataDiv = createElement("div", "display-comments__name-and-data");
    const textDiv = createElement("div");

    // create p and append them to a div
    nameAndDataDiv.appendChild(createElement("p", "display-comments__name", comment.name));
    nameAndDataDiv.appendChild(createElement("p", "display-comments__date", comment.timestamp));
    textDiv.appendChild(createElement("p", "display-comments__text", comment.commentText));

    // append name, data, and comment text to a Card div
    commentCardDiv.appendChild(nameAndDataDiv);
    commentCardDiv.appendChild(textDiv);

    // append card div to a outer div
    commentDiv.appendChild(createElement("img", "profile-pic"));
    commentDiv.appendChild(commentCardDiv);

    // add outer div to the main div
    commentsList.appendChild(commentDiv);
};

// clean and add comments
function cleanAndAddComments() {
    commentsList.textContent = "";
    for (let i = 0; i < commentsArr.length; i++) {
        displayComment(commentsArr[i]);
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

    event.target.user_name.value = "";
    event.target.user_comment.value = "";
    cleanAndAddComments();
});