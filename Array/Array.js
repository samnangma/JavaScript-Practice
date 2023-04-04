// array

// create array with constructor
let arr = new Array();

// Create array using literal notations
let myArr = [];

arr = new Array(1, 2, 3, "Samnang");
myArr = ["Dara", "Nara", "Vattanak", "Vattana"];

let animal = {
  fullname: "hashaa",
  type: "dog",
  age: 1,
};

for (key in animal) {
  console.log(animal[key]);
}

// loop: iteration
// for (key in myArr) {
//   console.log(myArr[index]);
//   console.log("index: ", index);
// }

console.clear();
// iteration over array object
let response = [
  {
    fullname: "hashaa",
    type: "dog",
    age: 1,
  },
  {
    fullname: "ah b",
    type: "dog",
    age: 1,
  },
  {
    fullname: "BOO",
    type: "dog",
    age: 1,
  },
];

console.clear();

// repsone is array , index is the index of array
for (index in response) {
  console.log(response[index].fullname);
  document.querySelector("h1").innerHTML += response[index].fullname;
}

// for in use get index or key (if it is object) of array
// Array access form index
// object access from key
// for of use get value of array

for (resp of response) {
  console.log(resp.fullname);
  console.log(resp.age);
  console.log(resp.type);
}
// if repsonse is object : the value is that got is key

console.clear();
// using array methods

// myArr.splice(1,1,) // use to remove array
// myArr.splice(1,1,"Sreypich") // use for remove and add item  of array

// myArr.splices(1,2,"Sreypich");

// console.log(myArr);

// using spread syntax to copy array
const fruits = ["apple", "mango", "grape"];
const fruitsCopy = [...fruits];
// console.log("Copy array: ",fruitsCopy)

const fruitsCopy2 = Array.from(fruits); // copy array
const fruitsCopy3 = fruits.slice(); // copy array

console.log(fruitsCopy2);
console.log(fruitsCopy3);

console.clear();

let Crypto = ["Bitcoin", "Eth", "ATOM", "Sandbox", "Mana", "Carbon", "ADA"];
function filterCrypto(arr, userInput) {
  const filterResult = arr.filter((item) =>
    item.toLowerCase().includes(userInput.toLowerCase())
  );
  console.log(filterResult);
}

// Call function
filterCrypto(Crypto, "a");
console.clear();

let card = "";


//map used to iterate over array
response.map((student) => {
  // render to html
  console.log(student.fullname);
  card += ` 
  <div class="col-xl-3 p-2">
  <div class="card" >
      <img src="avt-14.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${student.fullname}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
</div>  
`
});

document.querySelector(".row").innerHTML = card;
