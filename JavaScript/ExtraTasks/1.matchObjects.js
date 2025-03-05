// Глубокое сравнение объектов
// 📌 Задача: Напиши функцию deepEqual(a, b), которая сравнивает два объекта с учетом вложенных структур.

const a = {
  key1: 1,
  key2: 2,
  key3: [2, 3, 5, 6, 4],
  key4: "dd",
  key5: { tag: 5.5, str: "hi" },
};
const b = {
  key1: 1,
  key2: 2,
  key3: [2, 3, 5, 6, 4],
  key4: "dd",
  key5: { tag: 5.5, str: "hi" },
};

function deepEqualEASY(a, b) {
  return JSON.stringify(a) === JSON.stringify(b) ? "Same" : "Not same";
}

function deepEqualHARD(a, b) {
  const setKeysA = Object.keys(a);
  const setValuesA = Object.values(a);
  const setKeysB = Object.keys(b);
  const setValuesB = Object.values(b);

  if (a === b) {
    return "Objects is same";
  }

  if (
    setKeysA.length == setKeysB.length &&
    setKeysA.every((key, index) => key === setKeysB[index])
  ) {
    const checkValues = setValuesA.every((value, index) => {
      if (value instanceof Array && setValuesB[index] instanceof Array) {
        const array1 = value;
        const array2 = setValuesB[index];
        const matchResult = array1.every((val, index) => {
          return val === array2[index];
        });
        return matchResult;
      }
      if (value instanceof Object && setValuesB[index] instanceof Object) {
        const obj1 = value;
        const obj2 = setValuesB[index];
        const matchResult = deepEqualHARD(obj1, obj2);
        return matchResult !== "Not same" ? true : false;
      }
      return value === setValuesB[index];
    });
    return checkValues ? "Same" : "Not same";
  } else return "Not same";
}

console.log(deepEqualHARD(a, b));
