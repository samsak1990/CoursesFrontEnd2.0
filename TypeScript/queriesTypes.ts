const dataFormControl = {
  water: 200,
  el: 350,
};

function checkReadings(data: typeof dataFormControl): boolean {
  const dataFromUser = {
    water: 200,
    el: 350,
  };

  if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
    console.log(true);
    return true;
  } else {
    return false;
  }
}

const PI = 3.14;
let PIClone: typeof PI;

PIClone = 3.14;

console.log(PIClone);
