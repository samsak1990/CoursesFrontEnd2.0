// №1 Категоризация пользователей
// 1. Дан массив пользователей с полями: `name`, `age`, `isActive`.
// 2. Раздели пользователей на 2 массива: активные и неактивные(по`isActive`).
// 3. В активных пользователях оставь только тех, у кого возраст больше 18.

const users = [
  { name: "Alice", age: 25, isActive: true },
  { name: "Bob", age: 17, isActive: true },
  { name: "Charlie", age: 30, isActive: false },
  { name: "Diana", age: 20, isActive: true },
  { name: "Eve", age: 15, isActive: false },
];

// №2. Фильтрация товаров по скидке
// 1. Дан массив объектов`products`, каждый из которых имеет`name`, `price`, `discount`.
// 2. Отфильтруй товары, у которых скидка больше 10 % и цена после скидки меньше 100.
// 3. Для отфильтрованных товаров рассчитай финальную цену и добавь новое свойство`finalPrice`.

const products = [
  { name: "Shirt", price: 120, discount: 15 },
  { name: "Pants", price: 200, discount: 5 },
  { name: "Socks", price: 50, discount: 20 },
  { name: "Shoes", price: 90, discount: 12 },
  { name: "Hat", price: 80, discount: 8 },
];

// №3. Обработка списка задач
// 1. Есть объект `taskManager` с массивом задач(`tasks`), каждая из которых имеет`id`, `title`, `completed`.
// 2. Добавь метод `toggleTask(id)` — он меняет `completed` на противоположное.
// 3. Добавь метод`deleteTask(id)`, который удаляет задачу по`id`(используй`delete`).
// 4. Используй`in`, чтобы проверять наличие свойства перед удалением.

const taskManager = {
  tasks: [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Clean room", completed: true },
    { id: 3, title: "Write report", completed: false },
  ],
  toggleTask(id) {
    // реализация
  },
  deleteTask(id) {
    // реализация
  },
};

// №4. Расчёт по тарифу
// 1. Напиши функцию`calculatePayment(tariff, minutes = 0)`, которая по `tariff` возвращает итоговую цену:
// - `"basic"` — 5 за минуту;
// - `"premium"` — 3 за минуту + фикс. 100;
// - `"vip"` — первые 50 мин бесплатно, далее по 2.
// 2. Если передано что - то кроме `"basic" | "premium" | "vip"` — вернуть`"Invalid tariff"`.
// 3. Используй`switch`, параметры по умолчанию, логические операторы.

// Примеры вызова:
// calculatePayment("basic", 10); // 50
// calculatePayment("premium", 10); // 130
// calculatePayment("vip", 70); // 40
// calculatePayment("standard", 5); // "Invalid tariff"

//! №5. Анализ текста
// 1. Прими строку и:
// - Разбей её на слова по пробелам.
// - Удали пустые строки и короткие слова(длиной ≤ 2).
// - Подсчитай количество уникальных слов.
// 2. Верни объект вида`{ totalWords, uniqueWords, longestWord }`.

const inputText =
  "JavaScript is a powerful language, and it is used everywhere in web development.";

function formatAndCheckString(str) {
  const separatedArray = str.split(" ").filter((word) => {
    word.length > 2 ? word : false;
  });
  const uniqueWords = [...new Set(separatedArray)];
  const longestWord = uniqueWords.reduce(
    (acc, word) => {
      if (acc.length < word.length) {
        acc.word = word;
        acc.length = word.length;
        return acc;
      } else return acc;
    },
    { word: "", length: 0 }
  );
  return {
    totalWords: separatedArray.length,
    uniqueWords: uniqueWords.length,
    longestWord: longestWord,
  };
}

// console.log(formatAndCheckString(inputText));

//! №6. Анализ оценок студентов
// 1. Есть массив студентов: `{ name, grades: [числа] }`.
// 2. Для каждого студента:
// - Посчитай среднюю оценку.
//    - Если средняя > 4.5 — добавь свойство`honorStudent: true`.
// 3. Если у студента есть хотя бы одна двойка — добавь`warning: true`.

const students = [
  { name: "Anna", grades: [5, 4, 5, 5] },
  { name: "Mike", grades: [3, 2, 4, 3] },
  { name: "John", grades: [5, 5, 5, 5] },
  { name: "Sasha", grades: [2, 4, 3, 5] },
];

function checkStudents(students) {
  const newStudentsList = students.map((person) => {
    const averageScore =
      person.grades.reduce((acc, grade) => (acc += grade), 0) /
      person.grades.length;
    if (p)
      return {
        ...person,
        averageScore,
      };
  });
  return newStudentsList;
}

console.log(checkStudents(students));

//! №7. Список покупок
// 1. Дан массив товаров`{ name, quantity, price }`.
// 2. Вычисли:
// - Общую сумму.
// - Кол - во уникальных товаров (Пропусти товары с`quantity === 0`).
// 3. Верни итог в виде объекта`{ totalPrice, itemCount }`.

const shoppingList = [
  { name: "Bread", quantity: 2, price: 30 },
  { name: "Milk", quantity: 0, price: 50 },
  { name: "Eggs", quantity: 10, price: 6 },
  { name: "Apples", quantity: 5, price: 10 },
];

//! № 8. Объект конфигурации
// 1. Создай объект`config`, в котором:
// - Есть свойства по умолчанию: `theme`, `language`, `showSidebar`.
// 2. Добавь метод `update(key, value)`:
// - Обновляет значение свойства.
//    - Если свойства не существует — выводит предупреждение.
// 3. Добавь метод `reset()` — удаляет все свойства, кроме`theme`.

const config = {
  theme: "light",
  language: "en",
  showSidebar: true,
  update(key, value) {
    // реализация
  },
  reset() {
    // реализация
  },
};

// №1 Создание и добавление элементов на страницу
// Напишите функцию, которая генерирует список пользователей из массива объектов.Каждый элемент списка должен быть добавлен в`<ul>`.
// - Массив пользователей:
// const users = [
//   { name: 'John Doe', age: 30 },
//   { name: 'Jane Smith', age: 25 },
//   { name: 'Sam Johnson', age: 35 }
// ];
// - Создайте элемент списка(`<li>`) для каждого пользователя.
// - Внутри каждого списка отображайте имя и возраст пользователя.
// - Добавьте элементы в`<ul>`.

//! №2. Работа с CSS
// - Напишите код, который добавляет на страницу блоки карточек товара с использованием массива данных и применяет CSS стили для каждого карточного блока.
// - Массив товаров:
// const products = [
//   { name: 'Laptop', price: 1000, image: 'laptop.jpg' },
//   { name: 'Smartphone', price: 500, image: 'phone.jpg' },
//   { name: 'Headphones', price: 150, image: 'headphones.jpg' }
// ];
// - Создайте для каждого товара карточку с изображением, названием и ценой(innerHTML).
// - Примените стиль с помощью CSS, чтобы карточки располагались в ряд и имели отступы.
// - Стиль должен включать изменение фона при наведении.

//! №3. Метод`addEventListener`
// - Задача: Напишите код, который выводит на экран информацию о нажатых клавишах при помощи массива с названиями клавиш.
// - Массив:
// const keys = ['a', 'b', 'c', 'Enter', 'Backspace'];
// - Используйте`addEventListener` для отслеживания нажатий клавиш.
// - Когда клавиша из массива нажата, отображайте на странице сообщение с названием клавиши.
// - Добавьте проверку на наличие клавиши в массиве, прежде чем выводить сообщение.

// №4. Делегирование событий
// Напишите код, который позволяет удалять элементы из списка при клике на кнопки внутри этих элементов.Используйте делегирование событий для обработки кликов.
// - Массив данных:
// const items = ['Item 1', 'Item 2', 'Item 3'];
// - Для каждого элемента создайте `<li>` с текстом и кнопкой "Удалить".
// - Используйте делегирование событий, чтобы обработать клики по кнопкам и удалить соответствующий элемент списка.

//! №5. Работа с формами
// Форма для ввода данных о книге, где после отправки формы данные книги будут отображаться в списке на странице.
// `
//     <h1>Форма ввода данных о книге</h1>

//     <!-- Форма для ввода данных о книге -->
//     <form id="bookForm">
//       <label for="bookTitle">Название книги:</label>
//       <input type="text" id="bookTitle" name="bookTitle" required />

//       <label for="author">Автор:</label>
//       <input type="text" id="author" name="author" required />

//       <label for="year">Год издания:</label>
//       <input type="number" id="year" name="year" required />

//       <button type="submit">Добавить книгу</button>
//     </form>

//     <h2>Список книг:</h2>
//     <ul id="bookList">
//       <!-- Здесь будут отображаться книги -->
//     </ul>
// `
//   - Массив:
// const books = [];
// - Требования:
// - При отправке формы данные книги должны добавляться в массив.
// - На странице должен выводиться список книг с их данными, обновляясь каждый раз после добавления новой книги.
// - Используйте обработчик `submit` для сбора данных и отображения их в списке.

//! №6 Валидация данных формы
// Напишите форму для ввода информации о пользователе(имя, email).Добавьте валидацию, чтобы при неправильном введении данных отображались ошибки.
// HTML:
// `
// <h2>Регистрация пользователя</h2>

// <form id="userForm" novalidate>
//   <label for="name">Имя:</label>
//   <input type="text" id="name" required>
//   <div class="error" id="nameError"></div>

//   <label for="email">Email:</label>
//   <input type="email" id="email" required>
//   <div class="error" id="emailError"></div>

//   <button type="submit">Добавить пользователя</button>
// </form>

// <h3>Список пользователей:</h3>
// <ul id="userList"></ul>
// `

// Требования:
// Если форма заполнена неверно, отображайте сообщение об ошибке под полем ввода.
// Если данные введены правильно, добавляйте пользователя в список на странице.
// После отправки формы, данные должны быть отображены ниже формы.

//! №7 Интерактивный список с галочками
// Напишите код, который генерирует список задач с возможностью отмечать их галочками. Когда задача отмечена, она должна отображаться как выполненная.
// const tasks = ['Buy groceries', 'Clean the house', 'Read a book'];
// Каждая задача должна быть представлена как элемент списка с чекбоксом.
// При изменении состояния чекбокса, задача должна изменять свой стиль (например, зачеркиваться).

//! №7 Список комментариев с лайками
// Есть форма для добавления комментария(автор, текст):
// `
// <h2>Добавить комментарий</h2>

//   <form id="commentForm">
//     <label for="author">Автор:</label>
//     <input type="text" id="author" required>

//     <label for="text">Комментарий:</label>
//     <textarea id="text" rows="3" required></textarea>

//     <button type="submit">Отправить</button>
//   </form>

//   <h3>Комментарии:</h3>
//   <div id="commentsList"></div>
// `
// Все комментарии выводятся списком.
// У каждого комментария — кнопка "лайк"(увеличивает счётчик лайков).
// Использовать делегирование событий для лайков.

/////////////////////////////////

// №1 Отобразить список пользователей:
// const users = [
//   { id: 1, name: 'Алиса' },
//   { id: 2, name: 'Боб' },
//   { id: 3, name: 'Клара' }
// ];
// При клике на <li> в списке выдели его(добавь класс.active) и сними с предыдущего.

// №2 Создай форму с полем name и кнопкой "Добавить". При отправке добавляй пользователя в массив и рендерь его в список.
// HTML:
// `
// <form id="user-form">
//   <input type="text" name="name" placeholder="Имя пользователя" />
//   <button type="submit">Добавить</button>
// </form>
// <ul id="user-list"></ul>

// `

// №3 Есть массив книг.
// const books = [
//   { title: '1984', author: 'Джордж Оруэлл' },
//   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков' },
//   { title: 'Преступление и наказание', author: 'Фёдор Достоевский' },
//   { title: 'Война и мир', author: 'Лев Толстой' },
//   { title: 'Три товарища', author: 'Эрих Мария Ремарк' }
// ];
// При вводе фильтруй книги по названию и отображай результат
// /* <li>
// <div class="book-title">${book.title}</div>
// <div class="book-author">Автор: ${book.author}</div>
// </li> */

// HTML:
// `
//  <h2>Фильтр по названию книги</h2>
//   <input type="text" id="searchInput" placeholder="Введите название книги...">

//   <ul id="bookList"></ul>
// `

// №4
// При вводе текста фильтровать и отображать только подходящие товары.
// HTML:
// `
// <input type="text" id="searchInput" placeholder="Поиск товара...">
// <ul id="productList"></ul>
// `

// const productsItems = [
//   { name: 'Мышка' },
//   { name: 'Монитор' },
//   { name: 'Коврик для мыши' }
// ];
