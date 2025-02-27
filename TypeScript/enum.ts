// const TOP = "Top";
// const RIGHT = "Right";

enum Directions {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

const enum TimingFunc {
  EASE = "ease",
  EASE_IN = "ease-in",
  LINEAR = "linear",
  //   ERROR = 5 - It's bad parctic using random type in one enum
}

const enum TimingFuncOn { //don't use cont enam, it maight to bring a problems
  EASE = 1,
  EASE_IN = 2,
  LINEAR = EASE * 2,
}

function frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
  if (dir === Directions.BOTTOM) {
    console.log(tFunc);
  }
}

frame("id", Directions.BOTTOM, TimingFunc.EASE_IN);
