// 1. Кнопка переключения темы  
// Создай кнопку с текстом "Переключить тему". При клике на нее добавляй/удаляй класс "dark-theme" у <body>,  
// изменяя фон и цвет текста с помощью CSS.  

const btnCngBg = document.querySelector('#toggle-theme')
btnCngBg.addEventListener('click', ()=>{
  document.body.classList.toggle('dark-theme')
})


// 2. Изменение текста по клику  
// Создай <p> с текстом "Нажми на меня". При клике на абзац меняй его текст на "Текст изменен!".  

const changeParagraph = document.querySelector('#change-text')
changeParagraph.addEventListener('click', ()=>{
  changeParagraph.textContent = 'Текст изменен!'
})

// 3. Раскрывающийся список  
// Создай <button> "Показать список" и <ul class="hidden"> с несколькими <li>.  
// При клике на кнопку список должен появляться/скрываться,  
// добавляя/удаляя класс "hidden" у <ul>.  

const showList = document.querySelector('#toggle-list')
const list = document.querySelector('#dropdown-list')

showList.addEventListener('click', ()=>{

  list.classList.toggle('hidden')
  if(showList.textContent === 'Показать список'){
    showList.textContent = 'Скрыть список'
  } else showList.textContent = 'Показать список'
})

// 4. Подсветка активного элемента списка  
// Создай <ul> с 5 <li>. При клике на любой <li> он получает класс "active",  
// при этом у других элементов этот класс удаляется.   

const highLightList = document.querySelector('#highlight-list')

highLightList.addEventListener('click', (e)=>{
  highLightList.querySelectorAll('.active').forEach(elem=>elem.classList.remove('active'))
  e.target.classList.add('active')
})

// 5. Динамическое изменение стиля  
// Создай <button> "Изменить цвет". При клике меняй цвет фона <body> на случайный.  

function getRandomColor() {
  const letters = '0123456789ABCDEF'; 
  let color = '#'; 
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; 
  }
  return color;
}

const btnCngBgRandom = document.querySelector('#change-color')
btnCngBgRandom.addEventListener('click', ()=>{
  document.body.style['background-color'] = getRandomColor()
})

// 6. Удаление элемента из списка  
// Создай <ul> с 5 <li> (карточка задачи). В каждый <li> добавь кнопку "Удалить".  
// При клике на кнопку соответствующий <li> должен удаляться из DOM.  
const tasks = [
  { text: "Сделать зарядку", completed: false },
  { text: "Выучить JavaScript", completed: true },
  { text: "Прочитать книгу", completed: false },
  { text: "Написать проект", completed: true },
  { text: "Позвонить другу", completed: false }
];

const tasksList = document.createElement('ul')
tasksList.classList.add('tasksList')
tasks.forEach(task =>{
  tasksList.innerHTML += `<li>${task.text} 
                            <button class='remove-task'>Удалить</button>
                          </li>`
})

tasksList.addEventListener('click', (e)=>{
  if(e.target.parentNode.nodeName === 'LI') {
    tasksList.removeChild(e.target.parentNode)
  }
  
})

document.body.append(tasksList)

// 7. Изменение размера блока  
// Создай <div class="resizable">, кнопку "+" и кнопку "-".  
// При клике на "+" увеличивай `width` и `height` на 10px, при клике на "-" уменьшай.  

const boxRes = document.querySelector('#resizable-box')
const plus = document.querySelector('#increase-size')
const minus = document.querySelector('#decrease-size')

plus.addEventListener('click', ()=>{
  const h = boxRes.offsetHeight
  const w = boxRes.offsetWidth
  boxRes.style.height = h + 10 +'px'
  boxRes.style.width = w + 10 +'px'
})

minus.addEventListener('click', ()=>{
  const h = boxRes.offsetHeight
  const w = boxRes.offsetWidth
  boxRes.style.height = h - 10 +'px'
  boxRes.style.width = w - 10 +'px'
})



// 8. Дан массив объектов с блогами. Нужно создать карточки с заголовком, описанием и кнопкой «Читать далее».
const blogs = [
  { title: "Как учить JavaScript?", description: "Полное руководство для начинающих.", link: "#js-guide" },
  { title: "CSS: секреты мастерства", description: "Глубокое изучение стилей и анимаций.", link: "#css-tips" },
  { title: "Алгоритмы для фронтенд-разработчиков", description: "Разбор сложных задач на простых примерах.", link: "#algorithms" }
];
// Карточка должна выглядеть так:
//<div class="blog-card">
//  <h2>Как учить JavaScript?</h2>
//  <p>Полное руководство для начинающих.</p>
//  <a href="#js-guide">Читать далее</a>
//</div>


const cardsBox = document.createElement('div')
cardsBox.classList.add('box-cards')
document.body.append(cardsBox)

blogs.forEach(blog=>{
  cardsBox.innerHTML += `<div class="blog-card">
                            <h2>${blog.title}</h2>
                            <p>${blog.description}</p>
                            <a href="${blog.link}">Читать далее</a>
                          </div>`
})



// 9. Дан массив отзывов. Нужно создать карточки с именем автора, его рейтингом (в звёздочках) и текстом отзыва.

const reviews = [
  { author: "Анна", rating: 5, text: "Отличный продукт! Очень довольна." },
  { author: "Максим", rating: 4, text: "Хороший товар, но есть небольшие недочёты." },
  { author: "Екатерина", rating: 3, text: "Ожидала большего, но в целом нормально." }
];
// Карточка должна выглядеть так:

// <div class="review-card">
//   <h2>Анна</h2>
//   <p>⭐⭐⭐⭐⭐</p>
//   <p>Отличный продукт! Очень довольна.</p>
// </div>

const boxFeedback = document.createElement('div')
boxFeedback.classList.add('feedback')
document.body.append(boxFeedback)


reviews.forEach(view => {
  boxFeedback.innerHTML += `<div class="review-card">
                              <h2>${view.author}</h2>
                              <p>${''.padStart(view.rating, '⭐')}</p>
                              <p>${view.text}</p>
                            </div>`
})

// 10. Дан массив рецептов. Нужно создать карточки с изображением, названием блюда и ингредиентами.
const recipes = [
  { 
    name: "Паста Карбонара", 
    image: "carbonara.png", 
    ingredients: ["Спагетти", "Яйца", "Бекон", "Сыр", "Сливки"] 
  },
  { 
    name: "Салат Цезарь", 
    image: "ceasar.jpeg", 
    ingredients: ["Курица", "Салат", "Сухарики", "Пармезан", "Соус Цезарь"] 
  }
];

const boxDishes = document.createElement('div')
boxDishes.classList.add('box-dishes')
document.body.append(boxDishes)

recipes.forEach(dish=>{
  boxDishes.innerHTML += `
    <div>
      <h2>${dish.name}</h2>
      <img src='./${dish.image}' alt='${dish.name}'/>
      <ol id='ingredients' style='text-align: left'>
      ${dish.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ol>
    </div>
  `
})
