import { mathSubtract } from '../dist/subtract'

describe( 'mathSubtract', () => {
  it( 'calculates the difference of two numbers', () => {
    expect(mathSubtract( 2, 2 )).toEqual( 0 )
  })
})
