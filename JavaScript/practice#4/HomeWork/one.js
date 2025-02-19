// 16. Найти сумму чисел, содержащих определенную цифру(`reduce` + `filter`)
// Создайте функцию`sumNumbersContainingDigit(arr, digit)`, которая суммирует только те числа, которые содержат указанную цифру.


const sumNumbersContainingDigit = (arr, num) =>{ 
  const filterArr = arr.filter(item=>{
    return String(item).includes(num.toString())
  })
  const result = filterArr.reduce((acc, elem)=>{
    return acc += elem
  }, 0)
  return result
}


console.log(sumNumbersContainingDigit([123, 456, 789, 145], 1)); // 123 + 145 = 268