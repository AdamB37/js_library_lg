import { mathFloor } from '../dist/floor'

describe( 'mathFloor', () => {
  it( 'computes number rounded down', () => {
    expect( mathFloor( 2.5 ) ).toEqual( 2 )
  })

  it( 'computes number rounded down to specified precision', () => {
    expect( mathFloor( 2.513, 2 )).toEqual( 2.51 )
  })

  it( 'computes rounded down for a negative number', () => {
    expect( mathFloor( -2.513 ) ).toEqual( -3 )
  })

  it( 'computes rounded down for a negative number', () => {
    expect( mathFloor( -2.513, 2 ) ).toEqual( -2.51 )
  })
})
