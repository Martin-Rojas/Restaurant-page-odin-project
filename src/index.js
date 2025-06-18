import "./styles.css";
import "./HomePage";
import createHomePage from "./HomePage";
import createContactPage from "./Contact";
import createMenuPage from "./MenuPage";

const buttons = document.querySelectorAll("button");

createHomePage();

buttons.forEach((btn) => {
  btn.addEventListener(`click`, (event) => {
    console.log(`Button Clicked ${event.target.textContent}`);
    if (event.target.textContent === `Home`) {
    //   const contentElement = document.getElementById("Content");
    //   contentElement.innerHTML = ``;
      createHomePage();
    } else if (event.target.textContent === `Menu`) {
      createMenuPage();
    } else {
      createContactPage();
    }
  });
});

//  // Get parent element
//  const content = document.getElementById("content");
//  // Create new element
//  const h1Element = document.createElement(`h1`);
//  // Add content
//  h1Element.innerHTML = `Restaurant`;
//  // append to the parent
//  content.appendChild(h1Element);

//  // create P element
//  const pElement = document.createElement("p");
//  pElement.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
//    fugit tenetur nulla qui eos numquam dolorum laboriosam distinctio
//    voluptatem`;
//  content.appendChild(pElement);

//  // Create a Button element
//  const btnElement = document.createElement("button");
//  btnElement.innerText = `Menu`;
//  content.appendChild(btnElement);

//  // Create an img element
//  const imgElement = document.createElement(`img`);
//  imgElement.setAttribute(
//    `src`,
//    "https://hasanalii73.github.io/Restaurant-page/2906fdacc9c7007d5919.jpeg"
//  );
//  content.appendChild(imgElement);
