const numbers = [3, 7, 2, 9, 5];

// const x = {
//   0: 3, 
//   1: 7, 
// }

function findMax(array) {
  let maxNum = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i]
    }
  }
  return maxNum
}


function findMax2(array) {
  let maxNum = array[0]
  for (let num of array) {
    if (num > maxNum) {
      maxNum = num
    }
  }
  return maxNum
}

for (let k in numbers) {
  console.log(k)
}


const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};


// for (let k in person) {
//   console.log(person[k]);
// }

function copyObject(target) {
  const newObj = {};
  for (let key in target) {
    console.log('key', key)
    console.log('target[key]', target[key])
    newObj[key] = target[key]
  }
  return newObj
}

// console.log(copyObject(person))
for (let k of person) {
  console.log(k)
}