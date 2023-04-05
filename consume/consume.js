// fetch categories
let baseURL = "https://api.escuelajs.co/api/v1/";
let fetchCategories = () => {
  fetch(`${baseURL}categories`, {
    method: "GET",
    headers: {
      Authorization: "basic key",
      "Content-Type": "appication/key",
    },
  })
    .then((respone) => respone.json())
    .catch((err) => console(err)) // option
    .then((res) => console.log(res));
};

// Call functions
fetchCategories();

// fetch products

let card = document.querySelector(".row");

let fetchProducts = () => {
  fetch(`${baseURL}products`) // make request
    .then((response) => response.json()) // respone as promise
    .then((res) => console.log(res));
};

fetchProducts();

// fetch Users
let fetchUsers = () => {
  fetch(`${baseURL}users`)
    .then((response) => response.json())
    .then((res) => console.log(res));
};

fetchUsers();

// async and await
export async function welcomeUsers() {
  let response = await fetch(`${baseURL}users`);
  // console.log(response);
  return response.json();
}
welcomeUsers().then((res) => console.log(res));
// console.log(welcomeUsers());

// categories.map((category) => {
//     console.log(category);
//     card.innerHTML += `

//     `
// });
