'use strict';
const commentsSection = document.querySelector(".comments");
const newSection = document.createElement("section"); // add section
commentsSection.appendChild(newSection); // append section to main

const newList = document.createElement("ul"); // add list
newList.setAttribute("id", "comments-list"); // add id to the list
newSection.appendChild(newList) // append list to section
const commentsList = document.getElementById("comments-list");

let commentsArr = [{
        name: "Connor Walton",
        timestamp: "02/17/2021",
        commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
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
    const nameLi = document.createElement("li");
    nameLi.textContent = comment.name
    commentsList.appendChild(nameLi);

    const dateLi = document.createElement("li");
    dateLi.textContent = comment.timestamp
    commentsList.appendChild(dateLi);

    const commentLi = document.createElement("li");
    commentLi.textContent = comment.commentText
    commentsList.appendChild(commentLi);
}

// clean and add comments
function cleanAndAddComments() {
    commentsList.textContent = "";
    for (let i = 0; i < commentsArr.length; i++) {
        displayComment(commentsArr[i])
    }
};

cleanAndAddComments();


// Add new comment
const nameInput = document.getElementById("name");
const commentText = document.getElementById("comment");
const addCommentBtn = document.getElementById("addComment");
addCommentBtn.addEventListener('click', newComment);


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

function newComment(event) {
    event.preventDefault()
    const nameValue = nameInput.value;
    const commentValue = commentText.value;

    commentsArr.unshift({
        name: nameValue,
        timestamp: today,
        commentText: commentValue
    })

    nameInput.value = ""
    commentText.value = ""
    cleanAndAddComments();
    console.log(commentsArr)
};