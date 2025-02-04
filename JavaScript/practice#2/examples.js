//! Array.isArray

let arr = [1, 2, 3];
let notArray = "Hello, world!";

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(notArray)); // false

//! FIND

// let numbers = [4, 9, 12, 5, 18];

// Находим первое число больше 10
// let found = numbers.find(value => value > 10);

// console.log(found)

//!FINDINDEX

// let numbers = [4, 9, 12, 5, 18];

// Находим индекс первого числа больше 10
// let index = numbers.findIndex(num => num > 10);



//! FINDLAST

// let numbers = [4, 9, 12, 5, 18];

// // Находим последний элемент больше 10
// let lastFound = numbers.findLast(num => num > 10);

// console.log('lastFound', lastFound)
//! INDEXOF

let numbers = [4, 9, 12, 5, 12];

// Находим индекс первого вхождения 12
let index = numbers.indexOf(12);

console.log(index); // 2


//! LASTINDEXOF

// let numbers = [4, 9, 12, 5, 12];

// // Находим индекс последнего вхождения 12
// let lastIndex = numbers.lastIndexOf(12);






//! SPLICE

// let arr = [10, 20, 30, 40, 50];

// // Удаляем 2 элемента, начиная с индекса 1
// arr.splice(1, 2);


// let arr = [10, 20, 30];

// // Добавляем элементы 40 и 50, начиная с индекса 1
// arr.splice(1, 0, 40, 50);


// let arr = [1, 2, 3, 4, 5];

// // Заменяем 2 элемента, начиная с индекса 1, на 10 и 20
// arr.splice(1, 2, 10, 20);


// let arr = ['a', 'b', 'c', 'd'];

// // Удаляем 2 элемента, начиная с индекса 1, и добавляем 'z' в конец
// arr.splice(1, 2, 'z');



// Управление списком задач (удаление и замена задач)
let tasks = [
  { id: 1, task: 'Buy groceries', status: 'pending' },
  { id: 2, task: 'Clean the house', status: 'in-progress' },
  { id: 3, task: 'Read a book', status: 'pending' },
  { id: 4, task: 'Write report', status: 'completed' }
];

// Заменяем задачу с id=3 на новую задачу
tasks.splice(2, 1, { id: 3, task: 'Write code', status: 'in-progress' });
console.log('После замены задачи с id=3:', tasks);

// Удаляем завершённую задачу с id=4
let completedTaskIndex = tasks.findIndex(task => task.status === 'completed');
if (completedTaskIndex !== -1) {
  tasks.splice(completedTaskIndex, 1);
}
console.log('После удаления завершённой задачи:', tasks);


//! SLICE

let orders = [
  { id: 1, customer: 'Alice', amount: 30 },
  { id: 2, customer: 'Bob', amount: 20 },
  { id: 3, customer: 'Charlie', amount: 50 },
  { id: 4, customer: 'David', amount: 40 },
  { id: 5, customer: 'Eve', amount: 25 }
];

// Используем slice для извлечения первых 3 заказов
let todayOrders = orders.slice(0, 3);
console.log('Заказы на сегодня:', todayOrders);



//! FLAT 
let departments = [
  ['Apple', 'Banana', 'Orange'],
  ['Shirt', 'Jeans', 'Jacket'],
  ['Toothpaste', 'Shampoo', 'Soap']
];

// Используем flat для выравнивания всех товаров в один массив
let allProducts = departments.flat();
console.log('Все товары в магазине:', allProducts);


//! JOIN

let words = ['Hello', 'world', 'this', 'is', 'JavaScript'];

// Используем join для объединения слов в строку с пробелами между ними
let sentence = words.join(' ');

console.log('Полученное предложение:', sentence);





let movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010, genre: 'Sci-Fi', rating: 8.8 },
  { id: 2, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, genre: 'Action', rating: 9.0 },
  { id: 3, title: 'Parasite', director: 'Bong Joon-ho', year: 2019, genre: 'Thriller', rating: 8.6 },
  { id: 4, title: 'The Matrix', director: 'Lana Wachowski', year: 1999, genre: 'Sci-Fi', rating: 8.7 },
  { id: 5, title: 'Fight Club', director: 'David Fincher', year: 1999, genre: 'Drama', rating: 8.8 },
  { id: 6, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, genre: 'Crime', rating: 9.2 }
];


let products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 50 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 799.99, stock: 150 },
  { id: 3, name: 'Table', category: 'Furniture', price: 129.99, stock: 30 },
  { id: 4, name: 'Chair', category: 'Furniture', price: 59.99, stock: 75 },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 199.99, stock: 200 },
  { id: 6, name: 'Blender', category: 'Home Appliances', price: 49.99, stock: 100 }
];


let employees = [
  { id: 1, name: 'John Doe', department: 'Engineering', position: 'Software Engineer', salary: 90000 },
  { id: 2, name: 'Jane Smith', department: 'Marketing', position: 'Marketing Manager', salary: 75000 },
  { id: 3, name: 'Bob Johnson', department: 'Sales', position: 'Sales Representative', salary: 60000 },
  { id: 4, name: 'Alice Brown', department: 'HR', position: 'HR Specialist', salary: 65000 },
  { id: 5, name: 'Charlie Davis', department: 'Finance', position: 'Financial Analyst', salary: 85000 }
];

// const employee = employees.find(v => v.department === 'HR' && v.salary > 5000 )
// console.log(employee)


let students = [
  { id: 1, name: 'Alice', age: 22, major: 'Computer Science', gpa: 3.8 },
  { id: 2, name: 'Bob', age: 24, major: 'Mathematics', gpa: 3.5 },
  { id: 3, name: 'Charlie', age: 21, major: 'Physics', gpa: 3.9 },
  { id: 4, name: 'David', age: 23, major: 'Electrical Engineering', gpa: 3.7 },
  { id: 5, name: 'Eve', age: 22, major: 'Biology', gpa: 3.6 },
  { id: 6, name: 'Frank', age: 25, major: 'Economics', gpa: 3.4 }
];


// students.indexOf({ id: 3, name: 'Charlie', age: 21, major: 'Physics', gpa: 3.9 })