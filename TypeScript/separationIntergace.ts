// preferable don't use the complex interfaces, better use a little personal interfaces for each object

// interface ICar {
//   name: "car";
//   engine: string;
//   wheels: {
//     count: number;
//     radius: number;
//   };
// }

// interface IShip {
//   name: "ship";
//   engine: string;
//   sail: string;
// }

// interface IAirplane {
//   name: "airplane";
//   engine: string;
//   wings: string;
// }

// type TVehicle = ICar | IShip | IAirplane;

interface IComplexVehicle {
  name: "car" | "ship" | "airplane";
  engine: string;
  wheels?: number;
  sail?: string;
  wings?: string;
}

function isCar(car: TVehicle): car is ICar {
  // return 'wheels' in car //var 1
  return (car as ICar).wheels.radius !== undefined; //var 2
}

function isShip(ship: TVehicle): ship is IShip {
  return "sail" in ship; //var 1
}

const car: IComplexVehicle = {
  name: "car",
  engine: "V8",
};

function repairVehicle(vehicle: IComplexVehicle) {
  switch (vehicle.name) {
    case "car":
      console.log(vehicle.wheels! * 2);
      break;
    case "ship":
      console.log(vehicle.sail);
      break;
    case "airplane":
      console.log(vehicle.wings);
      break;
    default:
      // const smth: never = vehicle; // this method doesn't work at complex interface
      console.error("Error type data!");
  }
}

repairVehicle(car);

export {};
