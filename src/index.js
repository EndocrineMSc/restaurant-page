import "./style.css";
import { landingPage } from "./landingPage";

const sideBar = document.getElementById("side-bar");

const homeButton = document.createElement("button");
homeButton.id = "home-button";
homeButton.textContent = "Home";
homeButton.addEventListener("click", landingPage.render);

const foodButton = document.createElement("button");
foodButton.id = "food-button";
foodButton.textContent = "Food";

const drinksButton = document.createElement("button");
drinksButton.id = "drinks-button";
drinksButton.textContent = "Drinks";

sideBar.appendChild(homeButton);
sideBar.appendChild(foodButton);
sideBar.appendChild(drinksButton);

//