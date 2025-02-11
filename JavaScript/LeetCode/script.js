function countOccurrences(arr){
    const result = {}
    for(let i = 0; i < arr.length; i++){
        result[arr[i]] ? result[arr[i]] += 1 : result[arr[i]] = 1
    }
    return result
}


// console.log(countOccurrences([1,2,2,3,3,3,5,6,5,6,2,1,3,6,7]))

const users = {
    "admin": "1234",
    "user": "qwerty",
    "guest": "guest"
  };
  
  
function checkLogin(username, password){
    if(users.username){
        if(users.username === password){
            console.log("Доступ разрешен")
        } else{
            console.log("Ошибка авторизации")
        }
    } else {
        console.log('Пользователь не найден!')
    }
}
  
// console.log(checkLogin('admin', '1234'))

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

const reduce = function(nums, fn, init) {
    if(nums.length == 0){
      return init
    }
    for(let i = 0; i<nums.length ; i++){
        init = fn(init, nums[i])
    }  
    return init
  };

//   console.log(reduce(nums,fn,init))

const compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

// const fanc = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9


const deepFlatten = (deepArr) => {
    const newArr = deepArr.flat(Infinity)
    return newArr.reverse()
}

console.log(deepFlatten([1, [2, [3, [4]]]]));