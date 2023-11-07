/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelector('.promo'),
      promoAdv = promo.querySelectorAll('.promo__adv img'),
      promoGenre = promo.querySelector('.promo__genre'),
      promoBG = promo.querySelector('.promo__bg'),
      promoList = promo.querySelector('.promo__interactive-list'); 

promoAdv.forEach(element => {
    element.remove();
});

promoGenre.innerHTML = 'драма';

promoBG.style.backgroundImage = 'url(img/bg.jpg)';

promoList.innerHTML = '';
const {movies} = movieDB;
movies.sort();

movies.forEach((movie, i) => {
    promoList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${movie}
            <div class="delete"></div>
        </li>
    `;
});