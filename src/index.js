import "./styles.css";

// Get parent element
const content = document.getElementById("content");
// Create new element
const h1Element = document.createElement(`h1`);
// Add content
h1Element.innerHTML = `Restaurant`;
// append to the parent
content.appendChild(h1Element);

// create P element
const pElement = document.createElement("p");
pElement.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
fugit tenetur nulla qui eos numquam dolorum laboriosam distinctio
voluptatem`;
content.appendChild(pElement);

// Create a Button element
const btnElement = document.createElement("button");
btnElement.innerText = `Menu`;
content.appendChild(btnElement);

// Create an img element
const imgElement = document.createElement(`img`);
imgElement.setAttribute(`src`, `../image01.avif`);
content.appendChild(imgElement);
