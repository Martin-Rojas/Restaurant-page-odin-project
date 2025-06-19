import "./contactStyles.css";

export default function createContactPage() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = ``;
  const h1Element = document.createElement("h1");
  h1Element.innerText = `Contact`;
  contentElement.appendChild(h1Element);

  // Contact div
  const contactContainer = document.createElement(`div`);

  const contactInfo = document.createElement(`div`);
  contactInfo.setAttribute(`id`, `contactInfo`);
  const h4 = document.createElement(`h4`);
  h4.innerHTML = `Contact`;
  contactInfo.appendChild(h4);

  const streetAddress = document.createElement(`p`);
  streetAddress.innerHTML = `123 Main Street`;
  contactInfo.appendChild(streetAddress);

  const cityAddress = document.createElement(`p`);
  cityAddress.innerHTML = `Texas, USA`;
  contactInfo.appendChild(cityAddress);

  const phoneNumber = document.createElement(`p`);
  phoneNumber.innerHTML = `123-345-9876`;
  contactInfo.appendChild(phoneNumber);

  const email = document.createElement(`p`);
  email.innerHTML = `info@restaurant.com`;
  contactInfo.appendChild(email);

  contentElement.appendChild(contactInfo);
}
