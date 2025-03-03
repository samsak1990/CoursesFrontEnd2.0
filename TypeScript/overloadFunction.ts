interface ISquare {
  side: number;
  area: number;
}

interface IRect {
  a: number;
  b: number;
  area: number;
}

function calcArea(side: number, d: number): ISquare;
function calcArea(a: number, b: number, c: number): IRect;
function calcArea(
  a: number,
  b?: number,
  c?: number,
  d?: number
): ISquare | IRect {
  if (b) {
    const rect: IRect = {
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: ISquare = {
      side: a,
      area: a * a,
    };
    return square;
  }
}

calcArea(1);
calcArea(1, 2);
