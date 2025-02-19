const massage: string|number = '' 

const massages: string[] | number[] = ['a', 'b']

function primtMsg1(msg: string|number): void{
    if(typeof msg === 'string'){
        console.log(msg.toUpperCase())
    } else{
        console.log(msg.toExponential())
    }
    
}


function primtMsg2(msg: string[] | number | boolean): void{
    if(Array.isArray(msg)){
        msg.forEach(m=>console.log(m))
    } else if (typeof msg === 'number'){
        console.log(msg.toFixed(2))
    } else{
        console.log(msg)
    }
    
}


const printReadings = (a: number | string, b: number | boolean)=>{
    if(a === b){
        console.log(a, b)
    }
}

const printReadings2 = (a: number[] | string)=>{
    console.log(a.slice(0,3))
}

function checkReadings(readings: {system:number} | {user:number}): void{
    if('system' in readings){
        console.log(readings.system)
    } else{
        console.log(readings.user)
    }
}

function logValue(x: string | Date):void{
    if(x instanceof Date){
        console.log(x.getDate)
    } else{
        console.log(x.toLocaleUpperCase())
    }
}