import { mathAdd } from '../dist/add'

describe( 'mathAdd', () => {
  it( 'calculates the sum of two numbers', () => {
    expect(mathAdd( 2, 2 )).toEqual( 4 )
  })
})
