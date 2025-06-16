let form = document.querySelector("form");
let allUsers = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let arr = JSON.parse(localStorage.getItem("arr")) || [];

  let username = document.querySelector("#username").value;
  let content = document.querySelector("#user-review").value;
  let page = localStorage.getItem("page");

  let userExists = false;

  // Check if the user has already reviewed the same page
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].username === username && arr[i].page === page) {
      // If the user exists for this page, update the review
      arr[i].content = content;
      userExists = true;
      break;
    }
  }

  // If user doesn't exist, add new review
  if (!userExists) {
    arr.push({
      username: username,
      content: content,
      page: page,
    });
  }

  localStorage.setItem("arr", JSON.stringify(arr));
  // JSON.parse(localStorage.getItem("arr"));

  setTimeout(() => {
    window.location.href = localStorage.getItem("page");
  }, 1000);
});
