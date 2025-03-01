const fetchData = (url: string, method: "GET"|"POST"):void => {
    console.log('Fetched!')
}

// const reqOptions = {
//     url: "https://some.url",
//     method: 'GET' as 'GET'
// }

// const reqOptions = {
//     url: "https://some.url",
//     method: 'GET'
// } as const


const reqOptions = {
    url: "https://some.url",
    method: 'GET'
}
 

// fetchData(reqOptions.url, reqOptions.method as "GET")
fetchData(reqOptions.url, <"GET">reqOptions.method)


let a = 'value' as const

/////////////////////////////////////////////////////////////////


const box = document.querySelector('.box') as HTMLElement
// const input = document.querySelector('input') as HTMLInputElement //var 1
const input = <HTMLInputElement>document.querySelector('input') //don't work in React


const someNumber1: number = input.value as any as number //recomend dom't use it
const someNumber2: number = +input.value //recomend
console.log(someNumber2 * 2)