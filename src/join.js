const join = (arr, separator = ',') => {

   if( ! (arr instanceof Array ) ) {
     return []
   }
   var values = []

   for( var i = 0; i >= 0; i++){
     values = arr[ i ] + separator
   }



   return values
 }

export { join }
