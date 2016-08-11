import { tail } from '../src/tail'

fdescribe( 'tail', () => {
  it( 'Gets all but the first element of array.', () => {
  expect(tail( [1, 2, 3, 4] )).toEqual( [2, 3, 4] )
  })
})
