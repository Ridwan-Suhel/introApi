function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}
function displayPosts(posts) {
  console.log(posts);
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("single-post");
    const h3 = document.createElement("h3");
    h3.innerText = `${post.title}`;
    const p = document.createElement("p");
    p.innerText = `${post.body}`;

    div.appendChild(h3);
    div.appendChild(p);
    postContainer.appendChild(div);
  }
}
loadPosts();
