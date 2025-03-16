const array = [157,5,22,356,21,8,62,13,85] //[5,8,13,21,22,62,85,157,356] or [356,157,85,62,22,21,13,8,5]

const arr2 = ['M', 'Q', 'A', 'Z', 'F', 'Y', 'T', 'H', 'O', 'D', 'P', 'C', 'K', 'L', 'X', 'J', 'W', 'B', 'R', 'E', 'N', 'V', 'U', 'I', 'S', 'G']


function sortingByChoise(arr){
    const resultArray = []
    const copyOriginalArray = [...arr]
    while (copyOriginalArray.length > 0){
        const smallest = findMinValue(copyOriginalArray)
        resultArray.push(copyOriginalArray[smallest])
        copyOriginalArray.splice(smallest, 1)
    }
    return resultArray
}

function findMinValue(arr){
    let minValue = arr[0]
    let indexMinValue = 0
    for(let i = 1; i< arr.length; i ++){
        if(arr[i] < minValue){
            minValue = arr[i]
            indexMinValue = i
        }
    }
    return indexMinValue
}

console.log(sortingByChoise(arr2))