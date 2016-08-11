import { join } from '../dist/join'

describe( 'join', () => {
  it( 'converts all elements from input array into a string with a separator', () => {
    expect( join( [2, 2,], "-" ) ).toEqual( '2-2' )
  })

  it( 'returns an empty array if input is not an array', () => {
    expect( join( "2,4", "-" ) ).toEqual( [] )
  })

  it( 'provides a separator if one is not defined', () => {
    expect( join( [1,2,4]) ).toEqual( '1,2,4' )
  })
})
