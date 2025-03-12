

function processingData<T>(data: T): T{
    return data
}
console.log(processingData(1))
console.log(processingData('1'))

const res = processingData<number>('10')
const res1 = processingData<number>(10)

interface IPrintUK{
    design: number
}

interface IPrintES{
    design: string
}

interface IPrint<T> {
    design: T
}

const somePrint: IPrint<string> = {
    design: 'ten'
}

const someOterPrint: IPrint<number> = {
    design: 10
}
