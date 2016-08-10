import { mathMax } from '../dist/max'

fdescribe( 'mathMax', () => {
  it( 'Computes the maximum value of array', () => {
    expect( mathMax( [2, 8, 4, 6] ) ).toEqual( 8 )
  })
})
