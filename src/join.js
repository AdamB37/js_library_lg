const join = (arr, separator = ',') => {

   if( ! (arr instanceof Array ) ) {
     return []
   }
   let result = ''

   for( var i = 0; i === arr.length; i++){
     result = arr[ i ] + separator
     console.log(result)
   }
   
   return result
 }

export { join }
