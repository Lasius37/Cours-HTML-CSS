import { CURRENT_URL } from "./constants.js";
import { generateMenu, generateAside } from "./menu.js";

await generateMenu();

const isHomePage = CURRENT_URL.pathname.endsWith('/') || CURRENT_URL.pathname.endsWith('/index.html');

if (isHomePage) {
    await generateAside();
}
