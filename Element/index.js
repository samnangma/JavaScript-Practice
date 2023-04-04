
// let card = `
// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
// `

// let loadingView =  `
//   <div class="col-12 col-sml-6 col-lg-3 >
//    <div class="card">
//   <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.artstation.com%2Fartwork%2F3qzZLo&psig=AOvVaw1Vy7Lh7vogBx4OZF_eJcWG&ust=1680053905270000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiPk76__f0CFQAAAAAdAAAAABAT" class="card-img-top" alt="...">

//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>

// <div class="card" aria-hidden="true">
//   <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.artstation.com%2Fartwork%2F3qzZLo&psig=AOvVaw1Vy7Lh7vogBx4OZF_eJcWG&ust=1680053905270000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiPk76__f0CFQAAAAAdAAAAABAT" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title placeholder-glow">
//       <span class="placeholder col-6"></span>
//     </h5>
//     <p class="card-text placeholder-glow">
//       <span class="placeholder col-7"></span>
//       <span class="placeholder col-4"></span>
//       <span class="placeholder col-4"></span>
//       <span class="placeholder col-6"></span>
//       <span class="placeholder col-8"></span>
//     </p>
//     <a class="btn btn-primary disabled placeholder col-6"></a>
//   </div>
// </div>
// </div>
// `


// document.getElementById("demo2").innerHTML = `${loading}`;
// document.getElementById("demo3").innerHTML = `${card}`;

// const ROW = document.querySelector(".row")
// ROW.innerHTML = loadingView;


// let num1 = 20 ;
// let num2 = 30 ;

// let numOne = document.querySelector("#num1");
// console.log(numOne);
// console.log(numOne.value);

// const result = parseInt(numOne.value, 10) + num2;
// console.log(result);

//boolean

// let isLoading = true;
// let isLogin = true;
// console.log(isLogin);

// undefined

// let a ;
// console.log(a);

//null 

let student = {
  "fullname" : "Name",
  "role": " Web developer",
  "age ": " 20"
}

let student1 = {
  fullname:"NAng",
  role: "kSk",
  age: 19 ,
  skills: ["git","Confess","Sad","Web3.0"]
} 
let student2 = {
  fullname:"Dara",
  role: "kSk",
  age: 19 ,
  skills: ["git","Confess","Sad","Web3.0"]
} 
let student3 = {
  fullname: "Nara",
  role: "kSk",
  age: 19 ,
  skills: ["git","Confess","Sad","Web3.0"]
} 
let student4 = {
  fullname:"Here",
  role: "kSk",
  age: 19 ,
  skills: ["git","Confess","Sad","Web3.0"]
} 
let student5 = {
  fullname:"Samnang",
  role: "kSk",
  age: 19 ,
  skills: ["git","Confess","Sad","Web3.0"]
} 

let Data = [
  student1,
  student2,
  student3,
  student4,
  student5
]
let card ;

// console.log(student1.skills,student1[fullname])
console.log("--------------------------------------");

for(i=0 ; i<Data.length ; i++ ){
    console.log();
    card += `<div class="card p-">
    <img src="logo.png" class="card-img-top" alt="...">
  
    <div class="card-body">
      <h5 class="card-title">${Data[i].fullname}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  
  <div class="card" aria-hidden="true">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
      </h5>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
      <a class="btn btn-primary disabled placeholder col-6"></a>
    </div>
  </div> `
}
document.querySelector(".row").innerHTML = card;

// document.getElementById("demo2").innerHTML = `${card}`;

