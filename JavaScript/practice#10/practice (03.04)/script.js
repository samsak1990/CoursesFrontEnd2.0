const addBodyElem = (elem) => document.body.append(elem);

// Создай 3 кнопки. При наведении курсора на любую из них должна меняться её надпись на `"Навели!"`, а при уходе мыши — обратно на `"Кнопка N"`.
for (let i = 1; i <= 3; i++) {
  const buttonText = "Кнопка " + i;
  const buttonChanging = document.createElement("button");
  buttonChanging.textContent = buttonText;
  buttonChanging.style.width = "100px";
  addBodyElem(buttonChanging);

  buttonChanging.addEventListener("mouseover", () => {
    buttonChanging.textContent = "Навели!";
  });

  buttonChanging.addEventListener("mouseout", () => {
    buttonChanging.textContent = buttonText;
  });
}

// Сделай блок `<div>` размером 200x200px. При клике на него цвет должен случайным образом меняться.

const squareDiv = document.createElement("div");
squareDiv.style.width = "200px";
squareDiv.style.aspectRatio = 1;
squareDiv.style.border = "1px solid black";
squareDiv.style.backgroundColor = "#223442";
addBodyElem(squareDiv);

function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

squareDiv.addEventListener("click", function () {
  const currentColor = this.style.backgroundColor;
  const newColor = getRandomColorRGB();
  squareDiv.style.backgroundColor = newColor;
});

// Создай текстовое поле. При вводе текста в нём отображай, какая клавиша была нажата (`event.key`).
const textArea = document.createElement("textarea");
addBodyElem(textArea);
const span = document.createElement("span");
textArea.insertAdjacentElement("afterend", span);
textArea.addEventListener("keydown", (event) => {
  span.textContent = "Нажата клавиша - " + event.key.toUpperCase();
});

// Сделай квадрат, который можно двигать по странице стрелками (вверх/вниз/влево/вправо).

let moveVertical = 0,
  moveHorizontal = 0;

const moverBox = document.createElement("div");
moverBox.style.width = "150px";
moverBox.style.aspectRatio = 1;
moverBox.style.textAlign = "center";
moverBox.style.backgroundColor = "pink";
moverBox.style.position = "absolute";
moverBox.style.top = moveVertical + "px";
moverBox.style.right = moveHorizontal + "px";
moverBox.textContent = "Я могу двигаться. Для начала кликни на меня!";
moverBox.setAttribute("tabindex", 0);
addBodyElem(moverBox);

const funcMover = (event) => {
  switch (event.key) {
    case "ArrowDown":
      moveVertical += 5;
      moverBox.style.top = moveVertical + "px";
      break;
    case "ArrowUp":
      moveVertical -= 5;
      moverBox.style.top = moveVertical + "px";
      break;
    case "ArrowLeft":
      moveHorizontal += 5;
      moverBox.style.right = moveHorizontal + "px";
      break;
    case "ArrowRight":
      moveHorizontal -= 5;
      moverBox.style.right = moveHorizontal + "px";
      break;
  }
};

moverBox.addEventListener("focus", () => {
  document.body.style.overflowY = "hidden";
  moverBox.style.border = "2px solid red";
  moverBox.textContent = "А теперь двигай меня стелками на клавиатуре";
  document.addEventListener("keydown", funcMover);
  moverBox.addEventListener("blur", () => {
    document.body.style.overflowY = "scroll";
    document.removeEventListener("keydown", funcMover);
    moverBox.style.border = "none";
    moverBox.textContent = "Я могу двигаться. Для начала кликни на меня!";
  });
});

// Реализуй кнопку "Наверх", которая появляется при прокрутке вниз на 300px и по нажатию плавно возвращает наверх страницы.
const upBtn = document.createElement("button");
upBtn.classList.add("upBtn");
upBtn.textContent = "UP";
addBodyElem(upBtn);

function funcGoUp(event) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 300) {
    upBtn.style.display = "block";
    upBtn.addEventListener("click", funcGoUp);
  } else {
    upBtn.style.display = "none";
    upBtn.removeEventListener("click", funcGoUp);
  }
});

// Покажи лоадер(анимацию загрузки), который исчезает только после полной загрузки страницы(событие`load`). (лоадер можно взять на этом сайте: https://cssloaders.github.io/)
const loader = document.querySelector(".wrapLoader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
    textArea.classList.add("highlight");
  }, 3000);
});

// После загрузки страницы подсвети все элементы с классом `highlight` жёлтым цветом.

// Есть список `<ul>` с элементами`<li>`.При клике на любой `li` элемент — он выделяется(меняет фон).Реализуй через делегирование на`ul`.

function paintingElementBlue(e) {
  const elementsLi = document.querySelectorAll("ul li");
  for (let elem of elementsLi) {
    elem.style.backgroundColor = "inherit";
  }
  e.target.style.backgroundColor = "blue";
}

const list = document.createElement("ul");
for (let i = 0; i <= 5; i++) {
  const elem = document.createElement("li");
  elem.textContent = "Элемент " + i;
  elem.style.cursor = "pointer";
  elem.addEventListener("click", (e) => paintingElementBlue(e));
  list.appendChild(elem);
}
document.body.append(list);

// На основе массива products:
const products = [
  { name: "Ноутбук", price: 1500 },
  { name: "Смартфон", price: 800 },
  { name: "Наушники", price: 200 },
];
// Отобрази элементы в виде маркированного списка
// Добавь кнопку «Показать только дорогие товары(цена > 1000)».
// При нажатии — отобрази только те товары, что стоят больше 1000.

const listProducts = document.createElement("ul");
addBodyElem(listProducts);

products.forEach((prod) => {
  const elem = document.createElement("li");
  elem.textContent = `Товар: ${prod.name}; Цена: ${prod.price}`;
  listProducts.appendChild(elem);
});

const sortBtn = document.createElement("button");
sortBtn.textContent = "цена > 1000";
listProducts.insertAdjacentElement("beforebegin", sortBtn);

sortBtn.addEventListener("click", () => {
  listProducts.innerHTML = "";
  products.forEach((prod) => {
    if (prod.price > 1000) {
      const elem = document.createElement("li");
      elem.textContent = `Товар: ${prod.name}; Цена: ${prod.price}`;
      listProducts.appendChild(elem);
    }
  });
});

// Отобрази товары в виде карточек:
// — Картинка, название, цена
// — Кнопка «Купить» (пока без функционала)

const products2 = [
  {
    name: "Кофеварка",
    price: 4500,
    image: "https://img.sila.by/catalog/img7/tovar75820.jpg",
  },
  {
    name: "Тостер",
    price: 2300,
    image:
      "https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/114/951/ctov2103gr_delonghi_5530c53166cf1.jpeg",
  },
  {
    name: "Миксер",
    price: 1800,
    image: "https://images.deal.by/413620812_mikser-planetarnyj-kitchenaid.jpg",
  },
];

const cardsBox = document.createElement("div");
cardsBox.classList.add("wrapperCards");

addBodyElem(cardsBox);

products2.forEach((prod) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.classList.add("imageProd");
  img.setAttribute("src", prod.image);
  const titleCard = document.createElement("h2");
  titleCard.textContent = prod.name;
  const price = document.createElement("h3");
  price.textContent = "price:" + prod.price;
  const btnBuy = document.createElement("button");
  btnBuy.classList.add("btnBuy");
  btnBuy.textContent = "Buy now";
  card.appendChild(img);
  card.appendChild(titleCard);
  card.appendChild(price);
  card.appendChild(btnBuy);
  cardsBox.appendChild(card);
});
