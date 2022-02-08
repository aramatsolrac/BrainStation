const nameInput = document.getElementById("name");
const commentText = document.getElementById("comment");
const addCommentBtn = document.getElementById("addComment");
const commentsList = document.getElementById("comments-list")
addCommentBtn.addEventListener('click', newComment);

let comments = [{
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]


function displayComment() {
    for (let i = 0; i < comments.length; i++) {
        const name = document.createElement("li");
        name.textContent = comments[i].name
        commentsList.appendChild(name);

        const date = document.createElement("li");
        date.textContent = comments[i].date
        commentsList.appendChild(date);

        const comment = document.createElement("li");
        comment.textContent = comments[i].comment
        commentsList.appendChild(comment);
    }
};

displayComment();


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

function newComment() {
    const nameValue = nameInput.value;
    const commentValue = commentText.value;

    const addComment = document.createElement("li");
    addComment.textContent = commentValue;
    commentsList.prepend(addComment);
    commentText.value = ""

    const addDate = document.createElement("li");
    addDate.textContent = today;
    commentsList.prepend(addDate);

    const addName = document.createElement("li");
    addName.textContent = nameValue;
    commentsList.prepend(addName);
    nameInput.value = ""
};