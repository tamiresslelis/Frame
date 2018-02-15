class DateHelper{

  dataParaTexto(data){
    return data.getDate()
        +'/'+ (data.getMonth()+1)
        +'/'+ data.getFullYear();

  }
  textoParaData(texto){
      //arrow function
      return new Date(texto.split('-').map((item, indice) =>  item - indice % 2 ));

    }


}
