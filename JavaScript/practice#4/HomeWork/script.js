//  1. Использование`for in`(итерация по индексам массива)
// Дан массив чисел.Используя`for in`, выведи в консоль индексы элементов массива.

// const numbers = [10, 20, 30, 40, 50];

// for(let i in numbers){
//   console.log(i)
// }

//  2. Использование`for of`(итерация по значениям массива)
// Дан массив строк.Используя`for of`, выведи в консоль все элементы массива.

// const fruits = ["яблоко", "банан", "апельсин", "груша"];

// for(let i of fruits){
//   console.log(i)
// }

// 3. Использование `for` для суммирования чисел в массиве
// Дан массив чисел.Используя`for`, вычисли сумму всех элементов и выведи результат.

// const numbers = [5, 10, 15, 20, 25];
// let count = 0
// for(let i in numbers){
//   count += numbers[i]
// }
// console.log(count)

// 4. Использование `while` для поиска первого четного числа
// Дан массив чисел.Используя`while`, найди и выведи в консоль первое четное число.

// const numbers = [1, 3, 7, 8, 9, 12];

// let i = 0
// while(i < numbers.length){
//   if(numbers[i] % 2 == 0){
//     console.log(numbers[i])
//     break
//   }
//   i++
// }

// 5. Использование `do while` для вывода всех элементов массива
// Дан массив чисел.Используя`do while`, выведи в консоль все элементы массива.

// const numbers = [3, 6, 9, 12, 15];

// let y = 0
// do{
//   console.log(numbers[y])
//   y++
// } while(y < numbers.length)

// 6. Использование `for` для создания нового массива с удвоенными значениями
// Дан массив чисел.Используя`for`, создай новый массив, в котором все элементы удвоены.Выведи новый массив в консоль.

// const numbers = [2, 4, 6, 8];

// const emptyArray = []
// for(let i = 0; i < numbers.length; i++){
//   emptyArray.push(numbers[i]*2)
// }
// console.log(emptyArray)

// 1. Отфильтровать и отсортировать пользователей по возрасту
// Дан массив объектов с пользователями. Нужно:
// - Оставить только пользователей старше 18 лет
// - Отсортировать их по возрасту (по возрастанию)
// - Получить массив имён отсортированных пользователей

const users = [
  { name: "Алексей", age: 25 },
  { name: "Мария", age: 17 },
  { name: "Иван", age: 30 },
  { name: "Ольга", age: 15 },
  { name: "Елена", age: 22 },
];

// const filretUsers = users.filter(user=>{
//   return user.age >= 18
// }).sort((a,b)=> a.age - b.age).map(user => user.name)

// console.log(filretUsers)

// 2. Найти средний рейтинг книг определенного жанра
// Дан массив книг. Нужно:
// - Оставить только книги жанра `"фантастика"`
// - Посчитать средний рейтинг этих книг

const books = [
  { title: "Гарри Поттер", genre: "фантастика", rating: 9.2 },
  { title: "1984", genre: "антиутопия", rating: 8.9 },
  { title: "Дюна", genre: "фантастика", rating: 9.5 },
  { title: "Мастер и Маргарита", genre: "драма", rating: 9.0 },
  { title: "Три тела", genre: "фантастика", rating: 8.8 },
];

// const filterBooks = books.filter(book=>{
//   return book.genre === "фантастика"
// })
// let averageRataing =  (filterBooks.reduce((acc,book)=>{
//   acc += book.rating
//   return acc
// },0) / filterBooks.length).toFixed(1)

// console.log(filterBooks, averageRataing)

// 3. Преобразовать массив товаров: оставить только названия в верхнем регистре
// Дан массив товаров. Нужно:
// - Оставить только товары дороже 1000
// - Получить массив их названий в верхнем регистре

const products = [
  { name: "Телефон", price: 1500 },
  { name: "Часы", price: 500 },
  { name: "Ноутбук", price: 3000 },
  { name: "Клавиатура", price: 700 },
];

// const result = products.filter(product=>product.price > 1000).map(product=>product.name.toUpperCase())

// console.log(result)

// 4. Найти самого молодого сотрудника с зарплатой выше 50000
// Дан массив сотрудников. Нужно:
// - Оставить только тех, у кого зарплата выше 50000
// - Найти самого молодого
// - Вернуть строку в формате `"Самый молодой: ИМЯ, возраст: ВОЗРАСТ, зарплата: ЗАРПЛАТА"`

const employees = [
  { name: "Олег", age: 30, salary: 60000 },
  { name: "Анна", age: 25, salary: 55000 },
  { name: "Виктор", age: 40, salary: 70000 },
  { name: "Марина", age: 23, salary: 48000 },
  { name: "Игорь", age: 28, salary: 52000 },
];

// const findMoreYounger = (employees) => {
//   const younger = employees
//     .filter((empl) => empl.salary > 50000)
//     .sort((a, b) => a.age - b.age)[0];
//   return `Самый молодой: ${younger.name}, возраст: ${younger.age}, зарплата: ${younger.salary}`;
// };

// console.log(findMoreYounger(employees));

// 5. Найти все жанры фильмов без повторений (используем `map`, `flat`, `Set`)
// Дан массив фильмов. Нужно:
// - Получить массив всех жанров (каждый фильм может содержать несколько жанров)
// - Удалить дубликаты
// - Вернуть массив жанров в алфавитном порядке

const movies = [
  { title: "Фильм 1", genres: ["драма", "триллер"] },
  { title: "Фильм 2", genres: ["фантастика", "боевик"] },
  { title: "Фильм 3", genres: ["драма", "фантастика"] },
  { title: "Фильм 4", genres: ["ужасы", "триллер"] },
];

const getGenresArr = (movies) => {
  const genres = [
    ...new Set(
      movies
        .map((movie) => movie.genres)
        .flat(Infinity)
        .sort()
    ),
  ];
  return genres;
};
console.log(getGenresArr(movies));
