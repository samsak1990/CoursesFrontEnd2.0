function processingData<T, S>(data: T[], options: S): string{
    data.lenght;
    switch (typeof data){
        case 'string':
            return `${data}, speed: ${options}`;
        case 'number':
            return `${data}, speed2: ${options}`;
        default:
            return 'Not valid'
    }
}


// const res = processingData<number>('10')
let res = processingData([10], 'fast')
let res1 = processingData(['1'], 'slow')
let res2 = processingData<number, string>([10], 'fast')

function processing<T>(data: T):T{
    return data
}

interface ProcessingFunc{
    <T>(data: T):T
}

let newFunc: ProcessingFunc = processing

interface DataSaver{
    // processing: <T>(data: T) => T
    // processing: typeof processing
    processing: ProcessingFunc
}

const saver: DataSaver = {
    // processing(data){
    //     console.log(data)
    //     return data
    // }
    // processing: <T>(data: T)=>{
    //     return data
    // }
    // processing: (data)=>{
    //     return data
    // }
    processing: processing
}

export {}