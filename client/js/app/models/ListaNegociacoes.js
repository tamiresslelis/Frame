class ListaNegociacoes {

    constructor(){
       this._negociacoes = [];
    }

    adiciona(negociacao){
      this._negociacoes.push(negociacao);
    }

    get negociacoes(){
      /*programacao defenciva, cria uma nova lista/objeto array na memoria com os dados da negociacao
      devolve um novo array, não interfere na lista de negociacoes do modelo*/
      return [].concat(this._negociacoes);
    }

}
