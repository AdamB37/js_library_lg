import { last } from '../dist/last'

describe( 'last', () => {
  it( 'returns the last element of an array', () => {
    expect( last( [2, 1, 4] ) ).toEqual( 4 )
  })

  it( 'empty array if input is not an array', () => {
      expect( last( "string")).toEqual([])
  })

})
