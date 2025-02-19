// 1. Группировка элементов массива(`reduce`)
//   Напишите функцию`groupBy(arr, key)`, которая группирует массив объектов по указанному ключу.

const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" }
];

// groupBy(data, "category");
/* {
  fruit: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }],
  vegetable: [{ category: "vegetable", name: "carrot" }]
} */



// 2. Подсчет количества элементов(`reduce`)   
// Создайте функцию`countOccurrences(arr)`, которая считает, сколько раз каждый элемент встречается в массиве.


function countOccurrences(array) {
  return array.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] = acc[cur] + 1
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})
}

const result = countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]);
console.log(result);

// { apple: 3, banana: 2, orange: 1 }

// acc.apple = acc.apple + 1
// 3. Найти самый часто встречающийся элемент(`reduce`)   
// Напишите функцию`findMostFrequent(arr)`, которая возвращает элемент, который встречается чаще всего.


findMostFrequent([1, 3, 3, 2, 1, 3, 2, 1, 1]); // 1


// 4. Создание уникального массива(`Set`)   
// Создайте функцию`uniqueArray(arr)`, которая удаляет дубликаты из массива.

uniqueArray([1, 2, 3, 2, 1, 4]); // [1, 2, 3, 4]


// 5. Пересечение массивов(`filter` + `includes`)   
// Создайте функцию`intersectArrays(arr1, arr2)`, которая возвращает массив общих элементов.

intersectArrays([1, 2, 3], [2, 3, 4]); // [2, 3]

// 6. Разность массивов(`filter` + `includes`)   
// Создайте функцию`differenceArrays(arr1, arr2)`, которая возвращает элементы, которые есть в`arr1`, но нет в`arr2`.

differenceArrays([1, 2, 3], [2, 3, 4]); // [1]


// 7. Разворачивание вложенного массива произвольной глубины(`flat`)   
// Создайте функцию`deepFlatten(arr)`, которая превращает вложенный массив в плоский.


// deepFlatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4]


// 8. Проверка на анаграмму(`sort` + `join`)   
// Напишите функцию`areAnagrams(str1, str2)`, которая проверяет, являются ли две строки анаграммами(состоят из одинаковых букв).

// areAnagrams("listen", "silent"); // true
// areAnagrams("hello", "world"); // false



// 9. Найти элементы, которые есть только в одном из массивов(`filter`)   
// Создайте функцию`symmetricDifference(arr1, arr2)`, которая возвращает элементы, которые есть только в одном из массивов.

symmetricDifference([1, 2, 3], [2, 3, 4]); // [1, 4]


// 10. Глубокое сравнение массивов(`JSON.stringify`)   
// Напишите функцию`deepEqual(arr1, arr2)`, которая проверяет, равны ли два массива(включая вложенные элементы).

// deepEqual([1, [2, 3]], [1, [2, 3]]); // true
// deepEqual([1, [2, 3]], [1, [3, 2]]); // false


// 11. Разбиение массива на группы(`slice`)   
// Создайте функцию`chunkArray(arr, size)`, которая разбивает массив на подмассивы заданного размера.

chunkArray([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]


// 12. Объединение массивов объектов(`map` + `reduce`)   
// Напишите функцию`mergeArrays(arr1, arr2)`, которая объединяет два массива объектов по`id`.

const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const arr2 = [{ id: 1, age: 25 }, { id: 2, age: 30 }];

mergeArrays(arr1, arr2);
/* [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
] */


// 13. Проверка, является ли массив подмножеством(`every` + `includes`)   
// Создайте функцию`isSubset(arr1, arr2)`, которая проверяет, является ли `arr1` подмножеством`arr2`.

// isSubset([1, 2], [1, 2, 3, 4]); // true
// isSubset([1, 5], [1, 2, 3, 4]); // false


// 14. Перестановка элементов массива(`sort` + `random`)   
// Создайте функцию`shuffleArray(arr)`, которая перемешивает элементы массива случайным образом.

shuffleArray([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4] (примерный результат)


// 15. Поиск пересекающихся диапазонов(`filter`)   
// Напишите функцию`findOverlappingRanges(ranges)`, которая возвращает все пересекающиеся диапазоны чисел.

const ranges = [[1, 5], [4, 10], [15, 20], [18, 25]];
findOverlappingRanges(ranges);
// [[1, 5], [4, 10]] и [[15, 20], [18, 25]]


// 16. Найти сумму чисел, содержащих определенную цифру(`reduce` + `filter`)   
// Создайте функцию`sumNumbersContainingDigit(arr, digit)`, которая суммирует только те числа, которые содержат указанную цифру.

sumNumbersContainingDigit([123, 456, 789, 145], 1); // 123 + 145 = 268



