// Задача №1
// Отримати в константу елемент <body>

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// DZ- 25

// Задача №1
// Отримати в константу елемент <body>
const bodyEl = document.body;
console.log(bodyEl);

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

function createUl (itemCount = 5 ) {
    itemCount = parseInt(itemCount)
    if (!itemCount || itemCount <= 0) return

        const ulCreate = document.createElement("ul")
        bodyEl.prepend(ulCreate)
        console.log()

    for (let index = 0; index < itemCount; index++) {
        ulCreate.insertAdjacentHTML("beforeend", `<li> пункт № ${index + 1}</li>` )

    }

}
createUl ("10px")

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

bodyEl.classList.add('loaded')
if (bodyEl.classList.contains('loaded')) {
    bodyEl.style.color = 'green'
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const Item = document.querySelectorAll('[class*=__item]').forEach((element,index) => {
    element.classList.add('active')
    element.textContent =`Елемент №${index +1}`
});

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector(".button");
function scrollToBlock(element) {
        element.scrollIntoView({
        //"start", "center", "end". За замовчуванням "center".
        block: "center",
        //"start", "center", "end" чи "nearest". За замовчуванням "nearest".
        inline: "nearest",
        behavior: "smooth",
    });
}
scrollToBlock(button);

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний


const link = document.querySelector(".button--link");
link.setAttribute("data-value", 200);

if (parseFloat(link.dataset.value) <= 200) {
    link.style.color = "red";
    console.log(link.style.color);
}
