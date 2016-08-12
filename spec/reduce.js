import { reduce } from '../dist/reduce'

fdescribe( 'reduce', () => {
  it( 'reduces collection into a single value, starting with memo', () => {
    expect( reduce( [1,2,3], (memo, value) => memo + value, 0 ) ).toEqual( 6 )
  })

  it( 'reduces collection into a single value, starting with first element if no memo', () => {
    expect( reduce( [1,2,3], (memo, value) => memo + value )).toEqual( 6 )
  })

  it( 'invokes iteratee with memo, value, index, list if array', () => {
    const test = (memo, value, index, list) => {
      return memo + `-${value}-${index}-${list[index]}`
    }

    expect( reduce( [1,2], test, '' )).toEqual( '-1-0-1-2-1-2' )
  })

  it( 'invokes iteratee with memo, value, key, object if object', () => {
    const test = (memo, value, key, object) => {
      return memo + `-${value}-${key}-${object[key]}`
    }

    expect( reduce( {a: 1, b: 2 }, test, '' )).toEqual( '-1-a-1-2-b-2' )
  })

  it( 'invokes iteratee with memo, value, index, list if array', () => {
    const test = (memo, value, index, list) => {
      return memo + `-${value}-${index}-${list[index]}`
    }

    expect( reduce( [1,2], test )).toEqual( '1-2-1-2' )
  })

  it( 'invokes iteratee with memo, value, key, object if object', () => {
    const test = (memo, value, key, object) => {
      return memo + `-${value}-${key}-${object[key]}`
    }

    expect( reduce( {a: 1, b: 2 }, test )).toEqual( '1-2-b-2' )
  })

  it( 'returns the memo if null input', () => {
    expect( reduce( null, a => a, 'A')).toEqual( 'A' )
  })

  it( 'returns the memo if undefined input', () => {
    expect( reduce( undefined, a => a, 'A')).toEqual( 'A' )
  })
})