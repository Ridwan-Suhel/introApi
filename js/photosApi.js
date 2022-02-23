function loadPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
}
function displayPhotos(photos) {
  console.log(photos);
  const photoContainer = document.getElementById("photo-album");
  for (const photo of photos) {
    const div = document.createElement("div");
    div.classList.add("single-photo-card");
    div.innerHTML = `
    <h3>${photo.title}</h3>
    <img src="${photo.url}">
    `;
    photoContainer.appendChild(div);
  }
}
