import "../scss/app.scss";
import * as R from "../../node_modules/ramda/dist/ramda.js"
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const arrayToPluck = [
    { name: "John", class: "is-primary" },
    { age: 23, class: "is-warning" },
    { job: "programmer", class: "is-danger" },
  ];
  const articles = document.querySelectorAll("article");

const getClasses = R.pluck("class");
const classes = getClasses(arrayToPluck);

for(let i =0; i<articles.length;i++){
  articles[i].classList.add(classes[i]);
  
}


});
