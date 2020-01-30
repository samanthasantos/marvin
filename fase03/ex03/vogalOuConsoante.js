function vogalOuConsoante(letra){
    var letras = letra.toLowerCase()
    if ( letras == "a" || letras =="e" || letras =="i" || letras== "o" || letras=="u"){
       return "vogal"
    }else{
       return "consoante"
    }
}