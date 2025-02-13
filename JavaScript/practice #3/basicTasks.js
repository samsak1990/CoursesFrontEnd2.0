// 1. Поиск элементов в массиве
//  Задача 1.1:  Найди первый элемент больше 10 в массиве `[2, 5, 12, 8, 15]`.
// const arr = [2, 5, 12, 8, 15];

const findFirstNUmMoreTen = (arr) => arr.find((item) => item > 10);

// console.log(findFirstNUmMoreTen(arr));

//  Задача 1.2:  Найди индекс первого элемента, который меньше 0, в массиве `[3, -1, 4, -5, 6]`.
// const arr = [3, -1, 4, -5, 6];

const findFirstNumLessZero = (arr) => arr.find((item) => item < 0);

// console.log(findFirstNumLessZero(arr));

//  Задача 1.3:  Проверь, содержит ли массив `[1, 2, 3, 4, 5]` число 3.
// const arr = [1, 2, 3, 4, 5];

const isIncludeThree = (arr) => arr.includes(3);

// console.log(isIncludeThree(arr));

//  2. Фильтрация данных
//  Задача 2.1:  Оставь в массиве `[7, 2, 10, 5, 8]` только четные числа.
// const arr = [7, 2, 10, 5, 8];

const filterEvenValues = (arr) => arr.filter((val) => val % 2 == 0);

//  Задача 2.2:  Убери из массива `['яблоко', 'банан', 'груша', 'банан']` все вхождения `'банан'`.
// const arr = ['яблоко', 'банан', 'груша', 'банан'];

const customFilterArray = (arr) => arr.filter((item) => item != "банан");

//  3. Преобразование массива
//  Задача 3.1:  Умножь все элементы массива `[1, 2, 3, 4]` на 2.
// const arr = [1, 2, 3, 4];

const multyplyValuesByTwo = (arr) => arr.map((item) => item * 2);

// console.log(multyplyValuesByTwo([1, 2, 3, 4]));

//  Задача 3.2:  Разверни массив `[[1, 2], [3, 4], [5, 6]]` в `[1, 2, 3, 4, 5, 6]`.
// const arr = [[1, 2], [3, 4], [5, 6]];

const expandDataArray = (arr) => arr.flat(Infinity);
// console.log(
//   expandDataArray([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

//  4. Сортировка и перестановка
//  Задача 4.1:  Отсортируй массив `[5, 1, 8, 3, 2]` по возрастанию.
// const arr = [5, 1, 8, 3, 2];

const sortByValue = (arr) => arr.sort();
// console.log(sortByValue([5, 1, 8, 3, 2]));

//  Задача 4.2:  Разверни порядок элементов в массиве `[10, 20, 30, 40]`.
// const arr = [10, 20, 30, 40];

const reverseArray = (arr) => arr.reverse();

//  5. Изменение содержимого массива
//  Задача 5.1:  Удали последний элемент из массива `[1, 2, 3, 4, 5]`.
// const arr = [1, 2, 3, 4, 5];

const delLatItem = (arr) => {
  arr.splice(-1, 1);
  return arr;
};
// console.log(delLatItem(arr));

//  Задача 5.2:  Вставь число `100` в начало массива `[10, 20, 30]`.
// const arr = [10, 20, 30];

const putNewValueAtTheBeginning = (arr) => {
  arr.unshift(100);
  return arr;
};
// console.log(putNewValueAtTheBeginning(arr));

//  6. Агрегирование данных
//  Задача 6.1:  Найди сумму чисел в массиве `[3, 7, 2, 8]`.
// const arr = [3, 7, 2, 8];

const summArrayValues = (arr) =>
  arr.reduce((acc, item) => {
    return acc + item;
  }, 0);

// console.log(summArrayValues(arr));

//  Задача 6.2:  Найди максимальное число в массиве `[12, 45, 7, 98, 23]`.
// const arr = [12, 45, 7, 98, 23];

const findMaxValueInArray = (arr) => Math.max(...arr);

// console.log(findMaxValueInArray(arr));

//  7. Работа со строками и массивами
//  Задача 7.1:  Преобразуй строку `"яблоко, банан, груша"` в массив.
// const str = "яблоко, банан, груша";

const strintToArray = (str) => str.split(",");

// console.log(strintToArray(str));

//  8. Перебор массива
//  Задача 8.1:  Выведи в консоль каждый элемент массива `[10, 20, 30]`.
// const arr = [10, 20, 30];

const showArrayElements = (arr) => arr.forEach((item) => console.log(item));

// showArrayElements(arr);
