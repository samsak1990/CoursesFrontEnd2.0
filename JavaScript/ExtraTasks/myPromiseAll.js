// Реализация Promise.all с нуля //РЕШАЛ С ПОМОЩЬЮ Capilot
// 📌 Задача: Реализуй myPromiseAll, аналог Promise.all, который принимает массив промисов и возвращает промис, резолвящийся массивом результатов.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;

    if (promises.length == 0) {
      return resolve(results);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

myPromiseAll([promise1, promise2, promise3])
  .then((result) => result)
  .then((data) => console.log(data));

// function myPromiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completedPromises = 0;

//     if (promises.length === 0) {
//       resolve(results);
//       return;
//     }

//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then((result) => {
//           results[index] = result;
//           completedPromises++;

//           if (completedPromises === promises.length) {
//             resolve(results);
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   });
// }

// Пример использования:
