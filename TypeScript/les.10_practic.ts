const currRate = "1.05";

const fetchCurr = (response: string): number => {
  const data = JSON.parse(response);
  return data;
};

function transferEurToUsd(
  available: boolean,
  amount: number,
  commission: number
): void {
  if (available) {
    let res = fetchCurr(currRate) * amount * commission;
    console.log(res);
    // Или запись в элемент на странице вместо консоли
  }
}

console.log(transferEurToUsd(true, 500, 1.05));
