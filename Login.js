// const element = document.getElementById("button");
// element.addEventListener("click", matchUser);

function matchUser() {
  let userEmail = document.getElementById("email").value;
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(function (json) {
      let user = json.find((item) => item.email === userEmail);
      localStorage.setItem("User", "user");
      // localStorage.userinfo = JSON.stringify(user);
      // window.location.href = "./Albums.html";
    });
}
