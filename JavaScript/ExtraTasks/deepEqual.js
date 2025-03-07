// Глубокое сравнение объектов
// 📌 Задача: Напиши функцию deepEqual(a, b), которая сравнивает два объекта с учетом вложенных структур.

const a = {
  list: [1, 2, 3, 4, 5],
  key3: 1,
  key6: 2,
  obj: {
    tag1: "tag1",
    tag: "2",
    newObj: {
      re: [5],
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
      re: [5],
    },
  },
  add: "fff",
  key5: 2,
};

// минус в том, что не сработает для разных последовательностей ключей
function deepEqualEASY(a, b) {
  return JSON.stringify(a) === JSON.stringify(b) ? "Same" : "Not same";
}

//другой вариант
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
console.log(isEqual(a, b)); // true
