type Currencies = {
  usa: "usd";
  chine: "cny";
  readonly unraine: "uah";
  kz?: "tenge";
};

// type CustomCurrensies = {
//   usa: string;
//   chine: string;
//   unraine: string;
//   kz: string;
// };

type CreateCustomCurr<T> = {
  //   [P in keyof T]: string;
  //   +readonly [P in keyof T]+?: string; // - делает все свойства НЕ обязательными
  -readonly [P in keyof T]-?: string; // - делает все свойства обязательными
};

type CustomCurrensies = CreateCustomCurr<Currencies>;

// type СопоставимыйТип = {
//     [произвольныйИдентификатор in Множество] : ПроизвольныйТипДанных
// }

type Keys = "name" | "age" | "role";

type User = {
  [K in Keys]: string;
};

const alex: User = {
  name: "Alex",
  age: "25",
  role: "admin",
};

export {};
