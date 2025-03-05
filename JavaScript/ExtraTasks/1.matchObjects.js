// Глубокое сравнение объектов
// 📌 Задача: Напиши функцию deepEqual(a, b), которая сравнивает два объекта с учетом вложенных структур.

const a = {
  list: [1, 2, 3, 4],
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

function deepEqualEASY(a, b) {
  return JSON.stringify(a) === JSON.stringify(b) ? "Same" : "Not same";
}

function deepEqualHARD(array1, array2) {
  const setKeysA = Object.keys(array1);
  const setKeysB = Object.keys(array2);

  if (setKeysA === setKeysB) {
    return "Objects is same";
  }

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
  } else return "Not same";
}

console.log(deepEqualHARD(a, b)); // true

// function deepEqualHARD(a, b) {
//   const setKeysA = Object.keys(a);
//   const setValuesA = Object.values(a);
//   const setKeysB = Object.keys(b);
//   const setValuesB = Object.values(b);

//   if (a === b) {
//     return "Objects is same";
//   }

//   if (
//     setKeysA.length == setKeysB.length &&
//     setKeysA.every((key) => setKeysB.includes(key))
//   ) {
//     const checkValues = setValuesA.every((value, index) => {
//       if (value instanceof Array && setValuesB[index] instanceof Array) {
//         const array1 = value;
//         const array2 = setValuesB[index];
//         const matchResult = array1.every((val, index) => {
//           return val === array2[index];
//         });
//         return matchResult;
//       }
//       if (value instanceof Object && setValuesB[index] instanceof Object) {
//         const obj1 = value;
//         const obj2 = setValuesB[index];
//         const matchResult = deepEqualHARD(obj1, obj2);
//         return matchResult !== "Not same" ? true : false;
//       }
//       return value === setValuesB[index];
//     });
//     return checkValues ? "Same" : "Not same";
//   } else return "Not same";
// }
