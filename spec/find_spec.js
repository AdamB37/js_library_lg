import { find } from '../dist/find'

describe( 'find', () => {
  it( 'returns undefined when element not found', () => {
      expect( find( [1,2,3], 4 ) ).toBe( undefined )
  })

  it( 'returns the first element predicate matches', () => {
    expect( find( [1,2,3], 3 ) ).toBe( 3 )    
  })
})
