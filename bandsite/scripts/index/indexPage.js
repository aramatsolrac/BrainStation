"use strict";

const dataURL = "https://project-1-api.herokuapp.com/comments/?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

const commentsSection = document.querySelector(".comments");
const newSection = createElement("section", "display-comments"); // add section
commentsSection.appendChild(newSection); // append section to main

const newList = createElement("ul", "display-comments__list"); // add list
newList.setAttribute("id", "comments-list"); // add id to the list
newSection.appendChild(newList); // append list to section

const commentsList = document.getElementById("comments-list");

// fetch data
const fetchData = () => {
    axios.get(dataURL).then((response) => {
        const commentsArr = response.data.sort((a, b) => {
            return a.timestamp - b.timestamp;
        });
        console.log(commentsArr);
        cleanAndAddComments(commentsArr);
    });
};

fetchData();

// clean and add comments
function cleanAndAddComments(commentsArr) {
    commentsList.textContent = "";
    for (let i = 0; i < commentsArr.length; i++) {
        displayComment(commentsArr[i]);
    }
}

// display comments
function displayComment(item) {
    // create div
    const commentDiv = createElement("div", "display-comments__card");
    commentDiv.setAttribute("id", item.id);
    const commentCardDiv = createElement("div", "display-comments__content");
    const nameAndDataDiv = createElement("div", "display-comments__name-and-data");
    const textDiv = createElement("div");
    const buttonsDiv = createElement("div", "display-comments__buttons");
    const likeDiv = createElement("div", "display-comments__like");
    const buttonDelete = createElement("button", "display-comments__delete", "Delete");
    const buttonLike = createElement("button", "display-comments__like--btn");
    buttonLike.innerHTML = `<i class="fas fa-heart display-comments__like--icon" aria-hidden="true"></i>`;
    const counterLike = createElement("span", "display-comments__like--counter", item.likes);

    likeDiv.appendChild(buttonLike);
    likeDiv.appendChild(counterLike);

    // create p and append them to a div
    nameAndDataDiv.appendChild(createElement("p", "display-comments__name", item.name));
    nameAndDataDiv.appendChild(createElement("p", "display-comments__date", formatDate(item.timestamp, { month: "2-digit" })));
    textDiv.appendChild(createElement("p", "display-comments__text", item.comment));
    buttonsDiv.appendChild(likeDiv);
    buttonsDiv.appendChild(buttonDelete);

    // append name, data, and comment text to a Card div
    commentCardDiv.appendChild(nameAndDataDiv);
    commentCardDiv.appendChild(textDiv);
    commentCardDiv.appendChild(buttonsDiv);

    // append card div to a outer div
    commentDiv.appendChild(createElement("div", "comments__img--no-pic"));
    commentDiv.appendChild(commentCardDiv);

    // prepend outer div to the main div
    commentsList.prepend(commentDiv);

    // delete function
    buttonDelete.addEventListener("click", deleteComment);

    function deleteComment() {
        axios
            .delete(
                `https://project-1-api.herokuapp.com/comments/${item.id}?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`
            )
            .then(() => {
                fetchData();
            });
    }

    // like function
    buttonLike.addEventListener("click", likeComment);

    function likeComment() {
        axios
            .put(
                `https://project-1-api.herokuapp.com/comments/${item.id}/like?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`
            )
            .then((response) => {
                counterLike.textContent = response.data.likes;
                const likeIcon = document.querySelectorAll(".display-comments__like--icon");
                likeIcon.forEach((icon) => {
                    icon.addEventListener("click", (event) => {
                        event.target.classList.add("display-comments__liked");
                    });
                })
            });
    }
}
// generate today's date
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

// add validation and add new comment
const form = document.getElementById("form");
const nameInput = document.querySelector(".comments__name");
const commentInput = document.querySelector(".comments__text");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = event.target.user_name.value.trim();
    const comment = event.target.user_comment.value.trim();

    if (userName === "" && comment === "") {
        nameInput.classList.add("comments__required");
        commentInput.classList.add("comments__required");
    } else if (userName === "") {
        nameInput.classList.add("comments__required");
    } else if (comment === "") {
        commentInput.classList.add("comments__required");
    } else {
        const data = {
            name: userName,
            comment: comment,
        };

        const headers = { "Content-Type": "application/json" };

        axios.post(dataURL, data, { headers }).then((response) => {
            const comment = response.data;
            displayComment(comment);
        });
        event.target.user_name.value = "";
        event.target.user_comment.value = "";
    }
});

// clean validation when input has a value
function cleanValidation(event) {
    if (event.target.value) {
        event.target.classList.remove("comments__required");
    }
}

nameInput.oninput = cleanValidation;
commentInput.oninput = cleanValidation;