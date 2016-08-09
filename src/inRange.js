const inRange = (num, start, end) => {
   if ( num >= start && num < end)
    return true
   if ( num < start || num > end)
    return false
}

export { inRange }
