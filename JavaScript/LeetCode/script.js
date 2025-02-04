function countOccurrences(arr){
    const result = {}
    for(let i = 0; i < arr.length; i++){
        result[arr[i]] ? result[arr[i]] += 1 : result[arr[i]] = 1
    }
    return result
}


console.log(countOccurrences([1,2,2,3,3,3,5,6,5,6,2,1,3,6,7]))