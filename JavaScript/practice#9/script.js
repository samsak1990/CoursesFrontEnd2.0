// Создай `p` с текстом `"Нажми на меня"`. При клике он меняет текст на `"Текст изменён!"`.

// Создай 5 `div`, в каждом из которых есть кнопка`"Скрыть"`. При клике `div` исчезает.

// Создай`div`.При клике на него его размер увеличивается на 10px.

// Создай массив чисел, добавь кнопку`"Сортировать"`, которая отображает отсортированный массив на странице.

// Создай массив цветов `["red", "blue", "green", "yellow"]` и кнопку`"Сменить фон"`.При каждом клике фон страницы должен меняться на следующий цвет из массива.

//! Создай кнопку `"Сгенерировать"` и пустой`div`.При каждом клике кнопки в `div` должен появляться новый случайный номер от 1 до 100.

const btnGenerate = document.createElement("button");
const boxNumber = document.createElement("div");
btnGenerate.textContent = "Сгенерировать";
document.body.append(btnGenerate);
btnGenerate.addEventListener("click", () => {
  let random = Math.ceil(Math.random() * 100);
  boxNumber.style.display = "inline-block";
  boxNumber.textContent = random;
  btnGenerate.insertAdjacentElement("afterend", boxNumber);
});

// Создай массив строк`["Кнопка 1", "Кнопка 2", "Кнопка 3"]`.Напиши функцию`createButtons(buttons)`, которая создаёт кнопку(`button`) для каждой строки и добавляет её в`body`.  Добавь обработчик клика, который выводит в консоль текст кнопки.

const btnList = ["Кнопка 1", "Кнопка 2", "Кнопка 3"];

const createButtons = (btnList) => {
  for (let btn of btnList) {
    const btnElem = document.createElement("button");
    btnElem.style.display = "block";
    btnElem.textContent = btn;
    btnElem.addEventListener("click", () => {
      console.log(btnElem.textContent);
    });
    document.body.append(btnElem);
  }
};
createButtons(btnList);

//  Напиши функцию `generateBookList(books)`, которая принимает массив объектов `books`, где каждый объект содержит `title` и `author`. Функция должна создать список (`ul`), в котором каждый элемент (`li`) содержит название книги и автора, а затем добавить этот список в `body`.

const books = [
  { title: "Гарри Поттер", author: "Дж. К. Роулинг" },
  { title: "1984", author: "Джордж Оруэлл" },
  { title: "Мастер и Маргарита", author: "М. А. Булгаков" },
];

function generateBookList(books) {
  const booksElement = document.createElement("ul");
  for (let book of books) {
    const bookElement = document.createElement("li");
    bookElement.textContent = book.title;
    booksElement.appendChild(bookElement);
  }
  document.body.append(booksElement);
}

generateBookList(books);

// Создай `ul` и две кнопки: `"Добавить"` и`"Удалить"`.По клику `"Добавить"` в список добавляется новый `li` с текстом`"Элемент X"`, где X — порядковый номер.По клику `"Удалить"` удаляется последний элемент списка.

const list = document.createElement("ul");
const btnAdd = document.createElement("button");
const btnDel = document.createElement("button");
btnAdd.textContent = "Добавить";
btnDel.textContent = "Удалить";
document.body.append(list);
list.insertAdjacentElement("beforebegin", btnAdd);
list.insertAdjacentElement("beforebegin", btnDel);
let calc = 0;
btnAdd.addEventListener("click", () => {
  const elemLi = document.createElement("li");
  elemLi.textContent = "Элемент " + calc;
  list.appendChild(elemLi);
  calc++;
});

btnDel.addEventListener("click", () => {
  if (calc != 0) {
    list.lastElementChild.remove();
    calc--;
  }
});

// Создай список(`ul > li`).При клике на `li` он становится синим, а все остальные возвращаются к стандартному цвету.

function paintingElementBlue(e) {
  const elementsLi = document.querySelectorAll("ul li");
  for (let elem of elementsLi) {
    elem.style.backgroundColor = "inherit";
  }
  e.target.style.backgroundColor = "blue";
}

const list = document.createElement("ul");
for (let i = 0; i <= 5; i++) {
  const elem = document.createElement("li");
  elem.textContent = "Элемент " + i;
  elem.style.cursor = "pointer";
  elem.addEventListener("click", (e) => paintingElementBlue(e));
  list.appendChild(elem);
}
document.body.append(list);

// Создай функцию `createProductCard(product)`, которая принимает объект `product` с полями `name`, `price`, `available`. Функция должна создать карточку товара (`div`), в которой название товара (`h2`), цена (`p`), и статус наличия (`p`, где текст "В наличии" или "Нет в наличии" в зависимости от `available`). Добавь карточку в `body`.
// Используй тернарный оператор для отображения статуса наличия.

// const product = {
//   name: "Ноутбук",
//   price: 75000,
//   available: true
// };

// Создай список (`ul`), в котором будет 5 элементов (`li`). Добавь этим элементам классы `odd` (нечётные) и `even` (чётные). Используй `style` для изменения цветов: чётные элементы должны быть синими, нечётные — зелёными.

// На странице есть 3 кнопки с классами `.btn`. Напиши скрипт, который получит все кнопки (`document.querySelectorAll`), а затем выведет в консоль текст каждой кнопки с помощью метода массива.

// Создай `div` с `id="clickBox"` размером `100x100px`, сделай его красным. Добавь обработчик события `click`, который при каждом нажатии меняет цвет (`backgroundColor`) на случайный.
// - Используй `Math.random()` для генерации случайного цвета.
// - Используй логические операторы, чтобы проверять текущий цвет перед сменой.

// Создай поле ввода (`input type="text"`) и кнопку (`button`). При вводе текста в поле и нажатии на кнопку текст должен добавляться в массив `messages`, а затем отображаться в `ul`.
// - Используй `push()` для добавления в массив.
// - Используй `addEventListener()` для обработки клика и ввода.
// - Используй `forEach()` для рендера списка.

// Создай кнопку "Проверить устройство", при нажатии которой будет анализироваться ширина окна (window.innerWidth):
// Если ширина меньше 576px — вывести "Мобильное устройство".
// От 576px до 1024px — "Планшет".
// Больше 1024px — "Десктоп".
// Дополнительно:
// Добавь событие resize, чтобы при изменении размера окна результат обновлялся.

const btnCheckScreen = document.createElement("button");
const infoBlock = document.createElement("div");
btnCheckScreen.textContent = "Проверить устройство";

function checkScreen(width) {
  let whichScreen = "";
  if (width < 576) {
    whichScreen = "Мобильное устройство";
  } else if (width <= 1024) {
    whichScreen = "Планшет";
  } else {
    whichScreen = "Десктоп";
  }
  return whichScreen;
}

document.body.append(btnCheckScreen);
btnCheckScreen.addEventListener("click", () => {
  infoBlock.textContent = checkScreen(window.innerWidth);
  btnCheckScreen.insertAdjacentElement("afterend", infoBlock);
});

window.addEventListener("resize", () => {
  infoBlock.textContent = checkScreen(window.innerWidth);
});

// Добавь поле ввода (или prompt) и кнопку "Проверить". Пользователь вводит название товара.
// Если товар есть и available === true — вывести "Товар в наличии"
// Если available === false — "Товар временно отсутствует"
// Если товара нет в массиве — "Такого товара нет"

const products = [
  { name: "Ноутбук", available: true },
  { name: "Смартфон", available: false },
  { name: "Наушники", available: true },
];

const input = document.createElement("input");
const infoGoods = document.createElement("span");
document.body.append(input);
input.insertAdjacentElement("afterend", infoGoods);

input.addEventListener("input", (e) => {
  let userQuery = String(e.target.value.trim()).toLocaleLowerCase();
  if (userQuery === "") {
    infoGoods.textContent = "";
    return;
  }

  const product = products.find((prod) =>
    prod.name.toLocaleLowerCase().includes(userQuery)
  );

  if (product) {
    infoGoods.textContent = product.available
      ? "Товар в наличии"
      : "Товар временно отсутствует";
  } else {
    infoGoods.textContent = "Такого товара нет";
  }
});

// Создай массив чисел const numbers = [10, 5, 30, 8, 20].
// "Оставить четные" — оставляет только четные числа и выводит их.
// "Отсортировать по возрастанию" — сортирует массив и выводит его.
