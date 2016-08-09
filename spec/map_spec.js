import { map } from '../src/map'

const testFunction = (value, index, collection) => {
  return value + '-' + index + '-' + collection[ index ]
}

describe( 'map', () => {
  it( 'applies iteratee to input collection', () => {
    expect( map([ 1, 2, 3 ], a => a * 2 ) ).toEqual( [ 2, 4, 6 ] )
  })

  it( 'applies identity function to input collection when iteratee not provided', () => {
    expect( map([ 1, 2, 3 ]) ).toEqual( [ 1, 2, 3 ] )
  })

  it( 'applies iteratee to each own value of an object input', () => {
    expect( map( { a: 2, b: "s" }, a => a + 2 ) ).toEqual( [ 4, "s2" ] )
  })

  it( 'applies iteratee to each character of a string input', () => {
    expect( map( "test me" ) ).toEqual( [ 't', 'e', 's', 't', ' ', 'm', 'e' ])
   })

  it( 'returns an empty array when input is null', () => {
    expect( map( null, a => a ) ).toEqual( [] )
  })

  it( 'returns an empty array when input is undefined', () => {
    expect( map( undefined, a => a ) ).toEqual( [] )
  })

  it( 'invokes iteratee with three arguments for array (value, index, collection)', () => {
    expect( map([ 1, 2, 3 ], testFunction )).toEqual( [ '1-0-1', '2-1-2', '3-2-3' ] )
  })

  it( 'invokes iteratee with three arguments for object (value, key, collection)', () => {
    expect( map( { a: 1, b: 2, c: 3 }, testFunction )).toEqual( [ '1-a-1', '2-b-2', '3-c-3' ] )
  })
})