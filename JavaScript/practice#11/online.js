// Слава №1 Категоризация пользователей
// 1. Дан массив пользователей с полями: `name`, `age`, `isActive`.
// 2. Раздели пользователей на 2 массива: активные и неактивные(по`isActive`).
// 3. В активных пользователях оставь только тех, у кого возраст больше 18.

const users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 17, isActive: true },
    { name: "Charlie", age: 30, isActive: false },
    { name: "Diana", age: 20, isActive: true },
    { name: "Eve", age: 15, isActive: false }
  ];
  
  const result = users.reduce((acc, user)=> {
      if (user.isActive) {
          if(user.age > 18) {
              acc.activeUsers.push(user)
          }
      }else {
          acc.inactiveUsers.push(user)
      }
      return acc
  }, {
    activeUsers: [],  
    inactiveUsers: []
  })
  
  
  // №2.  ser Фильтрация товаров по скидке
  // 1. Дан массив объектов`products`, каждый из которых имеет`name`, `price`, `discount`.
  // 2. Отфильтруй товары, у которых скидка больше 10 % и цена после скидки меньше 100.
  // 3. Для отфильтрованных товаров рассчитай финальную цену и добавь новое свойство`finalPrice`.
  
  const products = [
    { name: "Shirt", price: 120, discount: 15 },
    { name: "Pants", price: 200, discount: 5 },
    { name: "Socks", price: 50, discount: 20 },
    { name: "Shoes", price: 90, discount: 12 },
    { name: "Hat", price: 80, discount: 8 }
  ];
  (p.price * (1-p.discount /100))
  const product = products.map()
  const prod = products.filter(elem => elem.discount > 10 && (elem.price * (1 - elem.discount /100)) < 100).map( elem => {
      elem.finalPrice = (elem.price * (1-elem.discount /100)).toFixed(2)
      return elem
  })
  
  // №3. Pasha Обработка списка задач
  // 1. Есть объект `taskManager` с массивом задач(`tasks`), каждая из которых имеет`id`, `title`, `completed`.
  // 2. Добавь метод `toggleTask(id)` — он меняет `completed` на противоположное.
  // 3. Добавь метод`deleteTask(id)`, который удаляет задачу по`id`(используй`delete`).
  // 4. Используй`in`, чтобы проверять наличие свойства перед удалением.
  
  const taskManager = {
      tasks: [
        { id: 1, title: "Buy groceries", completed: false },
        { id: 2, title: "Clean room", completed: true },
        { id: 3, title: "Write report", completed: false }
      ],
      toggleTask(id) {
          const changedElem = this.tasks.find(task=>task.id == id)
          changedElem.completed = !changedElem.completed
      },
      deleteTask(id) {
          const index = this.tasks.findIndex(task=> task.id == id)
          this.tasks.splice(index, 1)
          if('completed' in delElem){
              delete delElem
          }
      }
    };
  
  // №4. Расчёт по тарифу
  // 1. Напиши функцию`calculatePayment(tariff, minutes = 0)`, которая по `tariff` возвращает итоговую цену:
  // - `"basic"` — 5 за минуту;
  // - `"premium"` — 3 за минуту + фикс. 100;
  // - `"vip"` — первые 50 мин бесплатно, далее по 2.
  // 2. Если передано что - то кроме `"basic" | "premium" | "vip"` — вернуть`"Invalid tariff"`.
  // 3. Используй`switch`, параметры по умолчанию, логические операторы.
  function calculatePayment(tariff, min = 0){
      switch (tariff) {
      case "basic":
          return min * 5
      case "premium":
          return min * 3 + 100
      case "vip":
          return min > 50 ? (min- 50)*2:0
      default:
          return "неизвестный тариф"
  }
  }
  // Примеры вызова:
  calculatePayment("basic", 10);    // 50
  calculatePayment("premium", 10);  // 130
  calculatePayment("vip", 70);      // 40
  calculatePayment("standard", 5);  // "Invalid tariff"
  
  // №1 Слава Отобразить список пользователей:
  // const users = [
  //   { id: 1, name: 'Алиса' },
  //   { id: 2, name: 'Боб' },
  //   { id: 3, name: 'Клара' }
  // ];
  // При клике на <li> в списке выдели его(добавь класс.active) и сними с предыдущего.
  const userList = document.querySelector("#userList")
  userList.innerHTML = users.map( user => `<li>${user.name}</li>`).join("")
  userList.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
          document.querySelector(".active")?.classList.remove("active")
          userList.querySelectorAll('li').forEach(li => li.classList.remove("active"))
          event.target.classList.add("active")
      }
  })
  
  // №2 Pasha Создай форму с полем name и кнопкой "Добавить". При отправке добавляй пользователя в массив и рендерь его в список.
  // HTML:
  // `
  // <form id="user-form" name="userForm">
  //   <input type="text" name="user" placeholder="Имя пользователя" />
  //   <button type="submit">Добавить</button>
  // </form>
  // <ul id="user-list"></ul>
  
  // `
  
  const form = document.forms.userForm
  const usersList = document.querySelector('#user-list')
  const users = []
  
  form.addEventListener('submit',(event)=>{
      event.preventDefault()
      const inputValue = form.user.value
      users.push(inputValue)
      usersList.innerHTML = ''
      if(users.length > 0){
          users.forEach(user=>{
              const li = document.createElement('li')
              li.textContent = user 
              usersList.appendChild(li)
          })
      }
      form.name.value = ''
  })
  
  
  // №3   Есть массив книг.
  // const books = [
  //   { title: '1984', author: 'Джордж Оруэлл' },
  //   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков' },
  //   { title: 'Преступление и наказание', author: 'Фёдор Достоевский' },
  //   { title: 'Война и мир', author: 'Лев Толстой' },
  //   { title: 'Три товарища', author: 'Эрих Мария Ремарк' }
  // ];
  // При вводе фильтруй книги по названию и отображай результат 
  
  const searchInput = document.querySelector('#searchInput');
  const container = document.querySelector('#bookList')
  searchInput.addEventListener('input',(e)=>{
      const book=searchInput.value.toLowerCase()
    const filtedBooks = books.filter((b) => b.title.toLowerCase().includes(book))
    container.innerHTML = ''
    filtedBooks.forEach(book=>{
              container.innerHTML += `
              <li>
              <div class="book-title">${book.title}</div>
               <div class="book-author">Автор: ${book.author}</div>
              </li> */
                  `
          })   
  })
  
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
  
  
  const search = document.getelementbyid("searchInput")
  const list = document.getelementbyid("productList")
  
  function dispFindProd(productsItems){
      productsItems.forEach(prod=>{
          let li=document.createElement("li")
          list.innerHTML = ''
          li.textcontent=pproductsItems.name
          list.appendchild(li)
      })
  }
  // copilot
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = productsItems.filter(product =>
          product.name.toLowerCase().includes(query)
        );
        dispFindProd(filteredProducts);
      });
  
  
  // №1 Pasha Создание и добавление элементов на страницу
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
  
  
  function generateListUsers(users){
      const listUsers = document.querySelector('ul')
      users.forEach(user=>{
          const li = document.createElement('li')
          li.textContent = `Имя: ${user.name}, Возраст: ${user.age}`
          listUsers.appendChild(li)
      })
  }
  
  // №2.   Работа с CSS
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
  
  // №3. Метод`addEventListener`
  // - Задача: Напишите код, который выводит на экран информацию о нажатых клавишах при помощи массива с названиями клавиш.
  // - Массив:
  // const keys = ['a', 'b', 'c', 'Enter', 'Backspace'];
  // - Используйте`addEventListener` для отслеживания нажатий клавиш.
  // - Когда клавиша из массива нажата, отображайте на странице сообщение с названием клавиши.
  // - Добавьте проверку на наличие клавиши в массиве, прежде чем выводить сообщение.
  
  // №4. Pasha Делегирование событий
  // Напишите код, который позволяет удалять элементы из списка при клике на кнопки внутри этих элементов.Используйте делегирование событий для обработки кликов.
  // - Массив данных:
  // const items = ['Item 1', 'Item 2', 'Item 3'];
  // - Для каждого элемента создайте `<li>` с текстом и кнопкой "Удалить".
  // - Используйте делегирование событий, чтобы обработать клики по кнопкам и удалить соответствующий элемент списка.
  
  
  
  const listItems = document.querySelector('ul')
  
  items.forEach(item=>{
      const li = document.createElement('li')
      const delBtn = document.createElement('button')
      delBtn.textContent = 'Удалить'
      li.textContent = item
      li.insertAdjacentElement('beforeend', delBtn)
      listItems.appendChild(li)
  })
  
  listItems.addEventListener('click', (event)=>{
      if(event.target.tagName === 'BUTTON') {
          const elemForDel = event.target.parentElement
          elemForDel.remove()
      }
  })
  