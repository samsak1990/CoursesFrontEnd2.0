// 1. Фильтрация и преобразование данных 
//   Дан массив объектов, представляющих пользователей.Нужно отфильтровать пользователей, у которых возраст  не меньше 18 лет  и баланс  больше 1000 , затем отсортировать их  по убыванию баланса  и вернуть  массив их имен в верхнем регистре .


const users = [
  { name: "Alice", age: 22, balance: 1500 },
  { name: "Bob", age: 17, balance: 2000 },
  { name: "Charlie", age: 30, balance: 500 },
  { name: "David", age: 19, balance: 3000 },
];

const result = /* решение */
  console.log(result); // ["DAVID", "ALICE"]



//! 2. Подсчет количества элементов, удовлетворяющих условию 
// Дан массив строк.Нужно посчитать, сколько из них содержат  хотя бы одну цифру.


const words = ["hello", "world2023", "js", "c0d3", "array"];

const count = /* решение */;
console.log(count); // 2 (так как "world2023" и "c0d3" содержат цифры)



// 3. Группировка по признаку 
// Дан массив чисел.Нужно сгруппировать их в объект с ключами`"even"`(четные) и`"odd"`(нечетные).


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const grouped = /* решение */;
console.log(grouped);
// { even: [2, 4, 6, 8], odd: [1, 3, 5, 7] }


// 4. Проверка уникальности 
// Дан массив чисел.Нужно проверить, все ли элементы массива уникальны.


const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 1];

const isUnique1 = /* решение */;
const isUnique2 = /* решение */;

console.log(isUnique1); // true
console.log(isUnique2); // false




// 5. Комплексная обработка массива объектов 
// Дан массив заказов.Нужно:
// - оставить только оплаченные заказы(`paid: true`),
// - отсортировать по цене по убыванию,
// - вернуть массив строк в формате`"<имя>: <цена>"`.


const orders = [
  { customer: "Alice", price: 300, paid: true },
  { customer: "Bob", price: 100, paid: false },
  { customer: "Charlie", price: 500, paid: true },
  { customer: "David", price: 150, paid: true },
];

const formattedOrders = /* решение */;
console.log(formattedOrders);
// ["Charlie: 500", "Alice: 300", "David: 150"]



// 6. Найти среднее значение 
// Дан массив чисел.Найди их среднее значение.

const numbers = [10, 20, 30, 40, 50];

const average = /* решение */;
console.log(average); // 30


// 7. Найти самую длинную строку 
// Дан массив строк.Найди самую длинную строку.


const words = ["apple", "banana", "grapefruit", "kiwi"];

const longest = /* решение */;
console.log(longest); // "grapefruit"




// 8. Сортировка по длине строк 
// Дан массив строк.Отсортируй его  по длине строк  (от самой короткой к самой длинной).


const words = ["banana", "kiwi", "grapefruit", "apple"];

const sortedWords = /* решение */;
console.log(sortedWords);
// ["kiwi", "apple", "banana", "grapefruit"]



// 9. Найти элементы, содержащие букву "а" 
// Дан массив строк.Верни массив, содержащий только те элементы, в которых есть буква`"а"`.


const words = ["apple", "banana", "grape", "kiwi"];

const filteredWords = /* решение */;
console.log(filteredWords); // ["apple", "banana", "grape"]


// 10. Конкатенация всех элементов массива 
// Дан массив строк.Соедини все элементы массива в одну строку через`-`(дефис).


const words = ["hello", "world", "js"];

const result = /* решение */;
console.log(result); // "hello-world-js"


// 11. Количество четных и нечетных чисел 
// Дан массив чисел.Посчитай, сколько в нем  четных  и  нечетных  чисел.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const count = /* решение */;
console.log(count);
// { even: 4, odd: 4 }



// 12. Найти сумму четных чисел 
// Дан массив чисел.Найди сумму всех четных чисел.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = /* решение */;
console.log(sum); // 20


// 13. Переворот массива 
// Дан массив чисел.Верни массив в обратном порядке(без использования`reverse`).


const numbers = [1, 2, 3, 4, 5];

const reversed = /* решение */;
console.log(reversed); // [5, 4, 3, 2, 1]


// 14. Найти самое часто встречающееся число 
// Дан массив чисел.Найди число, которое встречается чаще всего.

const numbers = [1, 2, 3, 4, 1, 1, 2, 3, 1];

const mostFrequent = /* решение */;
console.log(mostFrequent); // 1


// 15. Удаление дубликатов 
// Дан массив чисел.Верни новый массив без дубликатов.


const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = /* решение */;
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]



// 16. Проверка, является ли массив палиндромом 
// Дан массив чисел.Проверь, является ли он палиндромом(читается одинаково в обоих направлениях).


const numbers1 = [1, 2, 3, 2, 1];
const numbers2 = [1, 2, 3, 4, 5];

const isPalindrome1 = /* решение */;
const isPalindrome2 = /* решение */;

console.log(isPalindrome1); // true
console.log(isPalindrome2); // false




// 17. Фильтрация по диапазону 
// Дан массив чисел и два числа `a` и`b`.Верни новый массив, содержащий только числа из диапазона`[a, b]`(включительно).


const numbers = [1, 5, 10, 15, 20, 25];
const a = 5;
const b = 20;

const filteredNumbers = /* решение */;
console.log(filteredNumbers); // [5, 10, 15, 20]


// 18. Найти разницу между максимальным и минимальным значением 
// Дан массив чисел.Найди разницу между максимальным и минимальным элементом массива.


const numbers = [3, 10, 2, 8, 6];

const difference = /* решение */;
console.log(difference); // 8 (10 - 2)


// 19. Умножение всех элементов на 2 
// Дан массив чисел.Умножь каждый элемент на `2` и верни новый массив.


const numbers = [1, 2, 3, 4, 5];

const doubled = /* решение */;
console.log(doubled); // [2, 4, 6, 8, 10]



// 20. Объединение и сортировка массивов 
// Дано два массива чисел.Объедини их и отсортируй в порядке возрастания.


const arr1 = [3, 6, 9];
const arr2 = [2, 4, 8];

const merged = /* решение */;
console.log(merged); // [2, 3, 4, 6, 8, 9]


// 21. Найти первое четное число 
// Дан массив чисел.Найди  первое четное число .


const numbers = [1, 3, 5, 7, 8, 10];

const firstEven = /* решение */;
console.log(firstEven); // 8



// 22. Перемешивание массива 
// Дан массив чисел.Перемешай его случайным образом.


const numbers = [1, 2, 3, 4, 5];

const shuffled = /* решение */;
console.log(shuffled); // [например, [3, 5, 1, 2, 4]]


// 23. Проверка наличия подмассива 
// Дан массив и подмассив.Проверь, содержит ли массив все элементы подмассива.


const arr = [1, 2, 3, 4, 5];
const subArr1 = [2, 4];
const subArr2 = [2, 6];

const contains1 = /* решение */;
const contains2 = /* решение */;

console.log(contains1); // true
console.log(contains2); // false


