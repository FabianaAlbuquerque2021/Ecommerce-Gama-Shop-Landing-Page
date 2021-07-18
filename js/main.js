function cadastroEmail(){
    var inputEmail = document.getElementById("inputEmail"); //Pegando o id do campo e-mail
    //criando variável dados para pegar os dadosEmail e colocar em localStorage em formato JSON
    var dados = JSON.parse(localStorage.getItem("dadosEmail")); 
    //Estrutura de condição se os dados forem igaul a nulo enviar no localStorage um array vazio.
    if(dados == null){
        localStorage.setItem("dadosEmail", "[]");
        dados = [];
    }
    //Enviando os dados para o localStorage
    var auxRegistro = { email: inputEmail.value} 
    dados.push(auxRegistro);
    localStorage.setItem("dadosEmail", JSON.stringify(dados));
    
    //Alerta de recebido e limpar o campo de e-mail
    alert("E-mail cadastrado com sucesso!")
    inputEmail.value="";
}