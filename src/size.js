const size = (obj) => {
    var iterate = 0

    for (var props in obj){
      iterate ++
    }

    return iterate

}
export { size }
