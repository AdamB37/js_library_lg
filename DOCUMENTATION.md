Documentation of function library notes:

Is this in markdown text?

#Introduction
Welcome to a simple library of needed functions that will fuel your projects with easy to use expressions that will help you calculate and gather your array information.

#NPM Install instructions
The installation of our module is easy, simply go into your command line and type in:

npm install….

#Use of functions

#Function list

//this is where we can type in the list of functions and describe their deliverables.

#For more information or help

// do we want to include this in the documentation?



Specific Function Documentation

mathMax
This function allows you to compute the maximum value of an array. In this context the max value would be the largest value in the array.
Here is the root code of the function so you can understand how it works:

```
const mathMax = ( array ) => {
let largestNum = array[0]
  for( var el of array ) {
   if ( el > largestNum ) {
      largestNum = el
      }
   }
   return largestNum
}

export{ mathMax }
```

mathFloor
When we want to round down integers at the decimal level, this function takes care of it without us having to do math!
Here is the root code of the function so you can understand how it works:

```
import { power10 } from ‘.util/power10’

const mathFloor = (number, precision=0) => {
   if ( number > 0 || precision > 0 ) {
     const power = power10( precision )

     return parseInt( number * power ) / power
   } else {
     return parseInt( number - 0.5 )
   }
}

export{ mathFloor }
```
Take note that the code also imports utility code called power10. This allows us to use a block of code that will enable us to utilize precision when rounding down a number. We will have some documentation on that function later on.

mathCeil
When we want to round up integers at the decimal level, this function takes care of it without any math!

```
import { power10 } from ‘./util/power10’

const mathCeil = ( number, precision=0 ) => {
   const power = power 10( precision )

   if( number > 0 ) {
     return parseInt( 0.9 + number * power ) / power
   } else if ( precision === 0 ) {
     return parseInt( number )
   } else {
     return -1 * parseInt( -1 * number * power ) / power
   }
}

export { mathCeil }  
```
Take note that we needed to create an if/else if/else statement that allowed us to round up negative integers as easily as we could round them down in the mathFloor function. Yet, there are clear differences between both functions.

mathAdd
A simple function that allows for the addition of two integers without excessive lines of code. We did the code for you!

```
const mathAdd = ( num1, num2 )
   return num1 + num2
}

export { mathAdd }
```
This function is simple, yet with this code all you have to is invoke mathAdd(integer, integer) and you are set!

mathSubtract
A simple function, like mathAdd that allows for the subtraction of two integers without excessive lines of code.

```
const mathSubtract = (num1, num2) => {
    return num1 - num2
}

export { mathSubtract }
```
Like the mathAdd, all you have to do is invoke mathSubtract(integer, integer)

map
this function helps us map the contents of an array. When you call on this, the result will give you the contents in the correct order, whether it is an array of similar values or a mix of values, collections and strings.
```
const map = (input, iteratee) => {
  let fn = iteratee || ( a => a )
  let target = input || []
  let result = []

  for( let key in target ) {
    result.push( fn( target[ key ], key, target ))
  }

  return result
}


export { map }
```

concat
this function helps us assemble multiple arrays and values as one array. This concatenating of different arrays and values may come in handy to help organize data/information.
```
const concat = ( ...args ) => {
  let result = []

  for( let index = 0; index < args.length; index++ ) {
    const argument = args[ index ]

    if( argument instanceof Array ) {
      for( let inner = 0; inner < argument.length; inner++ ) {
        result.push( argument[ inner ] )
      }
    } else {
      result.push( argument )
    }
  }

  return result
}

export { concat }
```
chunk
this function allows us to spilt elements of arrays into groups by size. In the case that the array can't be split evenly, the final chunk will be include all remaining elements.
```
const chunk = ( collection, chunkSize=1 ) => {
  if( ! (collection instanceof Array) ) {
    return []
  }

  let result = []

  for( let index = 0; index < collection.length; index += chunkSize ) {
    let babyResult = []

    for( let baby = 0; baby < chunkSize && index + baby < collection.length; baby++ ) {
      babyResult.push( collection[ index + baby ] )
    }

    result.push( babyResult )
  }


  return result
}

export { chunk }
```
forEach
this function iterates over elements of collection an invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). These functions may stop early by returning false.
```
const forEach = (input, iteratee) => {
  let fn = iteratee || ( a => a )
  let target = input || []

  for( let key in target ) {
    fn( target[ key ], key, target )
  }

  return input
}

export { forEach }
```
indexOf
this function gets the index of the first occurrence of value in an array, keep in mind that this is found using SameValueZero for equality comparisons.
```
const indexOf = (arr, value, start=0) => {
  if( ! (arr instanceof Array) ) {
    return -1
  }

  for (var i = start; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }

  return -1
}

export { indexOf }
```
inRange
this is a strictly numerical function that checks if n is between start and up to, but not including, end. If end is not specified, it's set to start with start then set to 0. If start is greater than end, the params are swapped to support negative ranges.
```
const inRange = (num, start, end) =>
    num >= start && num < end

export { inRange }
```
size
this function gets the size of a collection by returning its length for an array-like values or the number of own enumberable string keyed properties for objects.
```
const size = (obj) => {
  var iterate = 0

  for (var props in obj){
      iterate ++
    }

    return iterate

}
export { size }
```
tail
this function gets all but the first element of the array.
```
const tail = ( array ) => {
  let newArray = [ ]

  for( let i = 1; i < array.length; i++ ) {
    newArray.push( array[i] )
  }

  return newArray
}

export { tail }
```
last 
join
nth
shuffle
sortBy
