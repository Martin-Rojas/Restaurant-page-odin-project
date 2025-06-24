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
      createHomePage();
    } else if (event.target.textContent === `Menu`) {
      createMenuPage();
    } else {
      createContactPage();
    }
  });
});
