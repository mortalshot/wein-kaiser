/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Lazy } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.categories__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.categories__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1.3,
			spaceBetween: 18,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.categories__slider .swiper__arrow-prev',
				nextEl: '.categories__slider .swiper__arrow-next',
			},

			// Брейкпоинты
			breakpoints: {
				480: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 2.5,
				},
				767.98: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1200: {
					slidesPerView: 5,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.promotions_template1 .promotions__slider')) {
		new Swiper('.promotions_template1 .promotions__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			speed: 800,
			watchOverflow: true,

			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.promotions_template1 .promotions__slider .swiper__arrow-prev',
				nextEl: '.promotions_template1 .promotions__slider .swiper__arrow-next',
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.promotions_template2 .promotions__slider')) {
		new Swiper('.promotions_template2 .promotions__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.promotions_template2 .promotions__slider .swiper__arrow-prev',
				nextEl: '.promotions_template2 .promotions__slider .swiper__arrow-next',
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.promotions_template3 .promotions__slider')) {
		new Swiper('.promotions_template3 .promotions__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1.2,
			spaceBetween: 18,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.promotions_template3 .promotions__slider .swiper__arrow-prev',
				nextEl: '.promotions_template3 .promotions__slider .swiper__arrow-next',
			},

			// Брейкпоинты
			breakpoints: {
				480: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 2.5,
				},
				767.98: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 24,
				},
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});