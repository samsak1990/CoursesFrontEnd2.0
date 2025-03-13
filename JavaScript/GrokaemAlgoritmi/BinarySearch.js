function binarySearch(arr, valueSearch){
    const sortArray = arr.sort()
    let startRange = 0,  finishRange = sortArray.length - 1
    while(startRange < finishRange ){
        let middleRange = Math.floor((startRange + finishRange) / 2),
        guess = sortArray[middleRange]
        if(valueSearch === guess)
            return `Found`
        if(valueSearch > middleRange){
            startRange = middleRange + 1
        } else if( valueSearch < middleRange){
            finishRange = middleRange - 1
        }
    }
    return 'Value not found'
}


console.log(binarySearch([0,5,8,4,3,2,9,20], 4))

