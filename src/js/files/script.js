// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


const firstscreen = document.querySelector('.firstscreen');
if (firstscreen) {
    const parent = firstscreen.parentNode;

    if (firstscreen == parent.firstElementChild) {
        const wrapper = document.querySelector('.wrapper');
        wrapper.classList.add('_header-bg');

        window.addEventListener('scroll', function () {
            const scrollTop = window.scrollY;

            if (scrollTop > 0) {
                wrapper.classList.remove('_header-bg');
            } else {
                wrapper.classList.add('_header-bg');
            }
        })
    }
}
