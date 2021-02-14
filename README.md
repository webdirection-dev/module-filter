# module-filter
Скрипт для калькулятора.


## Подключение модуля
В данном репозитории точкой входа ___Webpack___ является _./src/js/script.js_.
<br /> Импортируем в него модуль со скриптом слайдера:
```javascript
// Точка вхождения Webpack: "./src/js/script.js'
"use strict";
import filter from "./modules/filter";

document.addEventListener('DOMContentLoaded', () => {
    filter({
        btnSelector: '.filter__btn',
        cardsParentSelector: '.competenceCard__wrap',
        cardWrapSelector: '.cards',
        jsHeightSelector: '.js',
        jsWidthSelector: '.competenceCard__desc',
    });
});
```
