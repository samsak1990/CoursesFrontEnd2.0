class User<T, S>{
    name: T;
    age: S;

    constructor(name: T, age: S){
        this.age = age;
        this.name = name
    }

    sayMeFullName<T>(surname: T): string{
        if(typeof surname !== 'string'){
         return 'Some string'   
        }
        return `${this.name} ${surname}`
    }
}


class Admin<T> extends User<string, number>{
    rules: T;
}


const ivan = new User('Ivan', 30)

const nameData = 'Alex'
const ageData = 33
const alex = new User<string, number>(nameData, ageData)
console.log(ivan.sayMeFullName('Groth'))