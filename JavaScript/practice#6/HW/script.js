// 1. Функция debounce //РЕШАЛ И ГУГЛОМ
// Напишите функцию, которая будет «дебаунсить» вызов другой функции.Дебаунсинг означает, что вызов переданной функции будет отложен на заданное время, и если в это время произойдет новый вызов, предыдущий отменяется.
function debounce(func, wait = 0) {
  let prevTimeoutId;

  return (...args) => {
    console.log(args);
    clearTimeout(prevTimeoutId);
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
    switch (true) {
      case currentCode > 1103:
        currentCode = 1072;
        break;
      case currentCode > 1071 && currentCode < 1072:
        currentCode = 1040;
        break;
      case currentCode > 122 && currentCode < 1040:
        currentCode = 97;
        break;
      case currentCode > 90 && currentCode < 97:
        currentCode = 65;
        break;
      case currentCode > 57 && currentCode < 65:
        currentCode = 48;
        break;
    }
    encryptedString += String.fromCharCode(currentCode);
  }
  console.log(encryptedString);
  return encryptedString;
}

// caesarCipher("hellozz1", 3); // "khooraa4"
// caesarCipher("abc", 1); // "bcd"

// 6. Реализация метода groupBy для массива объектов
// Напиши функцию groupBy(arr, key), которая группирует массив объектов по заданному ключу key.Функция должна возвращать объект, где ключами будут значения из поля key, а значениями — массивы объектов, содержащие эти значения.

// groupBy([
//   { id: 1, category: "A" },
//   { id: 2, category: "B" },
//   { id: 4, category: "A" },
//   { id: 2, category: "B" },
//   { id: 2, category: "c" },
// ], "category");
// { A: [{ id: 1, category: "A" }, { id: 3, category: "A" }], B: [{ id: 2, category: "B" }] }

function groupBy(arr, key) {
  if (arr.length == 0) {
    return "Array is empty";
  }
  const result = arr.reduce((acc, obj) => {
    let currentKey = obj[key];
    if (!acc[currentKey]) {
      acc[currentKey] = [];
    }
    acc[currentKey].push(obj);
    return acc;
  }, {});
  console.log(result);
  return result;
}

// 7. Реализация метода memoize для вычислений //Привет ГУГЛ
// Напишите функцию memoize, которая будет запоминать результаты вычислений для определенных входных параметров.Если функция будет вызвана с теми же параметрами, результат должен быть взят из кеша (localStorage или просто объект в программе).

function memoize(func) {
  const cash = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cash[key]) return "From cash - " + cash[key];
    const result = func(...args);
    cash[key] = func(...args);
    console.log(cash);
    return "Complite calc - " + result;
  };
}

function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

const memoAdd = memoize(add);
const memoMinus = memoize(minus);

// console.log(memoAdd(1, 2));
// console.log(memoAdd(2, 1));
// console.log(memoMinus(2, 1));

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
  add: "fff",
  key5: 2,
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
};

function isEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  const setKeysA = Object.keys(obj1);
  const setKeysB = Object.keys(obj2);


  if (
    setKeysA.length == setKeysB.length &&
    setKeysA.every((key) => setKeysB.includes(key))
  ) {
    const checkValues = setKeysA.every((value) => {
      const extraElem1 = obj1[value];
      const extraElem2 = obj2[value];
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



function isEqual2(obj1, obj2) {
  // Проверяем, являются ли аргументы объектами
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return obj1 === obj2;
  }

  // Получаем ключи объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Проверяем, что объекты имеют одинаковое количество ключей
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Рекурсивно сравниваем значения по ключам
  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key) || !isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
// console.log(isEqual(a, b));

// 9. Напиши функцию toRoman(n), которая конвертирует число в римскую запись(в пределах от 1 до 3999).
const arabicToRoman = {
  0: "",
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
};

function toRoman(n) {
  if (n < 1 || n > 3999) {
    throw new Error("Число должно быть в пределах от 1 до 3999");
  }
  return (
    arabicToRoman[Math.floor(n / 1000) * 1000] +
    arabicToRoman[Math.floor((n % 1000) / 100) * 100] +
    arabicToRoman[Math.floor((n % 100) / 10) * 10] +
    arabicToRoman[n % 10]
  );
}
// console.log(toRoman(3));
// toRoman(58);  // "LVIII"
// toRoman(3999); // "MMMCMXCIX"

//решение Capilot

// function toRoman(num) {
//   if (num < 1 || num > 3999) {
//     throw new Error("Число должно быть в пределах от 1 до 3999");
//   }

//   const romanNumerals = [
//     ["M", 1000],
//     ["CM", 900],
//     ["D", 500],
//     ["CD", 400],
//     ["C", 100],
//     ["XC", 90],
//     ["L", 50],
//     ["XL", 40],
//     ["X", 10],
//     ["IX", 9],
//     ["V", 5],
//     ["IV", 4],
//     ["I", 1]
//   ];

//   let result = "";

//   romanNumerals.forEach(([roman, value]) => {
//     while (num >= value) {
//       result += roman;
//       num -= value;
//     }
//   });

//   return result;
// }

// 10. Напиши функцию myThrottle(fn, limit), которая будет вызывать функцию fn не чаще, чем раз в limit миллисекунд, даже если она вызывается несколько раз в этом интервале.

function myThrottle(fn, limit) {
  let flag = true;
  return (...args) => {
    if (!flag) {
      console.log("System is busy. Please, try again later!");
    } else {
      flag = false;
      fn.apply(this, args); //this добавил по рекомендации из Интернета. В целом сиысл this здесь ясен, но все же нужно более делальное пояснение!!
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

const log = myThrottle(() => console.log("Hello!"), 1000);
log(); // "Hello!" сразу
log(); // игнорируется
log(); // игнорируется