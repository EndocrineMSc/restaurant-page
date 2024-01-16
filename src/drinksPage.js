import Autumn from "./img/autumn_roar.png";
import Bull from "./img/salty_bull.png";
import Six from "./img/surprised_six.png";
import Demon from "./img/demonic_twister.png";
import MenuItem from "./menuItem";

const drinksPage = (function() {
    const contents = document.getElementById("content");

    const autumnDrink = new MenuItem(Autumn, "Autumn Roar", "A medley of warm spices, including cinnamon, nutmeg, and a touch of clove, is gently infused into the elixir. This spiced ember infusion adds depth and warmth, creating a comforting undertone that resonates with the crackle of autumn leaves beneath your feet.");
    const bullDrink = new MenuItem(Bull, "Salty Bull", "The rim of your goblet is adorned with a touch of sea salt, creating a salty crown that enhances each sip. The saline kiss complements the libation's marine symphony, offering a sensation reminiscent of sea spray meeting your skin under the sun's caress.");
    const sixDrink = new MenuItem(Six, "Surprised Six", "To add a touch of whimsy, the Surprised Six Elixir is adorned with a sprinkle of rainbow-colored sugar crystals. These vibrant crystals create a visual spectacle, transforming each goblet into a canvas of color and surprise, reminiscent of the excitement found in medieval festivities.");
    const demonDrink = new MenuItem(Demon, "Demonic Twister", "A surge of hellfire spices, featuring a daring mix of chili peppers, cinnamon, and a touch of smoky paprika, infuses the Demonic Twister with a devilish heat. Brace yourself for a spice surge that adds a bold and intense kick, reminiscent of the flames that swirl in the abyss.");

    const render = function() {
        const contents = document.getElementById("content");

        const menuWrapper = document.createElement("div");
        menuWrapper.classList.add("menu-wrapper");
        
        const header = document.createElement("div");
        header.classList.add("menu-section-header");
        header.textContent = "Drinks";

        const itemsWrapper = document.createElement("div");
        itemsWrapper.classList.add("drinks-wrapper");
        itemsWrapper.appendChild(autumnDrink.element);
        itemsWrapper.appendChild(bullDrink.element);
        itemsWrapper.appendChild(sixDrink.element);
        itemsWrapper.appendChild(demonDrink.element);
    
        menuWrapper.appendChild(header);
        menuWrapper.appendChild(itemsWrapper);

        contents.innerHTML = "";
        contents.appendChild(menuWrapper);
    }

    return {render}
})();

export {drinksPage};