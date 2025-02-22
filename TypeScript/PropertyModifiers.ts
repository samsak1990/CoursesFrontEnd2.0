interface IUser {
    readonly login: string,
    password: string,
    age: number,
    // address?: string // if prop is nessesery
    address: string | undefined,
    parents?: {
        mom?: string,
        dad?: string
    }
}

const user: IUser = {
    login: 'Poulk',
    password: 'qwerty',
    age: 30,
    address: 'fwefwf'
}


const DBName = '123645'

function sendUserData(obj: IUser, db?: string): void {
    console.log(obj.parents?.dad, db?.toLocaleLowerCase())
} 

class Aniumal{
    readonly name: string = 'tiger'
}

const basicPorts: readonly number[] = [3000, 5000, 443, 80]
const basicPorts1: readonly [number, ...string[]] = [3000, 'fwef', 'fefw']