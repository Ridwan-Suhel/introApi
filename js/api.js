// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// function loadUser() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => displayUsers(data));
// }

function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
function displayUsers(users) {
  console.log(users);
  const ul = document.getElementById("userUl");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name} - Email: ${user.email} - City: ${user.address.city}`;
    ul.appendChild(li);
  }
}
