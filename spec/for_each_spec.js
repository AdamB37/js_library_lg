import { forEach } from '../src/for_each'

describe( 'forEach', () => {
  it( 'invokes iteratee on each element in array with value, index, collection', () => {
    const test = () => {
      let result = []

      return {
        result,
        fn: (value, index, collection) => result.push( `${value}-${index}-${collection[index]}` )
      }
    }

    const testFn = test()

    forEach([1, 2, 3], testFn.fn )
    expect( testFn.result ).toEqual( [ '1-0-1', '2-1-2', '3-2-3' ] )
  })


  it( 'invokes iteratee on each element in object with value, key, object', () => {
    const test = () => {
      let result = []

      return {
        result,
        fn: (value, key, object) => result.push( `${value}-${key}-${object[key]}` )
      }
    }

    const testFn = test()

    forEach({ a: 1, b: 2 }, testFn.fn)
    expect( testFn.result ).toEqual( [ '1-a-1', '2-b-2' ] )
  })

  it( 'returns input array', () => {
    const test = [ 1, 2, 3 ]

    expect( forEach( test, a => a )).toEqual( test )
  })

  it( 'returns input object', () => {
    const test = { a: 1, b: 2 }

    expect( forEach( test, a => a )).toEqual( test )
  })
})