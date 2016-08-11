import { concat } from '../src/concat'

describe( 'concat', () => {
  it( 'creates a new array concatenating array with any additional arrays', () => {
    const array = [ 1 ]
    expect(concat( array, 2, [3] ) ).toEqual( [1, 2, 3] )
  })

  it( 'creates a new array concatenating array with any additional values', () => {
    const array = [ 1 ]
    expect(concat( array, 2, 3, [[4]] ) ).toEqual( [1, 2, 3, [4]] )
  })

  it( 'creates a new array with object', () => {
    expect( concat( {a: 1})).toEqual( [{ a: 1 }])
  })

  it( 'creates a new array with primitive', () => {
    expect( concat( 1 ) ).toEqual( [ 1 ] )
  })
})
