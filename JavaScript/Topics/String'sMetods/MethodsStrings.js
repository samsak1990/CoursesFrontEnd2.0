const someString = ' The some string for testing! string! '
const someString2 = ' Hello world!'

console.log(someString.slice(0,3)) // The

console.log(someString.substring(3,0)) //The

console.log(someString.toLowerCase()) //the some string for testing!

console.log(someString.toUpperCase()) //THE SOME STRING FOR TESTING!

console.log(someString.indexOf('for', 0)) // 16

console.log(someString.lastIndexOf('for')) // 16

console.log(someString.includes('for1')) // false

console.log(someString.startsWith('The')) // true

console.log(someString.endsWith('ing')) // false

console.log(someString.replace('string', 'sentense')) //The some sentense for testing! string!

console.log(someString.replaceAll('string', 'sentense')) // The some sentense for testing! sentense!

console.log(someString.trim()) // The some string for testing! string!

console.log(someString.trimStart()) // The some string for testing! string!

console.log(someString.trimEnd()) //  The some string for testing! string!

console.log(someString.split(' ')) // ['','The','some','string','for','testing!','string!', '']

console.log(someString.split(' ', 5)) // [ '', 'The', 'some', 'string', 'for' ]

console.log(someString.concat(...someString2)) //  The some string for testing! string!  The some string for testing! string! 

console.log(someString.repeat(3)) //  The some string for testing! string!  The some string for testing! string!  The some string for testing! string! 

console.log(someString2.padStart(36, '*')) // *********************** Hello world!

console.log(someString2.padEnd(36, '*')) //  Hello world!***********************

console.log(someString2.charAt(5)) // o

console.log(someString2.charCodeAt(5)) // 111

console.log(someString2[5]) // o