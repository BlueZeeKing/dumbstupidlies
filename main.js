import "tailwindcss/tailwind.css";
import "./styles.css";

import html, { attributes } from "./content.md";

document.querySelector("article").innerHTML = html;
