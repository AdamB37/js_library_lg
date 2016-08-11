import { size } from '../dist/size'

describe( 'size', () => {
  it( 'returns the length of the collection', () => {
    expect( size( [2, 1, 4] ) ).toEqual( 3 )
  })

  it( 'returns the length of an object input', () => {
      expect( size( { 'a': 1, 'b': 2 })).toEqual(2)    
  })

})
