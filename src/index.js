import "./style.css";
import Banner from "./img/interior.png"; 
import { landingPage } from "./landingPage";

const element = document.getElementById("content");

const myBanner = new Image();
myBanner.src = Banner;

element.appendChild(myBanner);