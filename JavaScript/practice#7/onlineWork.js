//  1.ser  Преобразование массива строк в булевы значения 
// const values = ["true", "false", "", "0", "1", "hello"];
// Преобразовать в массив булевых значений с явным приведением типаvalues.map(bulion())

values.map(i => Boolean(i))
values.map(i => Boolean(JSON.parse(i) || i))


//  2. Суммирование чисел в массиве, преобразуя строки в числа 
// const data = ["10", "20px", "30", "40.5px", "50"];
// Суммировать только те элементы, которые можно преобразовать в числа
let sum = 0;
data.forEach(element => {
    const number = parseFloat(element)
    if (!isNaN(number)) {
        sum+=number
    }
})

// 3. вит  Инкремент и декремент при работе с объектами
// const obj = { count: 0 };
// Увеличить count на 1 тремя разными способами
const key = 'count'
obj.count++
obj.count=obj.count+1
obj.count+=1
obj[key]++
function up(obj){
obj.count+=}

// 4. Паша  Создание объекта из аргументов
// `createObject("name", "John", "age", 25) // { name: "John", age: 25 }`.

function createObject(...args){
    const result = {}
    for(let i = 0; i<args.length; i+= 2){      
        result[args[i]] = args[i+1]
    }

    return result
}



// 21. Слава Фильтрация объектов по вложенному свойству
// Оставить только те объекты, у которых есть свойство active: true внутри вложенного settings.
// const users = [
//   { id: 1, name: "Alice", settings: { active: true, theme: "dark" } },
//   { id: 2, name: "Bob", settings: { active: false, theme: "light" } },
//   { id: 3, name: "Charlie", settings: { active: true, theme: "dark" } }
// ];
activeUsers = users.filter(user => user.settings.active)

// 22.vit Преобразование массива объектов в один объект
// Создать объект, где ключ — это id, а значение — сам объект.
// const users = [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 2, name: "Bob", role: "user" },
//   { id: 3, name: "Charlie", role: "editor" }
// ];

// 23.ser Поиск самого дорогого товара
// Найти товар с самой высокой ценой.
// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Phone", price: 800 },
//   { id: 3, name: "Tablet", price: 600 }
// ];


// 25. Паша Поиск объекта с максимальным количеством вложенных элементов
// Найти объект, у которого максимальное количество элементов во вложенном массиве skills.
// const users = [
//   { id: 1, name: "Alice", skills: ["JS", "React"] },
//   { id: 2, name: "Bob", skills: ["HTML", "CSS", "JS", "Node.js"] },
//   { id: 3, name: "Charlie", skills: ["Python", "Django"] }
// ];


function maxInnerElements(arr){
    let maxL = 0, resObj;
    for(let item of arr){
        if(item.skills.length > maxL) {
            maxL = item.skills.length
            resObj = item
        }
        continue
    }
    return resObj
}

// 5.  Определение типа треугольника с использованием условного ветвления
// Вернуть 'равносторонний', 'равнобедренный' или 'разносторонний'
// function getTriangleType(a, b, c) {
// }

// 6.  Фильтрация и приведение типов
// Оставить только числа(привести строки к числу, если возможно), используя`Boolean()`.
// const values = ['10', true, 0, 'hello', 25, null, undefined, '100px'];


// 7.  Сумма чисел в строке
// Извлечь числа и найти их сумму.
// const text = "10 apples and 20 oranges";