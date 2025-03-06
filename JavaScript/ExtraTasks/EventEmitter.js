// Реализация EventEmitter
// 📝Описание
// Нужно реализовать класс EventEmitter, который позволяет работать с событиями. Этот класс должен поддерживать:
// Подписку на события (on) – позволяет добавить обработчик для конкретного события.
// Одноразовые подписки (once) – обработчик сработает только один раз, после чего удалится.
// Отписку (off) – удаляет обработчик события.
// Вызов события (emit) – вызывает все подписанные обработчики события.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, fn) {
    if (typeof fn !== "function") {
      throw new Error("Function wasn't passed in second proper!");
    }
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(fn);
  }

  once(type, fn) {
    const reFn = (data) => {
      fn(data);
      this.off(type, reFn);
    };
    this.on(type, reFn);
  }

  off(type, fn) {
    if (!this.events[type]) {
      throw new Error("Function is not found in system!");
    }
    this.events[type] = this.events[type].filter((funcEvents) => {
      return funcEvents !== fn;
    });
  }

  emit(type, data) {
    if (!this.events[type]) {
      throw new Error("Method is not found in system!");
    }
    this.events[type].forEach((func) => {
      func(data);
    });
  }
}

function onMessage(data) {
  console.log("Получено сообщение:", data);
}

const emitter = new EventEmitter();

emitter.on("message", onMessage);
emitter.emit("message", "Hello!");
emitter.emit("message", "Hello again!");
emitter.off("message", onMessage);
emitter.emit("message", "Hello!");
emitter.once("greet", (name) => console.log(`Hello, ${name}!`));
emitter.emit("greet", "Андрей");
emitter.emit("greet", "Андрей");
