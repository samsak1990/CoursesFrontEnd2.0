interface IUser {
    login: string,
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

let dbName: string;
sendUserData(user, 'fwsfewf')

console.log(dbName!)

function sendUserData(obj: IUser, db?: string): void {
    dbName = '2154';
    console.log(obj.parents!.dad, db?.toLocaleLowerCase())
} 

export {}