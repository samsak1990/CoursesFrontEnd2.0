// 1. Вывести числа от 1 до 10
// Используйте for и while, чтобы вывести числа от 1 до 10.

// let i = 0
// while(i<10){
// i++
// console.log(i)}

// for(let i=0; i<=10; i++){
//     console.log(i)
// }


// 2. Вывести числа от 10 до 0
// let e = 10;
// while (e>= 0){
// e--
// console.log(e)
// }

// 3. Вывести все четные числа от 1 до 20, пропуская 10
// Используйте for и continue, чтобы пропустить число 10.
// for (let i = 1; i<=20; i++) {
//   if (i === 10) {
//       continue;
//   }
//   if (i % 2 === 0){
//       console.log(i)
//   }
// }

// for (let i = 2; i<=20; i+=2) {
//   if (i === 10) continue;
//    console.log(i)
// }

// 4. Подсчитать сумму всех нечетных чисел от 1 до 50
// Используйте for и continue, чтобы пропускать четные числа и суммировать только нечетные.
// let summ = 0

// for(let i = 1; i <= 50; i++){
//     if(i%2 !== 0){
//         summ += i
//     } 
// }

// 5. Вывести таблицу умножения для числа n
// Используйте for, чтобы вывести таблицу умножения для числа n(от 1 до 10).
// let  n = 5
// for ( let i=1; i<=10; i++){
//  console.log (i*n)}

// 6. Найти первое число больше 1000, которое делится на 17 без остатка.

// const y = 1000

// do {
//     y++
// } while (y % 17 === 0)


// 7. Создай объект bankAccount с методами:
// deposit(amount): пополняет баланс
// withdraw(amount): снимает деньги, но не больше текущего баланса
// getBalance(): возвращает текущий баланс
const bankAccount = {
  balance: 0,
  deposit(amount) {
      this.balance +=amount;
      return this.balance
  },
  withdraw(amount) {
      if(amount <= this.balance) {
        this.balance -=amount;  
      }
      
      if (amount > this.balance) {
          return this.balance
      } else {
          this.balance -=amount;
      }
  },
  getBalance() {
      return this.balance
  }
  
}


// 8. Напиши функцию checkLogin(username, password), которая проверяет логин и пароль. Доступные пользователи хранятся в объекте, есть пользователя с таки ём логином нет функция возвращает "Пользователь не найден", если есть проверяет пароль и возвращает "Доступ разрешен" или "Ошибка авторизации".

const users = {
  "admin": "1234",
  "user": "qwerty",
  "guest": "guest"
};


function checkLogin(username, password) {
  let value = users[username]
  if (value) {
    if (value === password) {
      console.log("Доступ разрешен")
    } else {
      console.log("Ошибка авторизации")
    }
  } else {
    console.log('Пользователь не найден!')
  }
}

// console.log(checkLogin("admin", "1234"));


// 10. Функция detectDevice(os, screenSize) должна возвращать "Мобильное", если os  "Android" или "iOS", и "Настольное", если screenSize > 1024.


const detectDevice = (os, screenSize)=>{
  return os === "Android" || os === "iOS" ? 'Мобильное' : screenSize > 1024 ?  "Настольное" : ''
}

console.log(detectDevice("Android", 800));
console.log(detectDevice("Windows", 1200));


// 11. Добавление товара:
// Пользователь вводит название товара и цену.
// Цена приводится к числу (Number()).
// Название товара приводится к строке (String()).
// Если цена не введена, по умолчанию считать 0.
// Если цена отрицательная — игнорировать ввод
// Вывести дпнные к консоль

// let product = String(prompt('Введите название товара:'))
// let price = Number(prompt('Введите цену товара:'))

function showCardProduct(product, price = 0){
  return price < 0 ? product : [product, price]
}

// console.log(showCardProduct(product, price))

// 12. Напишите функцию, которая будет опередять стоимость доставки 
// 0–1000: доставка 20 руб.
// 1001–5000: 10 руб.
// 5001+: бесплатно.

// let val = Number(prompt('Введите количество: '));

function calculateDelivery(value) {
  let cost;
  if (value > 0) {
    if (value <= 1000) {
      cost = 20;
    } else if (value <= 5000) {
      cost = 10;
    } else if (value > 5000) {
      cost = 'бесплатно';
    }
  } else {
    cost = 'не указано';
  }
  return `Стоимость доставки: ${cost}`;
}

// console.log(calculateDelivery(val))

// 13. Бронирование мест: Программа управляет залом из 10 мест, где каждое место — ключ объекта.
// Запросить номер (Number()).
// Если false, установить true, иначе вывести "Место занято".

const cinemaHall = {
  1: false,
  2: false,
  3: true,
  5: false,
  6: false,
  7: true,
  8: true,
  9: true,
  10: false
}

let seat = Number(prompt('Введите номер вашего места до 1 до 10: '))

function toBookSeat(seat){
  return !cinemaHall[seat] ? cinemaHall[seat] = true : 'Место занято'
}

console.log(toBookSeat(seat), cinemaHall)