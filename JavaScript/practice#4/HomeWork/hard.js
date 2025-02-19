// 1. Группировка элементов массива(`reduce`)
//   Напишите функцию`groupBy(arr, key)`, которая группирует массив объектов по указанному ключу.

const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
];

const groupBy = (arr, key) => {
  const groupArr = arr.reduce((acc, item) => {
    let _key = item[key];
    acc[_key] ? acc[_key].push(item) : (acc[_key] = [item]);
    return acc;
  }, {});
  return groupArr;
};

// console.log(groupBy(data, "category"));
/* {
  fruit: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }],
  vegetable: [{ category: "vegetable", name: "carrot" }]
} */

// 2. Подсчет количества элементов(`reduce`)
// Создайте функцию`countOccurrences(arr)`, которая считает, сколько раз каждый элемент встречается в массиве.

function countOccurrences(array) {
  return array.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] = acc[cur] + 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
}

const result = countOccurrences([
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
]);
// console.log(result);

// { apple: 3, banana: 2, orange: 1 }

// acc.apple = acc.apple + 1

// 3. Найти самый часто встречающийся элемент(`reduce`)
// Напишите функцию`findMostFrequent(arr)`, которая возвращает элемент, который встречается чаще всего.

const findMostFrequent = (arr) => {
  const generalObj = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  let maxValue = Math.max(...Object.values(generalObj));
  for (let item in generalObj) {
    if (generalObj[item] === maxValue) {
      return item;
    }
  }
};

findMostFrequent([1, 3, 3, 2, 1, 3, 2, 1, 1]); // 1

// 4. Создание уникального массива(`Set`)
// Создайте функцию`uniqueArray(arr)`, которая удаляет дубликаты из массива.

const uniqueArray = (arr) => new Array(...new Set(arr));

uniqueArray([1, 2, 3, 2, 1, 4]); // [1, 2, 3, 4]

// 5. Пересечение массивов(`filter` + `includes`)
// Создайте функцию`intersectArrays(arr1, arr2)`, которая возвращает массив общих элементов.

const intersectArrays = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

intersectArrays([1, 2, 3], [2, 3, 4]); // [2, 3]

// 6. Разность массивов(`filter` + `includes`)
// Создайте функцию`differenceArrays(arr1, arr2)`, которая возвращает элементы, которые есть в`arr1`, но нет в`arr2`.

const differenceArrays = (arr1, arr2) => {
  return arr1.filter((item) => !arr2.includes(item));
};

differenceArrays([1, 2, 3], [2, 3, 4]); // [1]

// 7. Разворачивание вложенного массива произвольной глубины(`flat`)
// Создайте функцию`deepFlatten(arr)`, которая превращает вложенный массив в плоский.

// deepFlatten([1, [2, [3, [4]]]]); // [1, 2, 3, 4]

const deepFlatten = (arr) => arr.flat(Infinity);

// 8. Проверка на анаграмму(`sort` + `join`)
// Напишите функцию`areAnagrams(str1, str2)`, которая проверяет, являются ли две строки анаграммами(состоят из одинаковых букв).

const areAnagrams = (str1, str2) => {
  return str1.split("").sort().join() === str2.split("").sort().join();
};

// areAnagrams("listen", "silent"); // true
// areAnagrams("hello", "world"); // false

// 9. Найти элементы, которые есть только в одном из массивов(`filter`)
// Создайте функцию`symmetricDifference(arr1, arr2)`, которая возвращает элементы, которые есть только в одном из массивов.

const symmetricDifference = (arr1, arr2) => {
  const newArr1 = arr1.filter((item) => !arr2.includes(item));
  const newArr2 = arr2.filter((item) => !arr1.includes(item));
  return [...newArr1, ...newArr2];
};

symmetricDifference([1, 2, 3], [2, 3, 4]); // [1, 4]

// 10. Глубокое сравнение массивов(`JSON.stringify`)
// Напишите функцию`deepEqual(arr1, arr2)`, которая проверяет, равны ли два массива(включая вложенные элементы).

const deepEqual = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

// deepEqual([1, [2, 3]], [1, [2, 3]]); // true
// deepEqual([1, [2, 3]], [1, [3, 2]]); // false

// 11. Разбиение массива на группы(`slice`)
// Создайте функцию`chunkArray(arr, size)`, которая разбивает массив на подмассивы заданного размера.

const chunkArray = (arr, size) => {
  const groupsArr = [];
  for (let l = 0; l < arr.length; l += size) {
    groupsArr.push(arr.slice(l, l + size));
  }
  return groupsArr;
};

chunkArray([1, 2, 3, 4, 5, 6], 2); // [[1, 2], [3, 4], [5, 6]]

// 12. Объединение массивов объектов(`map` + `reduce`)
// Напишите функцию`mergeArrays(arr1, arr2)`, которая объединяет два массива объектов по`id`.

const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const arr2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
];

const mergeArrays = (arr1, arr2) => {
  const result = arr1.map((item) => {
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i].id == item.id) {
        return { ...item, ...arr2[i] };
      }
    }
  });
  return result;
};

mergeArrays(arr1, arr2);
/* [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 }
] */

// 13. Проверка, является ли массив подмножеством(`every` + `includes`)
// Создайте функцию`isSubset(arr1, arr2)`, которая проверяет, является ли `arr1` подмножеством`arr2`.

const isSubset = (arr1, arr2) => {
  return arr1.every((item) => {
    return arr2.includes(item);
  });
};

// isSubset([1, 2], [1, 2, 3, 4]); // true
// isSubset([1, 5], [1, 2, 3, 4]); // false

// 14. Перестановка элементов массива(`sort` + `random`)
// Создайте функцию`shuffleArray(arr)`, которая перемешивает элементы массива случайным образом.

const shuffleArray = (arr) => {
  const randomSorted = arr.sort((a, b) => {
    return a * Math.random() - b * Math.random();
  });
  return randomSorted;
};

shuffleArray([1, 2, 3, 4, 5]); // [3, 1, 5, 2, 4] (примерный результат)

// 15. Поиск пересекающихся диапазонов(`filter`)
// Напишите функцию`findOverlappingRanges(ranges)`, которая возвращает все пересекающиеся диапазоны чисел.

const ranges = [
  [1, 5],
  [4, 10],
  [15, 20],
  [18, 25],
];

//РЕШАЛ НЕ САМ
function findOverlappingRanges(ranges) {
  return ranges.filter((range, index) => 
    ranges.some((otherRange, otherIndex) =>
      index !== otherIndex && range[1] >= otherRange[0] && range[0] <= otherRange[1]
    )
  );
}

findOverlappingRanges(ranges);
// [[1, 5], [4, 10]] и [[15, 20], [18, 25]]

// 16. Найти сумму чисел, содержащих определенную цифру(`reduce` + `filter`)
// Создайте функцию`sumNumbersContainingDigit(arr, digit)`, которая суммирует только те числа, которые содержат указанную цифру.

const sumNumbersContainingDigit = (arr, num) =>{ 
  const filterArr = arr.filter(item=>{
    return String(item).includes(num.toString())
  })
  const result = filterArr.reduce((acc, elem)=>{
    return acc += elem
  }, 0)
  return result
}

sumNumbersContainingDigit([123, 456, 789, 145], 1); // 123 + 145 = 268
