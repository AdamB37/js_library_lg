import { inRange } from '../dist/inRange'

describe( 'inRange', () => {
  it( 'checks if n is between start and up to, but not including, end.', () => {
    expect(inRange(2, 1, 4)).toEqual(true)
  })
  it( 'checks if n is not between range', () => {
    expect(inRange(5, 1, 4)).toEqual(false)
  })
})
