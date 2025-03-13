// Получи и выведи в консоль:
// - Заголовок страницы(`document.title`).  
//    - URL текущей страницы(`document.URL`).  
//    - Имя браузера с помощью`navigator`.  
console.log(document.title)
console.log(document.URL)
console.log(navigator.userAgent)


// Перейди на страницу `"https://example.com"` с помощью`location`.  
const buttonURL = document.querySelector('#toward')
buttonURL.addEventListener('click', ()=>{
    location.assign('https://onliner.by') // redirect to another site and save move in history
})

// Получи доступ к`document.body`, измени его `backgroundColor` на`lightgray`.
const buttonBG = document.querySelector('#bgBody')
buttonBG.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'lightgray'
}) 

// Выведи в консоль количество узлов(`childNodes.length`) внутри`document.body`.  
console.log(document.body.childNodes.length)


// Получение элементов со страницы
// Найди и выведи в консоль:
// - Элемент с`id="main"`.  
//    - Все элементы с классом`"item"`.  
//    - Все`<p>` на странице.  
//    - Первый элемент с классом`"highlight"`.  
console.log(document.querySelector('#main'))
console.log(document.querySelectorAll('.item'))
console.log(document.querySelectorAll('p'))
console.log(document.querySelector('.highlight'))


// Получи и измени текст первого элемента `<h1>` на`"Новый заголовок"`.  
const heading = document.querySelector('h1')
heading.addEventListener('click', ()=>{
    heading.textContent = 'Новый заголовок'
})
 


// Создай новый `<p>` с текстом `"Это новый параграф"` и добавь его в конец`document.body`.  
const newElem = document.createElement('p')
newElem.textContent = "Это новый параграф"
document.body.append(newElem)

// Создай новый`<div>`, внутри него добавь `<h2>` с текстом`"Привет, мир!"`, вставь в`document.body`.
const newDiv = document.createElement('div')
const newHead = document.createElement('h2')
newHead.textContent = 'Привет, мир!'
newDiv.appendChild(newHead)
document.body.append(newDiv)

// Замени первый `<p>` на странице на новый `<p>` с текстом`"Замененный параграф"`.  
const oldP = document.querySelector('p')
const newP = document.createElement('p')
newP.textContent = 'Замененный параграф'
newP.classList.add('item')
oldP.replaceWith(newP)

// Создай 5 `<div>` с текстом`"Блок X"`, где X — это номер блока(1 - 5).Добавь их в`document.body`.  (использовать цикл)
const btnFiveDivs = document.querySelector('#fiveDiv')
btnFiveDivs.addEventListener('click', addFiveDivs)

function addFiveDivs(){
    let counter = 1
    const interavl = setInterval(()=>{
        if(counter > 5){
            clearInterval(interavl)
            return
        }
        let newDiv = document.createElement('div')
        newDiv.textContent = `Блок ${counter}`
        document.body.append(newDiv)
        counter++
    }, 500)
}


// Создай новый `<ul>` со списком`["Яблоко", "Груша", "Банан"]`, добавь его в`document.body`.  (использовать цикл)
const newUl = document.createElement('ul')
document.body.append(newUl)
const fruit = ["Яблоко", "Груша", "Банан"]
fruit.forEach(fr => {
    let li = document.createElement('li')
    li.textContent = fr
    newUl.appendChild(li)
})

// Найди элемент с `id="content"` и измени его `color` на`"blue"`.  
document.querySelector('#content').style.color = 'blue'

// Найди все `<p>` и сделай их `fontSize` равным`"18px"`. (использовать цикл) 
const allP = document.querySelectorAll('p')
allP.forEach(p =>{
    p.style.fontSize = '18px'
})

// Создай новый`<div>`, установи ему`width: 200px`, `height: 100px`, `backgroundColor: "red"` и добавь в`document.body`.  
const regularDiv = document.createElement('div')
regularDiv.style.width = '200px'
regularDiv.style.height = '100px'
regularDiv.style.backgroundColor = 'red'
document.body.append(regularDiv)