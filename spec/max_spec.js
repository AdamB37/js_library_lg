import { mathMax } from '../dist/max'

describe( 'mathMax', () => {
  it( 'Computes the maximum value of array', () => {
    expect( mathMax( [2, 8, 4, 6] ) ).toEqual( 8 )
  })

  it( 'if array is falsey, undefined is returned', () => {
    expect(mathMax( ["2", "david", "robert", "6"] ) ).toEqual( 'robert' )
  })

  it('if array is falsey, undefined is returned', () => {
    expect( mathMax(1) ).toEqual(undefined)
  })
})
