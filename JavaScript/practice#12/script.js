//  1. Работа с формами
// Задача 1:  
// Создай HTML-форму с полями: имя, email, пароль и кнопкой "Отправить".  
// При отправке формы выведи все введённые данные в консоль в виде объекта.

// Задача 2:  
// Сделай так, чтобы кнопка "Отправить" была неактивна, пока не заполнены все поля формы.

// Задача 3:  
// Добавь валидацию email: если формат неправильный — покажи сообщение под полем.



//  2. События элементов формы
// Задача 1:  
// Выводи в консоль каждый введённый символ в поле "Имя" (событие `input`).

// Задача 2:  
// Изменяй цвет рамки поля в зависимости от фокуса (например, зелёная при `focus`, серая при `blur`).

// Задача 3:  
// Добавь `checkbox` "Показать пароль" — при его активации делай поле пароля видимым (`type="text"`).



//  3. Работа с атрибутами
// Задача 1:  
// Создай кнопку, при клике на которую устанавливается атрибут `disabled` на поле ввода и обратно — убирается.

// Задача 2:  
// Создай кнопку, при клике на которую добавляется атрибут `placeholder` со значением "Введите текст..." к пустому полю.

// Задача 3:  
// Проверяй наличие атрибута `required` у полей формы и выводи список обязательных полей.



// 4. Работа с data - атрибутами
// Задача 1:  
// Сделай список(`ul`) с элементами(`li`), у которых есть`data-price`.При клике на элемент — выводи его цену.

//   Задача 2:  
// Сделай кнопки с `data-color="red"` и`data-color="blue"`.При клике на кнопку — меняй цвет фона страницы в соответствии с`data-color`.

//   Задача 3:  
// Создай таблицу с товарами и укажи каждому строкой`data-category`.Сделай фильтр, который показывает только товары нужной категории.




//   Задача 5: Многостраничная форма(step form)
// Создай форму из 3 шагов:
// 1. Шаг 1 — Имя и Email
// 2. Шаг 2 — Пароль и подтверждение пароля
// 3. Шаг 3 — Выбор интересов(чекбоксы)
// Пользователь не может перейти к следующему шагу, пока текущий шаг не заполнен корректно.На последнем шаге показывай сводку всех введённых данных.


// Задача 6: Динамическое добавление полей
// Сделай форму с возможностью добавления нескольких полей "Телефон".При нажатии на "+ Добавить номер" появляется ещё одно поле.  
// Поля можно также удалять.  
// При отправке — собираются все введённые номера в массив и выводятся в консоль.


// Задача 7: Автозаполнение формы по кнопке "Заполнить демо-данными"
// Добавь кнопку, которая при клике автоматически заполняет форму демо - данными(например, имя, email, и т.д.).
// Используй`form.elements` или `querySelectorAll` для удобного доступа к полям.


// Задача 8: Pasha События клавиатуры
// Отслеживай, какие клавиши нажимает пользователь в поле ввода (keydown).
// Сделай горячую клавишу (например, при нажатии Ctrl + S — появляется сообщение "Сохранено").


const userText = document.querySelector('#keyboardInput')
const infoBox = document.querySelector('#pressedKeyInfo')
let prevBtn = '', currBtn = ''
userText.addEventListener('keydown', (event)=>{
  prevBtn = currBtn.toLocaleLowerCase()
  currBtn = event.key.toLocaleLowerCase()
  infoBox.textContent = `Нажата клавиша ${currBtn}`
  if(prevBtn ==='control' && currBtn === 's'){
    event.preventDefault();
    alert('Сохранено')
  }
})


// Задача 9: События мыши
// Сделай эффект "наведения": при наведении мыши на блок он меняет цвет, при уходе — возвращается.
const block = document.querySelector("#hoverBlock")
const initialColor = block.style.backgroundColor;
block.addEventListener("mouseenter",() => {
    block.computedStyleMap.backgroundColor = "yellow"
})

block.addEventListener("mouseleave", () => {
    block.style.backgroundColor = initialColor;
})

// Задача 10: Слава Метод addEventListener
// Используй addEventListener, чтобы подписаться на событие click для кнопки.
// Сделай кнопку, которая после клика удаляет свой обработчик.
// Выводи информацию о событие в .eventInfo (текст из кнопки).
const btn = document.querySelector("#clickBtn")
const eventInfo = document.querySelector(".eventInfo")
function clk(event) {
  eventInfo.textContent = `Жмяк -"${event.target.textContent}"жмяк`
  button.removeEventListener("click", clk)
}
button.addEventListener("click", clk)

// Задача 11:моя тогда  Создание и добавление элементов на страницу
// Реализуй добавление новой задачи в список дел (To-Do) при нажатии на кнопку "Добавить".
// Сделай форму, при отправке которой на страницу будет добавляться карточка с введёнными данными.



const input = document.getElementById('todoInput');// берем элемы по ай ди
const button = document.getElementById('addTodoBtn');
const list = document.getElementById('todoList');

    button.addEventListener('click', () => {//вешаем обработчик на клик
      const task = input.value.trim(); // убираем пробелы
      if (task) {
        const listItem = document.createElement('li'); // создаем список
        listItem.textContent = task; // равняем что то что было введено в форму = текст контент
        list.appendChild(listItem);  // пушим в конец боди
        input.value = ''; // чистим поле ввода формы
      } else {
        alert('Пожалуйста, введите задачу!');// при нажатии на кнопку при пустойформе просит все же ее заполнить
      }
    });
// Задача 12: Вывод объектов
const users = [
  { name: 'Иван', age: 28,id:1 },
  { name: 'Мария', age: 22, id: 2 },
];

// Выведи каждого пользователя в виде карточки с именем и возрастом. (div c классом user-card, внутри которог `<strong>${user.name}</strong> — ${user.age} лет`);
// Выводи только тех пользователей, у которых возраст больше 25.
// Для каждого элемента массива создавай блок с кнопкой "Удалить", по нажатию — элемент удаляется из DOM и массива.

users.forEach((user)=>{
  const cardUser = document.createElement('div')
  cardUser.classList.add('user-card')
  cardUser.innerHTML = `<strong>${user.name}</strong> — ${user.age} лет`

  const deleteUser = document.createElement('button')
  deleteUser.textContent = 'Удалить пользователя'
  cardUser.append(deleteUser)

  deleteUser.addEventListener('click', ()=>{
    cardUser.remove()
  })
  
  document.body.append(cardUser)
})




// Задача 13: моя Вывод объектов
const users1 = [
  { name: 'Иван', age: 28 },
  { name: 'Мария', age: 22 },
];

// Выведи каждого пользователя в виде карточки с именем и возрастом.  (div c классом user-card, внутри которого 
// `<strong>${user.name}</strong> — ${user.age} лет`);
// Добавь кнопку "Сортировать по алфавиту", чтобы отсортировать и заново отобразить данные.


// Задача 14: Вывод объектов
const users2 = [
  { name: 'Иван', age: 28 },
  { name: 'Мария', age: 22 },
];
// Выведи каждого пользователя в виде карточки с именем и возрастом. (div c классом user-card, внутри которог `<strong>${user.name}</strong> — ${user.age} лет`);
// Сделай форму для добавления новых объектов в массив и автоматического вывода обновлённого списка.

