// // 1.  ser Напиши код, который изменит document.title на "Учимся работать с DOM".
document.title="Учимся работать с DOM"

// // 2. Slava Создай строку с HTML - разметкой и вставь её в document.body с помощьюinnerHTML.Объясни, почемуinnerHTML может быть небезопасным.
// const hString = "<h1>Hello, everybody!<h1>"

// document.body.innerHTML = hString

// // 3. Pavel Используя window.navigator, получи и выведи в консоль:
// // - Название браузера
// //   - Версию браузера
// //     - Операционную систему пользователя

// console.log('Browser name - ', window.navigator.appCodeName)
// console.log('Browser version - ', window.navigator.userAgent)
// console.log('OS - ', window.navigator.userAgentData.platform)



// // 4.вит)))) Выведи в консоль текущий URL страницы, используяwindow.location.href.
// console.log(window.location.href);

// 5. Создай ссылку в document.body, которая перенаправляет пользователя на "https://example.com"


// // 1. Slava Найди элемент с id="header" и выведи его текстовое содержимое.
// const elem = document.getElementById("header")
// if (elem) {
// return elem.textContent
// } else {
// return "element id='header' not found"
// }
// // 2.вит Выведи в консоль список всех элементов с классом "item" 


// console.log(documents.getElementByClassName("item"))


// // 3. ser Найди все<p> - теги на странице и измени их текст на "Новый текст" 
//  const p = document.querySelectorAll('p')
//  p.forEach((paragraf)=>{
//      paragraf.inerrText="Новый текст" 
//  })


// // 4. вит Найди первый элемент с классом "active" и добавь емуbackground-color: yellow.
//  const active = document.querySelector(".active")
// if (active){
// active.style.backgroundColor= "желтый"

// // 5. Найди все <li> внутри <ul> и добавь к каждому атрибут data-index с его порядковым номером.

// const listLI = document.querySelectorAll('ul li')

// listLI.forEach((li, ind)=>{
//     li.setAttribute('data-index', ind)
    
    
//     li['data-index'] = ind
// })


//  slava 1. Добавление списка в DOM 
// const names = ["Алиса", "Боб", "Чарли", "Дэйв", "Эмма"];
// Создай <ul> и добавь в него<li> - элементы с именами из массива, используя document.createElement и appendChild.

// const ulElem = document.createElement("ul")
// names.forEach(name => {
//     const liElem = document.createElement("li")
//     liElem.textContent = name
//     ulElem.append(liElem)
// })

// document.body.append(ulElem)

//  ser 2. Генерация карточек товаров 
//  Дан массив объектов с товарами:
// const products = [
//   { name: "Ноутбук", price: 50000 },
//   { name: "Смартфон", price: 30000 },
//   { name: "Планшет", price: 20000 }
// ];
// Создай <div class="products"> и добавь в него карточки товаров в виде:
// <div class="product">
//   <h2>Ноутбук</h2>
//   <p>Цена: 50000</p>
// </div>

// const div= document.createElement('div');
// div.classlist.add("products")
// const tovar= document.querySelector('.products')

// products.forEach(product => {
//     div.innerHTML += `<div class="product">
//       <h2>${product.name}</h2>
//        <p>Цена: ${product.price}</p>
//      </div>`
// })



// 3.ну я попробую... Таблица из массива объектов 
// Дан массив данных о пользователях:
// const users = [
//   { id: 1, name: "Иван", age: 25 },
//   { id: 2, name: "Мария", age: 30 },
//   { id: 3, name: "Андрей", age: 28 }
// ];

// Создай таблицу <table>, в которой будут заголовки  ID, Имя, Возраст, и строки с данными пользователей.
// нужно создать див в которой будут заголовки  ID, Имя, Возраст, и строки с данными пользователей.
//  let container = document.createElement("div");
//  let mass = ["ID", "Имя", "Возраст","Cтрока с данными пользователя"]
// mass.forEach(HText=>{
// const HDiv= document.createElement("div")
// HDiv.style.fontWeight= "bold"}


// users.forEach(user => {
//     const card = `
//     <div>
//     <h4>Имя: ${user.name}</h4>
//     <p>Возраст: ${user.age}</p>
//     </div>
//     `
//     container.innerHTML += card;
// })

// document.body.append(container)


// 4. Паша Галерея изображений 
// Дан массив ссылок на изображения:
// const images = [
//   "image1.jpg",
//   "image2.jpg",
//   "image3.jpg"
// ];

// Создай < div class="gallery">, добавь в него < img > - элементы с src из массива.


// const wrapperGallary = document.createElement('div')
// wrapperGallary.classList.add('gallary')
// document.body.append(wrapperGallary)

// images.forEach(img=>{>
//     wrapperGallary.innerHTML += `<img src=${img} alt='image'/>`
// })


// 5.slava Отображение списка задач 
// Дан массив задач:
// const tasks = [
//   { text: "Сделать зарядку", completed: false },
//   { text: "Выучить JavaScript", completed: true },
//   { text: "Прочитать книгу", completed: false }
// ];
// Создай <ul class="todo-list">, добавь в него <li> с текстом задачи.
// Если completed: true, добавь класс"done", чтобы стилизовать выполненные задачи.

// const ulElement = document.createElement("ul")
// ulElement.classList.add("todo-list")
// tasks.forEach(task => {
// const liElement = document.createElement("li");
//     liElement.textContent = task.text;
//     if (task.completed) {
//         liElement.classList.add("done")
// }
//     ulElement.append(liElement)
// })
// document.body.append(ulElement)

// 6. Добавление комментариев 
// Дан массив комментариев:
// const comments = [
//   { author: "Алиса", text: "Отличная статья!" },
//   { author: "Боб", text: "Спасибо за информацию." },
//   { author: "Чарли", text: "Очень полезно!" }
// ];

// Создай <div class="comments"> и добавь в него комментарии в виде:
// <div class="comment" >
//   <strong>Алиса</strong>
//   <p>Отличная статья!</p>
// </>


// 7. Паша Создание списка ссылок 
// Дан массив ссылок:
// const links = [
//   { text: "Google", url: "https://google.com" },
//   { text: "YouTube", url: "https://youtube.com" },
//   { text: "GitHub", url: "https://github.com" }
// ];

// Создай <nav> и добавь в него <a> - ссылки с текстом и href из массива.


// links.forEach(link=>{
//     document.body.innerHTML += `<a style="display: block" href=${link.url}>${link.text}</a>`
// })

