// Паша Написать функцию, которая принимает массив, добавляет новый элемент в начало с использованием unshift, и удаляет последний элемент с помощью pop. 
// Вернуть измененный массив.


const changeArray = (array)=>{
    array.pop()
    array.unshift('New element')
    return array
}

console.log(changeArray([1,2,3,4]))


const header = document.queryScreateElementlector('header')
window.addEventListener('scroll', ()=>{
    if(window.screenY > 100){
        header.style.position = 'fixed'
    }
})