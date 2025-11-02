import restImg from "./img/restaurante.jpeg"
import menuImg from "./img/menu.jpeg"
import contImg from "./img/contacto.jpeg"

import "./styles.css";
import { loadPage } from "./loadpage"

const btn_home = document.querySelector(".btn1");
const btn_menu = document.querySelector(".btn2");
const btn_acerca = document.querySelector(".btn3");

btn_home.addEventListener("click", function () {
    loadPage("HOME", "Bienvenido al mejor restaurante de Europa, que tengas una buena comida", restImg);
})

btn_menu.addEventListener("click", function () {
    loadPage("MENÚ", "Ensalada -> 9.00€\nCarne -> 29.00€\nSopa -> 15.50€", menuImg);
})

btn_acerca.addEventListener("click", function () {
    loadPage("CONTACTO", "Tienes alguna duda? Contáctanos", contImg);
})