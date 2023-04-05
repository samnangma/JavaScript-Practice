
let baseURL = "https://api.escuelajs.co/api/v1/";
// fetch users

// fetch Users
let fetchUsers = () => {
  fetch(`${baseURL}users`)
    .then((response) => response.json())
    .then((res) => console.log(res));
};

fetchUsers();

// async and await
async function welcomeUsers() {
  let response = await fetch(`${baseURL}users`);
  // console.log(response);
  return response.json();
}
// welcomeUsers().then((res) => console.log(res));
let card = document.querySelector(".row")
welcomeUsers().then(user => {
  user.forEach((index) => {
    card.innerHTML += 
    `
    <div class="col-xl-3 p-2">
    <img src="${index.avatar}" class="card-img-top" alt="...">
      <div class="card" >
          <div class="card-body">
            <h5 class="card-title">${index.name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>
    `
  })
})