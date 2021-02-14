/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function filter({btnSelector, cardsParentSelector, cardWrapSelector, jsHeightSelector, jsWidthSelector}) {
    let dataFilter;
    const btns = document.querySelectorAll(btnSelector),
        cards = document.querySelectorAll(cardsParentSelector),
        cardsWrap = document.querySelector(cardWrapSelector),
        heightJsCard = document.querySelectorAll(jsHeightSelector),
        widthInfoCard = document.querySelectorAll(jsWidthSelector);

    // onclick
    btns.forEach(item => {
        item.addEventListener('click', function () {
           dataFilter = this.dataset.filter;
           filterCards(dataFilter);
       });
    });

    function filterCards(dataFilter) {
        let offset = 0;
        // Сброс стилей
        cardsWrap.style.height = 'auto';
        widthInfoCard.forEach(item => {
        item.style.cssText = `
            background: radial-gradient(circle at left,rgba(0,0,0,.6) 0,#000 25%);
        `;
        });

        cards.forEach(item => {
            item.classList.remove('competenceCard__js');
            item.classList.remove('scale-up-hor-right');
            item.classList.remove('scale-up-top');
            item.style.cssText = `
                display: none;
            `;
            if (item.classList.contains(dataFilter) && dataFilter === 'all' || item.classList.contains(dataFilter) && dataFilter === 'bootstrap') {
                setTimeout(() => {
                    item.style.display = "block";
                    item.classList.add('scale-up-top');
                }, 0);
            }

            if ((item.classList.contains(dataFilter) && dataFilter === 'js') || (item.classList.contains(dataFilter) && dataFilter === 'react')) {
                setTimeout (() => {
                    cardsWrap.style.height = `${(heightJsCard.length * 336) + (heightJsCard.length * 30)}px`;
                    item.style.display = "block";
                    item.classList.add('scale-up-hor-right');
                    item.classList.add('competenceCard__js');


                    widthInfoCard.forEach(item => {
                        item.style.cssText = `
                            background: #000;
                        `;
                    });
                }, 0 + offset);
                offset += 500;

            }
        });

        btns.forEach(item => {
           if (item.dataset.filter === dataFilter) {
               item.classList.add('filter__link-active');
           } else {
               item.classList.remove('filter__link-active');
           }
        });
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");



document.addEventListener('DOMContentLoaded', () => {
   (0,_modules_filter__WEBPACK_IMPORTED_MODULE_0__.default)({
      btnSelector: '.filter__btn',
      cardsParentSelector: '.competenceCard__wrap',
      cardWrapSelector: '.cards',
      jsHeightSelector: '.js',
      jsWidthSelector: '.competenceCard__desc',
   });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map