// 1. Фильтрация по возрасту
// Дан массив объектов:
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];
// Получите массив пользователей старше 25 лет.

// const userOlder25 = users.filter((user) => user.age > 25);
// console.log(userOlder25);

//  2. Поиск по имени
// Найдите объект пользователя с именем `"Charlie"`.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// const findUser = users.find((user) => user.name === "Charlie");
// console.log(findUser);

//  3. Добавление свойства в объекты
// Добавьте каждому пользователю свойство `status: "active"`.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];

// for(let user of users){
//     user.status = "active"
// }

// console.log(users)

//  4. Сортировка по возрасту (по возрастанию)
// Отсортируйте массив по возрасту пользователей.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// users.sort((userA, userB) => userA.age - userB.age);
// console.log(users);

//  5. Изменение структуры объектов
// Преобразуйте массив так, чтобы объекты имели структуру `{ fullName: имя, ageInYears: возраст }`.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// const formatUsers = users.reduce((acc, user) => {
//   acc.push({
//     fullName: user.name,
//     ageInYears: user.age,
//   });
//   return acc;
// }, []);

// console.log(formatUsers);

//  6. Подсчет количества пользователей с возрастом больше 25
// Найдите, сколько пользователей старше 25 лет.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// let countUsersOlder25 = 0;
// for (let user of users) {
//   if (user.age > 25) {
//     countUsersOlder25 += 1;
//   } else continue;
// }
// console.log(countUsersOlder25);

//  7. Удаление определенных элементов
// Удалите из массива пользователей с возрастом меньше 30 лет.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 }
// ];

// console.log(users.filter(user => user.age >= 30))

//  8. Поиск индекса пользователя по имени
// Найдите индекс объекта с именем `"Bob"`.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// console.log(users.findIndex((user) => user.name === "Bob"));

//  9. Преобразование массива объектов в массив имен
// Создайте массив, содержащий только имена пользователей.
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// console.log(users.map((user) => user.name));

//  10. Преобразование в объект с именем как ключом
// Создайте объект вида `{ "Alice": 25, "Bob": 30, "Charlie": 22, "David": 35 }`.

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 },
];

// const newObj = users.reduce((acc, user) => {
//   acc[user.name] = user.age;
//   return acc;
// }, {});

// console.log(newObj);

//! ### 🔹 Циклы + массивы

//  11. Сумма четных чисел массива
// const numbers = [12, 5, 8, 130, 44, 27];
// Найдите сумму всех четных чисел.

// const sumEven = numbers.reduce((acc, num) => {
//   num % 2 == 0 ? (acc += num) : 0;
//   return acc;
// }, 0);
// console.log(sumEven);

//  12. Поиск наибольшего числа в массиве
// Найдите максимальное число в массиве `numbers`.
// const numbers = [12, 5, 8, 130, 44, 27];

// console.log(Math.max(...numbers));

//  13. Поиск второго по величине числа
// Найдите второе по величине число в массиве.
// const numbers = [12, 5, 8, 130, 44, 27];

// console.log(numbers.sort((a, b) => b - a)[1]);

//  14. Перевернуть массив без `reverse()`
// Напишите код, который переворачивает массив без использования `reverse()`.
// const numbers = [12, 5, 8, 130, 44, 27];

// const reverseArr = (arr) => {
//   const result = [];
//   for (let num of arr) result.unshift(num);
//   return result;
// };

// console.log(reverseArr(numbers));

// 15. Удаление дубликатов из массива
// const data = [3, 5, 2, 3, 8, 2, 7, 8, 10];
// Удалите дубликаты, используя цикл.

// const deletDouble = (arr) => {
//   const result = [];
//   for (let num of arr) result.includes(num) ? true : result.push(num);
//   return result;
// };

// console.log(deletDouble(data));

//  16. Объединение двух массивов без`concat()`
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// Объедините массивы в один.

// console.log([...arr1, ...arr2]);

//  17. Нахождение элементов, которых нет во втором массиве
// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7];
// Найдите элементы из`a`, которых нет в`b`.

// const findUniq = (arr1, arr2) => {
//   const uniqSet = [];
//   for (let num1 of arr1) arr2.includes(num1) ? true : uniqSet.push(num1);
//   return uniqSet;
// };

// console.log(findUniq(a, b));

//  18. Преобразование двумерного массива в одномерный
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Преобразуйте его в `[1, 2, 3, 4, 5, 6, 7, 8, 9]` без`flat()`.

// const formatToOneDimensionalArray = (matrix) => {
//   const result = [];
//   for (let array of matrix) result.push(...array);
//   return result;
// };

// console.log(formatToOneDimensionalArray(matrix));

//  19. Генерация массива из чисел от 1 до 100
// Создайте массив `[1, 2, 3, ..., 100]` с помощью цикла.

// const generatorArray = (max) => {
//   let result = [];
//   while (result.length != max) result.push(result.length + 1);
//   return result;
// };

// console.log(generatorArray(200));

//  20. Перемешивание массива(рандомный порядок)
// Реализуйте алгоритм для перемешивания элементов массива.

// const numbers = [12, 5, 8, 130, 44, 27];

// const shakeArray = (arr) => {
//   let lengthDefault = arr.length - 1;
//   const shakedArray = [];
//   let i = 0;
//   while (i < arr.length) {
//     let randomIndex = Math.round(Math.random() * lengthDefault);
//     if (typeof shakedArray[randomIndex] == typeof undefined) {
//       shakedArray[randomIndex] = arr[i];
//       i++;
//     }
//   }
//   if (arr.join() === shakedArray.join()) {
//     shakeArray(arr);
//   } else return shakedArray;
// };

// console.log(shakeArray(numbers));

//! ### 🔹 Методы строк

// 21. Подсчет количества гласных в строке
// const text = "JavaScript is awesome!";
// Подсчитайте количество гласных(`a, e, i, o, u`).

//  22. Замена пробелов на`-`
// Замените все пробелы в строке на`-`.
// const text = "JavaScript is awesome!";

//  23. Разворот строки
// Переверните строку`"Hello, world!"`.

//  24. Извлечение цифр из строки
// const str = "User ID: 49876, Age: 27";
// Извлеките все числа в виде массива`[49876, 27]`.
