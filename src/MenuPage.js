 export default function createMenuPage() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = ``;
  const h1Element = document.createElement("h1");
  h1Element.innerText = `Menu`;
  contentElement.appendChild(h1Element);
}
