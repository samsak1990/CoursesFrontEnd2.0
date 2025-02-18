const electricityUserData: {
  readings: number;
  units: string;
  mode: string;
} = {
  readings: 95,
  units: "kWt",
  mode: "double",
};

const waterUserData: {
  readings: number;
  units: string;
} = {
  readings: 3,
  units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: [number, number] = [0, 0]; // [electricity, water]

const calculatePayments = (
  elData: { readings: number; mode: string },
  wData: { readings: number },
  elRate: number,
  wRate: number
): void => {
  if (elData.mode === "double" && elData.readings < 50) {
    monthPayments[0] = elData.readings * elRate * 0.7;
  } else {
    monthPayments[0] = elData.readings * elRate;
  }

  monthPayments[1] = wData.readings * wRate;
};

console.log(
  calculatePayments(electricityUserData, waterUserData, elRate, wRate)
);

const sendInvoice = (
  [electricity, water]: [number, number],
  electricityUserData: { readings: number; units: string },
  waterUserData: { readings: number; units: string }
): string => {
  const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${electricity}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${water}€`;

  return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));
