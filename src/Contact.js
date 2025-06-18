export default function createContactPage() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = ``;
  const h1Element = document.createElement("h1");
  h1Element.innerText = `Contact`;
  contentElement.appendChild(h1Element);
}
