function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    } else if (isNumber(msg)) {
        console.log(msg);
    } else {
        console.log(msg);
    }
    console.log(msg);
}

printMsg(4);

function isNumber(n: unknown): n is number{
    return typeof n === "number"
}

interface Car{
    engine: string,
    wheels: {
        count: number,
        radius: number
    }
}

interface Ship{
    engine: string,
    sail: string
}

function repairVehicle(vehicle: Car | Ship): void{
   if(isCar(vehicle)){
    vehicle.wheels
   } else if (isShip(vehicle)){
    vehicle.sail
   } else {
    vehicle 
   }
}

function isCar(car: Car | Ship): car is Car{
    // return 'wheels' in car //var 1
    return (car as Car).wheels.radius !== undefined //var 2
}

function isShip(ship: Car | Ship): ship is Car{
    return 'sail' in ship //var 1
}