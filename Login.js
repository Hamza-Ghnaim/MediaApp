// const element = document.getElementById("button");
// element.addEventListener("click", matchUser);

function matchUser() {
  let userEmail = document.getElementById("email").value;
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(function (result) {
      let user = result.find((item) => item.email === userEmail);
      localStorage.userinfo = JSON.stringify(user);
      // window.location.href = "./Albums.html";
    });
}
