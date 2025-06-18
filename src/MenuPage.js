export default function createMenuPage() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = ``;
  const h1Element = document.createElement("h1");
  h1Element.innerText = `Menu`;
  contentElement.appendChild(h1Element);

  // Create a div to content all menu items
  const menuItems = document.createElement(`div`);

  // Create a card element with menu items
  const menuItem = document.createElement(`div`);
  const itemName = document.createElement(`h3`);
  itemName.innerHTML = `Item 1`;
  menuItem.appendChild(itemName);

  const price = document.createElement(`p`);
  price.innerHTML = `$ 13.50`;
  menuItem.appendChild(price);

  const itemImg = document.createElement(`img`);
  itemImg.setAttribute(
    `src`,
    `https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  );
  menuItem.appendChild(itemImg);

  contentElement.appendChild(menuItem);
}
