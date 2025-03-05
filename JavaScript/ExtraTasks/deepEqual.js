// Глубокое сравнение объектов
// 📌 Задача: Напиши функцию deepEqual(a, b), которая сравнивает два объекта с учетом вложенных структур.

const a = {
  list: [1, 2, 3, 4, 5],
  key3: 1,
  key6: 2,
  obj: {
    tag1: "tag1",
    tag: "2",
  },
  add: "fff",
  key5: 2,
};
const b = {
  list: [1, 2, 4, 3],
  key3: 1,
  key6: 2,
  obj: {
    tag1: "tag1",
    tag: "2",
  },
  add: "fff",
  key5: 2,
};

// минус в том, что не сработает для разных последовательностей ключей
function deepEqualEASY(a, b) {
  return JSON.stringify(a) === JSON.stringify(b) ? "Same" : "Not same";
}

//другой вариант
function deepEqualHARD(array1, array2) {
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
        const matchResultExtraObjs = deepEqualHARD(extraObj1, extraObj2);
        return matchResultExtraObjs !== "Not same" ? true : false;
      }
      return array1[value] === array2[value];
    });
    return checkValues ? "Same" : "Not same";
  }
  return "Not same";
}

console.log(deepEqualHARD(a, b)); // true
