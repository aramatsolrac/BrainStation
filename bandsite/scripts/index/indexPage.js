"use strict";

const dataURL =
  "https://project-1-api.herokuapp.com/comments/?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

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
  const nameAndDataDiv = createElement(
    "div",
    "display-comments__name-and-data"
  );
  const textDiv = createElement("div");
  const buttonDelete = createElement(
    "button",
    "display-comments__button",
    "Delete"
  );
  const buttonLike = createElement(
    "button",
    "display-comments__button-like",
    "Like"
  );
  const counterLike = createElement(
    "span",
    "display-comments__like",
    item.likes
  );
  buttonLike.appendChild(counterLike);

  // create p and append them to a div
  nameAndDataDiv.appendChild(
    createElement("p", "display-comments__name", item.name)
  );
  nameAndDataDiv.appendChild(
    createElement(
      "p",
      "display-comments__date",
      formatDate(item.timestamp, { month: "2-digit" })
    )
  );
  textDiv.appendChild(
    createElement("p", "display-comments__text", item.comment)
  );

  // append name, data, and comment text to a Card div
  commentCardDiv.appendChild(nameAndDataDiv);
  commentCardDiv.appendChild(textDiv);
  commentCardDiv.appendChild(buttonDelete);
  commentCardDiv.appendChild(buttonLike);

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
  const likeButton = document.querySelectorAll(
    ".display-comments__button-like"
  );
  let hasLike = false;
  axios
    .put(
      `https://project-1-api.herokuapp.com/comments/${item.id}/like?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`
    )
    .then((response) => {
      // console.log(response.data.likes);
      likeButton.forEach((elem) => {
        elem.onclick = () => {
          const counter = elem.querySelector("span");
          const likesAmount = response.data.likes;
          console.log(likesAmount);

          if (hasLike) {
            counter.innerText = likesAmount - 1;
            hasLike = false;
          } else {
            counter.innerText = likesAmount + 1;
            hasLike = true;
          }
        };
      });
    });
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

    const headers = {
      "Content-Type": "application/json",
    };

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
