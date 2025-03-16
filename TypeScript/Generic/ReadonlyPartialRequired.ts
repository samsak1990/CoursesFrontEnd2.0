const arr: Array<number> = [1,2,3]
const arr1: number[] = [1,2,3]

const roar: ReadonlyArray<string> = ['ada','dwqf']

interface IState{
    data: {
        name: string
    },
    tag?: string
}


const strictState: Required<IState> = { //все поля объекта становятся обязательными
    data: {
        name: 'ffa'
    },
    tag: 'feew'
}

const state: Partial<IState> = { //задает все поля интерфейса необязательными
    data: {
        name: 'Pasha'
    }
}

function action(state: Readonly<IState>){ //только для верхнего уровня объекта
    state.data.name = 'adc'
}

