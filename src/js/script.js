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