interface ICompany{
    name: string,
    debts: number,
    departments: Depatrment;
    managment:{
        owner: string
    }
}

interface Depatrment{
    [key: string]: string
}
//---------------------
const debts = 'debts'
type CompanyDebtsType = ICompany[typeof debts]
//-------------------

// type CompanyDebtsType = ICompany['debts']
type CompanyOwnerType = ICompany['managment']['owner']
type CompanyDepartType = ICompany['departments']
type CompanyDepartTypes = ICompany['departments'][number] //для массива


type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = 'name'

function printDepts<T extends object, K extends keyof T, S extends keyof T, >(company: T, name: K, debts: S){
    console.log(`Company ${company[name]}, depts: ${company[debts]}`)
}

const google: ICompany = {
    name: 'google',
    debts: 50000,
    departments: {
        sales: 'sales',
        developer: 'dev'
    },
    managment: {
        owner: 'Gregory'
    }
}


printDepts(google, 'name', 'debts')


type GoogleKeys = keyof typeof google



export {}