// element.addEventListener(event, handler, options);

// event – строка с названием события (например, "click", "keydown", "mouseover").
// handler – функция, которая будет вызвана при наступлении события.
// options (необязательный параметр) – объект с дополнительными настройками (или просто useCapture: boolean).


const btn = document.querySelector('.btn');
// console.log(btn)
btn.addEventListener('click', (event) => {
  console.log('click', event)
})

// function handlerClick(event) {
//   console.log('click', event.target)
// }

// btn.addEventListener('click', handlerClick)

// btn.removeEventListener('click', handlerClick)

document.querySelector('.btn').addEventListener('click', (e) => {
  console.log('target', e.target);
  console.log('currentTarget', e.currentTarget);
})

// type - 	Тип события (click, keydown, input и т. д.)
// target - 	Элемент, на котором произошло событие
// currentTarget	- Элемент, к которому привязан обработчик 
// bubbles -	true, если событие всплывает
// cancelable -	Можно ли отменить (preventDefault())
// defaultPrevented	 - Был ли вызван preventDefault()
// timeStamp - 	Время с момента загрузки страницы


// element.addEventListener(event, handler, {
//   capture: false,  // Всплывающее (false) или перехватывающее (true) поведение
//   once: true,      // Выполнится только один раз
//   passive: true    // Не блокирует основной поток (актуально для touch-событий). Используется в событиях, связанных с прокруткой (wheel, touchstart, touchmove), чтобы браузер не блокировал их оптимизацию.
// });

////////////////////////////////////////

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Всплытие: клик по родителю!");
// });

// document.getElementById("child").addEventListener("click", () => {
//   console.log("Клик по кнопке!");
// });
