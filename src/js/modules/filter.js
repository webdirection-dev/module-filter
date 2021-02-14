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

export default filter;