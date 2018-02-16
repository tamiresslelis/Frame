class NegociacaoController{

    constructor(){

      let $ = document.querySelector.bind(document);
      this._inputData = $("#data");
      this._inputQuantidade = $("#quantidade");
      this._inputValor = $("#valor");
    }
    //manipulando o DOM
    adiciona(event){
      event.preventDefault();

      console.log(typeof(this._inputData.value));
    

      let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
      );

      console.log(negociacao);
      console.log(DateHelper.dataParaTexto(negociacao.data));

      }

}
