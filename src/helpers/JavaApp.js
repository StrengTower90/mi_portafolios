// import { useState } from "react";

const SetShowMenu = () => {
    // const listElement = document.querySelectorAll('.menu_item--show');
    const list = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');


    // const addClick = () => {
    //     listElement.forEach(element => {
    //        element.addEventListener('click', () => {

    //            let submenu = element.children[1];
    //            let height = 0;
    //            element.classList.toggle('menu_item--active');

    //            if( submenu.clientHeight === 0 ){
                
    //             height = submenu.scrollHeight;//scrollHeight devuelve el alto necesario para exista el elemento

    //            }
                   
    //            submenu.style.height = `${height}px`;

    //        });
    //     })
    // }

    // const deleteStyleHeight = () => {
    //     listElement.forEach(element => {

    //         if(element.children[1].getAttribute('style')){

    //             element.children[1].removeAttribute('style');
    //             element.classList.remove('menu_item--active');
    //         }
    //     })
    // }


    // window.addEventListener('resize', () => {
    //     if( window.innerWidth > 800 ){

    //        deleteStyleHeight();

    //     }else{

    //         addClick();

    //     } 
    // });

    // if( window.innerWidth <= 800 ){

    //     addClick();
    // }

    menu.addEventListener('click', () => list.classList.toggle('menu_links--show'));
};

export default SetShowMenu;