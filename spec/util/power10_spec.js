import { power10 } from '../../dist/util/power10'

describe( 'power10', () => {
  it( 'correctly calculates power for 0', () => {
    expect( power10( 0 ) ).toEqual( 1 )
  })

  it( 'correctly calculates power for 1', () => {
    expect( power10( 1 ) ).toEqual( 10 )
  })

  it( 'correctly calculates power for 5', () => {
    expect( power10( 5 ) ).toEqual( 100000 )
  })
})
