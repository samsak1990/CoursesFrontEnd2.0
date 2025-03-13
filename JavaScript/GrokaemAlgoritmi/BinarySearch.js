function binarySearch(arr, valueSearch){
    let startRange = 0, 
    finishRange = arr.length - 1
    while(startRange < finishRange ){
        let middleRange = Math.floor((startRange + finishRange) / 2),
        guess = arr[middleRange]
        console.log(guess)
        if(valueSearch === guess)
            return `Index ${middleRange}`
        if(valueSearch > middleRange){
            startRange = middleRange + 1
        } else if( valueSearch < middleRange){
            finishRange = middleRange - 1
        }
    }
    return 'Value not found'
}


console.log(binarySearch([1,2,3,5,7,9,12,20], 8))