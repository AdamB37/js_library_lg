import { mathCeil } from '../dist/ceil'

describe( 'mathCeil', () => {
  it( 'computes number rounded up', () => {
    expect( mathCeil( 2.5 ) ).toEqual( 3 )
  })

  it( 'computes number rounded up to specified precision', () => {
    expect( mathCeil( 2.513, 2 )).toEqual( 2.52 )
  })

  it( 'computes number rounded up to specified precision', () => {
    expect( mathCeil( 2.516, 2 )).toEqual( 2.52 )
  })

  it( 'computes rounded up for a negative number', () => {
    expect( mathCeil( -2.513 ) ).toEqual( -2 )
  })

  it( 'computes rounded up for negative number', () => {
    expect( mathCeil( -2.513, 2 ) ).toEqual( -2.51 )
  })
})
