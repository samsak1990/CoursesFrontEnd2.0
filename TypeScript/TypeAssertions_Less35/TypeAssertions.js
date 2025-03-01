const fetchData = (url, method) => {
    console.log('Fetched!');
};
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
};
// fetchData(reqOptions.url, reqOptions.method as "GET")
fetchData(reqOptions.url, reqOptions.method);
/////////////////////////////////////////////////////////////////
const box = document.querySelector('.box');
const input = document.querySelector('input');
const someNumber = input.value;
console.log(someNumber * 2);

