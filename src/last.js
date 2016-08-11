const last = (array) => {
  if (!(array instanceof Array)) {
     return [];
  }
  var lastValue = array.length - 1

  return array[lastValue]

}
export { last }
