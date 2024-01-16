import "./style.css";
import { landingPage } from "./landingPage";
import { foodPage } from "./foodPage";

function toggleActiveButton(event) {
    event.target.classList.add("active");

    let buttons = Array.from(sideBar.getElementsByTagName("button"));
    buttons.forEach(button => {
        if (event.target != button) {
            button.classList.remove("active");
        }
    });
}

const sideBar = document.getElementById("side-bar");

const homeButton = document.createElement("button");
homeButton.id = "home-button";
homeButton.classList.add("active");
homeButton.textContent = "Home";
homeButton.addEventListener("click", landingPage.render);
homeButton.addEventListener("click", toggleActiveButton);

const foodButton = document.createElement("button");
foodButton.id = "food-button";
foodButton.textContent = "Food";
foodButton.addEventListener("click", foodPage.render);
foodButton.addEventListener("click", toggleActiveButton);

const drinksButton = document.createElement("button");
drinksButton.id = "drinks-button";
drinksButton.textContent = "Drinks";

sideBar.appendChild(homeButton);
sideBar.appendChild(foodButton);
sideBar.appendChild(drinksButton);

landingPage.render();