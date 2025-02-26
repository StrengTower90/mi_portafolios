// import { useState } from "react";

const SetShowMenu = () => {
    const menu = document.querySelector('.menu_hamburguer');    
    const menuLinks = document.querySelector('.menu_links');

    if (window.innerWidth <= 800) {
          // Toggle menu visibility when the hamburger icon is clicked.
        menu.addEventListener('click', () => {
            menuLinks.classList.toggle('menu_links--show');
        });

        // Close the menu when any menu item is clicked.
        menuLinks.addEventListener('click', () => {
            menuLinks.classList.remove('menu_links--show');
        });
    } else {
        // For large screen
        menu.removeEventListener('click', () => {
            menuLinks.classList.toggle('menu_links--show');
        });

        menuLinks.removeEventListener('click', () => {
            menuLinks.classList.remove('menu_links--show');
        })
    }

};

export default SetShowMenu;