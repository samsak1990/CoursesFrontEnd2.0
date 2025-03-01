let num: Number = new Number(5)
let num2: number = Number(5)
let num3: number = 5

num = num2 //correct
num2 = num //wrong


const lit = 5
const strLit: string = lit.toString()
const str = '5'
const numStr: number = +str


interface IDepartment{
    name: string,
    budget: number
}

const department: IDepartment = {
    name: 'WebDev',
    budget: 50000
}

interface IProject{
    name: string,
    projectBudget: number
}

// const mainProject: IProIProjectgect = {  //includes property then don't need
//     ...department,
//     projectBudget: 5000
// }

function transformDepartment(department: IDepartment, amount: number): IProject{
    return {
        name: department.name,
        projectBudget: amount
    }
}

const mainProject: IProject = transformDepartment(department, 5000)

export{}