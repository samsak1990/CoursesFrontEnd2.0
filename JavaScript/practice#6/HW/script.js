// 1. Функция debounce
// Напишите функцию, которая будет «дебаунсить» вызов другой функции.Дебаунсинг означает, что вызов переданной функции будет отложен на заданное время, и если в это время произойдет новый вызов, предыдущий отменяется.

// 2. Форматирование числа в строку с разделением разрядами
// Задача: Напишите функцию, которая принимает число и форматирует его, добавляя разделители разрядов (например, для числа 1234567 возвращается строка "1,234,567").

// 3. Генерация случайного пароля
// Напишите функцию, которая генерирует случайный пароль длиной 12 символов, включающий заглавные и строчные буквы, цифры и специальные символы.

// 4. Создайте функцию camelToSnake(str), которая превращает строку из camelCase в snake_case.

// camelToSnake("helloWorld"); // "hello_world"
// camelToSnake("someVariableName"); // "some_variable_name"

// 5. Методы строк: зашифровка
// Напишите функцию caesarCipher(str, shift), которая шифрует строку сдвигом букв по шифру Цезаря. (Используй charCodeAt и String.fromCharCode)

// caesarCipher("hello", 3); // "khoor"
// caesarCipher("abc", 1); // "bcd"

// 6. Реализация метода groupBy для массива объектов
// Напиши функцию groupBy(arr, key), которая группирует массив объектов по заданному ключу key.Функция должна возвращать объект, где ключами будут значения из поля key, а значениями — массивы объектов, содержащие эти значения.

// groupBy([
//   { id: 1, category: "A" },
//   { id: 2, category: "B" },
//   { id: 3, category: "A" },
// ], "category");
// { A: [{ id: 1, category: "A" }, { id: 3, category: "A" }], B: [{ id: 2, category: "B" }] }

// 7. Реализация метода memoize для вычислений
// Напишите функцию memoize, которая будет запоминать результаты вычислений для определенных входных параметров.Если функция будет вызвана с теми же параметрами, результат должен быть взят из кеша (localStorage или просто объект в программе).

// 8. Реализация метода isEqual для глубокого сравнения объектов
// Напишите функцию isEqual, которая будет выполнять глубокое сравнение двух объектов. Функция должна учитывать вложенные объекты и массивы.

const a = {
  list: [1, 2, 3, 4, 5],
  key3: 1,
  key6: 2,
  obj: {
    tag1: "tag1",
    tag: "2",
    newObj: {
      listNew: [1, 2.5],
    },
  },
  add: "fff",
  key5: 2,
};
const b = {
  list: [1, 2, 3, 4, 5],
  key3: 1,
  key6: 2,
  obj: {
    tag1: "tag1",
    tag: "2",
    newObj: {
      listNew: [1, 2.5],
    },
  },
  add: "fff",
  key5: 2,
};

function isEqual(array1, array2) {
  const setKeysA = Object.keys(array1);
  const setKeysB = Object.keys(array2);

  if (setKeysA === setKeysB) return "Objects is same";

  if (
    setKeysA.length == setKeysB.length &&
    setKeysA.every((key) => setKeysB.includes(key))
  ) {
    const checkValues = setKeysA.every((value) => {
      if (array1[value] instanceof Array && array2[value] instanceof Array) {
        const extraArr1 = array1[value];
        const extraArr2 = array2[value];
        const matchResultExtraArrs = extraArr1.every((value) => {
          if (extraArr1.length === extraArr2.length)
            return extraArr2.includes(value);
        });
        return matchResultExtraArrs;
      }
      if (array1[value] instanceof Object && array2[value] instanceof Object) {
        const extraObj1 = array1[value];
        const extraObj2 = array2[value];
        const matchResultExtraObjs = isEqual(extraObj1, extraObj2);
        return matchResultExtraObjs !== "Not same";
      }
      return array1[value] === array2[value];
    });
    return checkValues ? "Same" : "Not same";
  }
  return "Not same";
}
console.log(isEqual(a, b));

// 9. Напиши функцию toRoman(n), которая конвертирует число в римскую запись(в пределах от 1 до 3999).

// toRoman(58);  // "LVIII"
// toRoman(3999); // "MMMCMXCIX"

// 10. Напиши функцию myThrottle(fn, limit), которая будет вызывать функцию fn не чаще, чем раз в limit миллисекунд, даже если она вызывается несколько раз в этом интервале.

// const log = myThrottle(() => console.log("Hello!"), 1000);
// log();  // "Hello!" сразу
// log();  // игнорируется
// log();  // игнорируется
