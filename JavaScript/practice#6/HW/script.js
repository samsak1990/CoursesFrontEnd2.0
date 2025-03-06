// 1. Функция debounce //РЕШАЛ И ГУГЛОМ
// Напишите функцию, которая будет «дебаунсить» вызов другой функции.Дебаунсинг означает, что вызов переданной функции будет отложен на заданное время, и если в это время произойдет новый вызов, предыдущий отменяется.
function debounce(func, wait = 0) {
  let prevTimeoutId;

  return (...args) => {
    console.log(args);
    clearInterval(prevTimeoutId);
    prevTimeoutId = setTimeout(() => {
      func(args);
    }, wait);
  };
}

// 2. Форматирование числа в строку с разделением разрядами
// Задача: Напишите функцию, которая принимает число и форматирует его, добавляя разделители разрядов (например, для числа 1234567 возвращается строка "1,234,567").

function separatorStrings(str, sep) {
  const formatString = String(str).trim();
  const rest = formatString.length % 3;
  const separated = [];

  if (!formatString || formatString === "" || formatString === "undefined") {
    return "String is not found";
  }
  if (rest) {
    separated.push(formatString.slice(0, rest));
  }
  for (let i = rest; i < formatString.length; i = i + 3) {
    separated.push(formatString.slice(i, i + 3));
  }
  return separated.join(",");
}

// console.log(separatorStrings(12145684845151));

// 3. Генерация случайного пароля
// Напишите функцию, которая генерирует случайный пароль длиной 12 символов, включающий заглавные и строчные буквы, цифры и специальные символы.

function getAllAsciiChars() {
  let chars = "";
  for (let i = 32; i < 127; i++) {
    // 32 до 126 для печатных символов ASCII
    chars += String.fromCharCode(i);
  }
  return chars;
}

function randomPasswordGenerator(length) {
  const symbols = getAllAsciiChars();
  let password = [];
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * symbols.length);
    password.push(symbols[randomIndex]);
  }
  return password.join("");
}

// console.log(randomPasswordGenerator(12));

// 4. Создайте функцию camelToSnake(str), которая превращает строку из camelCase в snake_case.

function camelToSnake(str) {
  return str
    .trim()
    .split("")
    .map((letter) => {
      if (letter.toUpperCase() === letter) {
        return "_" + letter.toUpperCase();
      }
      return letter;
    })
    .join("");
}

// console.log(camelToSnake("helloWorldIsNewCity"));

// camelToSnake("helloWorld"); // "hello_world"
// camelToSnake("someVariableName"); // "some_variable_name"

// 5. Методы строк: зашифровка
// Напишите функцию caesarCipher(str, shift), которая шифрует строку сдвигом букв по шифру Цезаря. (Используй charCodeAt и String.fromCharCode)

function caesarCipher(str, shift = 1) {
  let encryptedString = "";
  for (let i = 0; i < str.length; i++) {
    let currentCode = str.charCodeAt(i) + shift;
    console.log("1. ", currentCode);
    switch (true) {
      case currentCode > 1103:
        currentCode = 1072;
        break;
      case currentCode > 1071:
        currentCode = 1040;
        break;
      case currentCode > 122:
        currentCode = 97;
        break;
      case currentCode > 90:
        currentCode = 65;
        break;
      case currentCode > 57:
        currentCode = 48;
        break;
      default:
        currentCode;
        break;
    }
    console.log("2. ", currentCode);
    encryptedString += String.fromCharCode(currentCode);
  }
  console.log(encryptedString);
  return encryptedString;
}
// caesarCipher("az", 1);
// caesarCipher("AZ", 1);
// caesarCipher("ая", 1);
// caesarCipher("АЯ", 1);
// caesarCipher("09", 1);
caesarCipher("helloz", 3); // "khoor"
caesarCipher("abc", 1); // "bcd"

// let currentCode = "z".charCodeAt(0) + 1;
// switch (true) {
//   case currentCode > 1103:
//     currentCode = 1072;
//     break;
//   case currentCode > 1071:
//     currentCode = 1040;
//     break;
//   case currentCode > 122:
//     currentCode = 97;
//     break;
//   case currentCode > 90:
//     currentCode = 65;
//     break;
//   case currentCode > 57:
//     currentCode = 48;
//     break;
//   default:
//     currentCode;
//     break;
// }
// console.log(currentCode);

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
      ff: 7,
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
      ff: 7,
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
      const extraElem1 = array1[value];
      const extraElem2 = array2[value];
      if (extraElem1 instanceof Array && extraElem2 instanceof Array) {
        const matchResultExtraArrs = extraElem1.every((value) => {
          if (extraElem1.length === extraElem2.length)
            return extraElem2.includes(value);
        });
        return matchResultExtraArrs;
      }
      if (extraElem1 instanceof Object && extraElem2 instanceof Object) {
        const matchResultExtraObjs = isEqual(extraElem1, extraElem2);
        return matchResultExtraObjs !== "Not same";
      }
      return extraElem1 === extraElem2;
    });
    return checkValues ? "Same" : "Not same";
  }
  return "Not same";
}
// console.log(isEqual(a, b));

// 9. Напиши функцию toRoman(n), которая конвертирует число в римскую запись(в пределах от 1 до 3999).

// toRoman(58);  // "LVIII"
// toRoman(3999); // "MMMCMXCIX"

// 10. Напиши функцию myThrottle(fn, limit), которая будет вызывать функцию fn не чаще, чем раз в limit миллисекунд, даже если она вызывается несколько раз в этом интервале.

// const log = myThrottle(() => console.log("Hello!"), 1000);
// log();  // "Hello!" сразу
// log();  // игнорируется
// log();  // игнорируется
