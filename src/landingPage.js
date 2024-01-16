import Banner from "./img/interior.png"; 

const landingPage = (function() {
    const greeting = "🍻 Welcome to The Magnificent Tortoise Pub! 🍻";
    const welcome1 = "Step through the mystical archway and journey into a realm where medieval marvels and fantastical feasts await you. Nestled in the heart of our enchanted kingdom, The Magnificent Tortoise Pub beckons you to a realm of revelry, where hearty laughter and clinking tankards echo through the stone walls.";
    const welcome2 = "🏰 Immerse yourself in the ambience of a bygone era, where knights and wizards once roamed the land. As you cross the threshold, prepare to be enchanted by the flickering glow of candlelit tables, ornate tapestries, and the distant melodies of minstrels weaving tales of yore."
    const welcome3 = "🍽️ Our culinary wizards have conjured a menu that will transport your taste buds to a realm of epicurean delights. Feast upon sumptuous medieval fare, from succulent roasted meats to savory stews, all served in earthenware vessels fit for royalty. Quench your thirst with a selection of ales, meads, and potions crafted to perfection."
    const welcome4 = "🎭 Join us for evenings filled with merriment and entertainment, as jesters, minstrels, and troubadours regale you with performances that transcend time. Let the spirit of the medieval era captivate your senses, and revel in the camaraderie of fellow patrons who share your love for the extraordinary.";
    const welcome5 = "🛡️ Whether you're a noble lord, a daring adventurer, or a mystical sorcerer, The Magnificent Tortoise Pub welcomes one and all to embark on a culinary quest like no other. Unleash your imagination, savor the magic, and let the medieval enchantment begin!"
    const welcome6 = "Hail, fellow reveler! May your time in our realm be filled with feasts, friendship, and fantastic tales."
    const signage =  "Cheers," + "\n" + "The Magnificent Tortoise Pub 🐢🏰"
    const textBlocks = [greeting, welcome1, welcome2, welcome3, welcome4, welcome5, welcome6, signage];


    const render = function() {
        const contents = document.getElementById("content");
        contents.innerHTML = "";

        const myBanner = new Image();
        myBanner.src = Banner;

        contents.appendChild(myBanner);

        const textContainer = document.createElement("div");
        textContainer.id = "landing-text-container";

        textBlocks.forEach(block => {
            const text = document.createElement("div");
            text.classList.add("welcome");
            text.textContent = block;
            textContainer.appendChild(text);
        });

        contents.appendChild(textContainer);
    }
    return {render};
})();

export {landingPage};