// 1.  Фильтрация объектов по свойству 
// Отфильтровать массив объектов, чтобы остались только те, у которых возраст больше 18 лет.

const people = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
];


// 2.  Применение преобразования ко всем элементам 
// Преобразовать массив объектов, добавив к каждому имени суффикс " (VIP)".

const users = [
  { name: 'John', role: 'user' },
  { name: 'Jane', role: 'admin' },
];

// 3.  Поиск первого объекта, удовлетворяющего условию 
// Найти первого пользователя с ролью "admin".

const users = [
  { name: 'Alice', role: 'user' },
  { name: 'Bob', role: 'admin' },
  { name: 'Charlie', role: 'user' },
];


// 4.  Проверка наличия объекта, удовлетворяющего условию
// Проверить, есть ли в массиве объект с ролью "admin".

const users = [
  { name: 'Alice', role: 'user' },
  { name: 'Bob', role: 'admin' },
  { name: 'Charlie', role: 'user' },
];



// 5.  Преобразование массива в объект  
// Преобразовать массив объектов в объект, где ключами будут имена, а значениями — возраста.

const people = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 },
];


// 6.  Группировка объектов по свойству 
// Разделить пользователей на группы по их роли.

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
];


// 7.  Получение всех значений определенного свойства 
// Извлечь все имена пользователей.

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'user' },
];

// 8.  Проверка всех элементов на условие
// Проверить, все ли пользователи старше 18 лет.

const people = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 },
];



// 9.  Сортировка массива объектов по числовому полю Отсортировать массив пользователей по возрасту.

const people = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 18 },
];

// 10.  Удаление объектов по условию 
// Удалить все объекты с ролью "user".

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'user' },
];

// 11.  Объединение нескольких массивов объектов 
// Объединить два массива пользователей в один.

const admins = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'admin' },
];

const users = [
  { name: 'Charlie', role: 'user' },
  { name: 'David', role: 'user' },
];


// 12.  Подсчет количества элементов в массиве по условию
// Посчитать, сколько пользователей имеют роль "user".

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'user' },
];



// 13.  Извлечение объекта по ключу 
// Найти пользователя по имени.

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
];


console.log(findUser('Bob')); // { name: 'Bob', role: 'user' }


// 14.  Преобразование объектов в строки с помощью`join` 
// Получить строку, содержащую имена пользователей через запятую.

const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
];

console.log(namesString); // "Alice, Bob"


// 15.  Агрегирование данных 
// Посчитать средний возраст всех пользователей.

const users = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
];

// 16. Обновление объектов в массиве по условию
// Обновить возраст всех пользователей с ролью "user", увеличив его на 1.

const users = [
  { name: 'Alice', role: 'admin', age: 22 },
  { name: 'Bob', role: 'user', age: 30 },
  { name: 'Charlie', role: 'user', age: 25 },
];








