//1. Создайте переменные для хранения вашего имени, возраста и города проживания. Выведите их в консоль.
const myName = 'Poul'
const myAge = 30
const myCity = 'Minsk'

console.log('TASK 1: ', myName, myAge, myCity)

//2. Создайте переменные разных типов данных: строка, число, булевый тип, массив и объект. Выведите тип каждой переменной в консоль с помощью typeof.

const stringType = "string"
let numberType = 10
const booleanType = numberType>0
const arrayType = []
const objectsType = {}

console.log('TASK 2: ', 
    typeof stringType,
    typeof numberType,
    typeof booleanType,
    typeof arrayType,
    typeof objectsTyp
)


//3. Создайте объект, который будет содержать свойства: name, age, city. Добавьте метод greet, который будет выводить приветствие с использованием свойств объекта. Пример: "Привет, меня зовут [name], мне [age] лет и я из [city]".

const person = {
    name: myName,
    age: myAge,
    city: myCity,
    greet: function(){
        console.log(`TASK 4: Hello, I'm ${this.name}! I'm ${this.age} and I from ${this.city}`)
    }
}

person.greet()

//4. Напишите функцию, которая принимает два параметра: width и height, и возвращает площадь прямоугольника. Используйте эту функцию для вычисления площади нескольких прямоугольников.

function getAreaOfRectangel(width, height){
    return width * height
}
console.log('TASK 4:', getAreaOfRectangel(30, 15))

//5. Создайте объект car с свойствами: brand, model, year, и методом getInfo, который возвращает строку с информацией о машине. 

const car = {
    brand: 'Ford',
    model: 'Focus',
    year: '2013',
    getInfo: function(){
        console.log(`TASK 5: ${this.brand + ' ' + this.model + ' ' + this.year}  `)
    }
}
car.getInfo()
// Напишите функцию isEligibleForScholarship, которая принимает объект студента (свойства: name, gpa, extracurricularsCount) и возвращает true, если GPA больше 3.5 и количество внеучебных мероприятий больше 2, и false в противном случае.

const infoStudent = {
    name: 'Gregory',
    gpa: 4,
    extracurricularsCount: 4,
}

const isEligibleForScholarship = (student) => student.gpa > 3.5 && student.extracurricularsCount > 2

console.log('TASK 6:',isEligibleForScholarship(infoStudent))

//7. Создайте функцию checkPassword, которая принимает объект пользователя (свойства: password, confirmPassword) и проверяет, соответствует ли пароли друг другу. Если пароль неверный, функция должна возвращать сообщение о том, что пароль неверен, и предлагать пользователю ввести его снова.

// const user = {
//     password: prompt('Enter your password: '),
//     confirmPassword: prompt('Please, confirm your password: '),
// }

const checkPassword = (user) => {
    while(user.password !== user.confirmPassword){
        alert("Passwords don't match. Please, try again")
        user.password = prompt('Enter your password: ')
        user.confirmPassword = prompt('Please, confirm your password: ')
        checkPassword(user)
    }
}

// checkPassword(user)

//8. Напишите функцию canAccess, которая принимает объект пользователя (свойства: role, isLoggedIn) и возвращает true, если пользователь имеет доступ (например, роль "admin" или "editor" и статус isLoggedIn равен true), и false в противном случае.

const anyUser = {
    role: 'editor',
    isLoggedIn: true
}

const canAccess = (user)=> (user.role === 'admin' || user.role === 'editor') && (user.isLoggedIn === true) 


console.log('TASK 8:', canAccess(anyUser))

//9. Напишите функцию convertTemperature, которая принимает температуру в градусах Цельсия и возвращает объект с двумя свойствами: celsius и fahrenheit, где fahrenheit - это температура в градусах Фаренгейта.

// let celsiusFromUser = Number(prompt('Enter degrees celsius: '))

const convertTemperature = (celsius) => {
    const setTemperature = {
        celsius,
        fahrenheit: (celsius * 1.8 + 32).toFixed(2),
    }
    return setTemperature
}

// console.log('TASK 9:', convertTemperature(celsiusFromUser))

// Создайте функцию startCalculator, которая выполняет следующие действия:
// Запрашивает у пользователя два числа.
// Запрашивает у пользователя оператор (например, +, -, *, /).
// Проверяет, что введенные значения являются числами.
// Проверяет, что оператор является одним из допустимых (+, -, *, /).
// Выполняет соответствующую арифметическую операцию и выводит результат.
// Обрабатывает возможные ошибки, такие как деление на ноль.

const startCalculator = ()=>{
    let result = null;
    let num1 = Number(prompt('Enter the first value for count: '))
    let num2 = Number(prompt('Enter the second value for count: '))
    let action = prompt('Enter the action (+, -, *, /): ')

    if(!num1 || !num2 || !action){
        alert('Incorrect numbers entered')
    } else if(num2 === 0 && action === '/'){
        alert('Syntax error: number / 0 --> incorrectly '  )
    } else if ((num1 && num2) && ['+', '-', '*', '/'].includes(action)){
        result = eval(num1+action+num2) //знаю, что eval  нельзя использовать, но как вариант, иначе, например, через switch/case
    } else {
        alert("FATAL ERROR! Try again")
    }
    return result
}

console.log('TASK 9:', startCalculator())