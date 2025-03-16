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
        listNew: [1, 2],
        ff: 7,
      },
    },
  };

function isEqual(obj1, obj2) {
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
  
console.log(isEqual(a,b))