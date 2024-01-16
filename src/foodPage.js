import Shrimp from "./img/cured_shrimps.png";
import Lamb from "./img/deep_fried_lamb.png";
import Frog from "./img/marinated_frog.png";
import Bisque from "./img/poached_bisque.png";
import Buns from "./img/sauteed_mushroom_and_garlic_buns.png";
import Salad from "./img/shallow_fried_mushroom_salad.png";
import Whip from "./img/walnut_whip.png";
import Cake from "./img/grape_and_lemon_molten_cake.png";
import MenuItem from "./menuItem.js";

const foodPage = (function() {
    const shrimpItem = new MenuItem(Shrimp, "Cured Shrimp", "Our skilled alchemists employ ancient methods to infuse these plump shrimp with flavors reminiscent of the briny depths. A symphony of sea salt, rare herbs, and a touch of arcane essence culminate in a medley that captures the essence of a Siren's captivating song.");
    const lambItem = new MenuItem(Lamb, "Deep-fried Lamb", "Served on a regal platter adorned with heraldic symbols, the Golden Ember Lamb Bites are accompanied by a dipping sauce crafted from honeyed mead and a dash of herb-infused vinegar. It's a union of sweet and savory, transporting you to the heart of a medieval feast.");
    const frogItem = new MenuItem(Frog, "Marinated Frog", "Experience a burst of freshness as you bite into the succulent frog. The citrusy notes from the marination process add a delightful zest that dances on your palate, creating a perfect balance with the natural flavors of the tender amphibian meat.");
    const bisqueItem = new MenuItem(Bisque, "Poached Bisque", "Join us on a journey into the depths of flavor with the Mystical Sea Bisque. Perfect for those seeking a taste of oceanic opulence, this dish beckons you to savor the ephemeral elegance that defines the medieval dining experience at The Magnificent Tortoise Pub.");
    const bunsItem = new MenuItem(Buns, "Mushroom and Garlic Buns", "Embark on a gastronomic journey with our Mystic Forest Buns, a spellbinding union of earthy mushrooms, aromatic garlic, and pillowy buns that transport you to the heart of an enchanted woodland. Crafted with care, these sautéed delights promise a symphony of flavors that dance on your palate.");
    const saladItem = new MenuItem(Salad, "Woodland Elegance Salad", "Handpicked from the heart of the enchanted woods, an array of mushrooms takes center stage in our Woodland Elegance Salad. Shallow-fried to a golden crisp, these woodland treasures provide a satisfying crunch that harmonizes with the earthy richness of the forest floor.");
    const whipItem = new MenuItem(Whip, "Walnut Whip", "Savor the symphony of textures and flavors with the Whimsical Walnut Whip, a sweet creation designed for those seeking a magical treat. Join us at The Magnificent Tortoise Pub and indulge in the artistry of medieval dining, where each bite is a moment of enchantment and nutty delight.");
    const cakeItem = new MenuItem(Cake, "Grape and Lemon Molten Cake", "At the heart of this culinary symphony lies a grape-infused molten center, crafted from the finest vineyard treasures. Plump, juicy grapes are transformed into a luscious filling that bursts forth like a grape elixir, creating a sweet surprise within the velvety confines of the molten cake.");

    const render = function() {
        const contents = document.getElementById("content");

        const menuWrapper = document.createElement("div");
        menuWrapper.classList.add("menu-wrapper");
        
        const header = document.createElement("div");
        header.classList.add("menu-header");
        header.textContent = "Food";

        const starterHeader = document.createElement("div");
        starterHeader.classList.add("menu-section-header");
        starterHeader.textContent = "Starters"

        const mainDishHeader = document.createElement("div");
        mainDishHeader.classList.add("menu-section-header");
        mainDishHeader.textContent = "Main Dishes";

        const desertHeader = document.createElement("div");
        desertHeader.classList.add("menu-section-header");
        desertHeader.textContent = "Deserts";

        const starterItemsWrapper = document.createElement("div");
        starterItemsWrapper.classList.add("menu-items-wrapper");
        starterItemsWrapper.appendChild(frogItem.element);
        starterItemsWrapper.appendChild(bisqueItem.element);
        starterItemsWrapper.appendChild(bunsItem.element);
        
        const mainItemsWrapper = document.createElement("div");
        mainItemsWrapper.classList.add("menu-items-wrapper");
        mainItemsWrapper.appendChild(shrimpItem.element);
        mainItemsWrapper.appendChild(lambItem.element);
        mainItemsWrapper.appendChild(saladItem.element);

        const desertItemsWrapper = document.createElement("div");
        desertItemsWrapper.classList.add("menu-items-wrapper");
        desertItemsWrapper.appendChild(cakeItem.element);
        desertItemsWrapper.appendChild(whipItem.element);

        menuWrapper.appendChild(starterHeader);
        menuWrapper.appendChild(starterItemsWrapper);
        menuWrapper.appendChild(mainDishHeader);
        menuWrapper.appendChild(mainItemsWrapper);
        menuWrapper.appendChild(desertHeader);
        menuWrapper.appendChild(desertItemsWrapper);


        contents.innerHTML = "";
        contents.appendChild(menuWrapper);
    }

    return {render}
})();

export {foodPage};