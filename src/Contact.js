import "./contactStyles.css";

export default function createContactPage() {
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = ``;
  const h1Element = document.createElement("h1");
  h1Element.innerText = `Contact`;
  contentElement.appendChild(h1Element);

  // Contact div
  const contactContainer = document.createElement(`div`);

  // COntact element
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

  contactContainer.appendChild(contactInfo);

  // Create form
  const form = document.createElement(`form`);

  // create label for email
  const labelEmail = document.createElement(`label`);
  labelEmail.innerHTML = `Email:`;
  labelEmail.setAttribute(`for`, `email`);
  form.appendChild(labelEmail);

  // create input for email
  const inputEmail = document.createElement(`input`);
  inputEmail.setAttribute(`type`, `email`);
  inputEmail.setAttribute(`id`, `email`);
  inputEmail.setAttribute(`name`, `email`);
  inputEmail.setAttribute(`placeholder`, `email`);
  form.appendChild(inputEmail);

  //   Crate label for message
  const labelMessage = document.createElement(`label`);
  labelMessage.innerHTML = `Message:`;
  labelMessage.setAttribute(`for`, `message`);
  form.appendChild(labelMessage);

  // Create input for message
  const textarea = document.createElement(`textarea`);
  textarea.setAttribute(`id`, `message`);
  textarea.setAttribute(`name`, `message`);
  textarea.setAttribute(`rows`, `5`);
  textarea.setAttribute(`cols`, `30`);
  textarea.setAttribute(`placeholder`, `Type your message here...`);

  form.appendChild(textarea);
  // Create btn
  const submitBtn = document.createElement(`button`);
  submitBtn.setAttribute(`type`, `submit`);
  submitBtn.setAttribute("id", `btn-form`);
  submitBtn.classList.add("submit-btn");
  submitBtn.innerText = `Send Message`;
  form.appendChild(submitBtn);

  contactContainer.appendChild(form);
  contentElement.appendChild(contactContainer);
}
