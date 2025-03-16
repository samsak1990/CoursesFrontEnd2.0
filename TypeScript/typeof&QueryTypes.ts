interface ICompany{
    name: string,
    debts: number,
    bank: number
}

type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = 'name'

function printDepts<T extends object, K extends keyof T, S extends keyof T, B extends keyof T>(company: T, name: K, debts: S, bank: B){
    console.log(`Company ${company[name]}, depts: ${company[debts]}, bank: ${company[bank]}`)
}

const hh: ICompany = {
    name: 'HH',
    debts: 50000,
    bank: 300000
}


const google = {
    name: 'Google',
    open: 'true',
    amount: 1000000
}

printDepts(google, 'name', 'open', 'amount')

printDepts(hh, 'name', 'debts', 'bank')


type GoogleKeys = keyof typeof google

const keys2: GoogleKeys = 'amount'

export {}