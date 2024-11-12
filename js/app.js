function comprar(){
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;

    let qtdTotal = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);
    
    if (quantidade <= 0){
        alert("Quantidade inválida");
        return
    }

    if (quantidade > qtdTotal){
      alert('Quantidade indisponível.');
    } else{
        qtdTotal = qtdTotal - quantidade;
        document.getElementById(`qtd-${ingresso}`).textContent = qtdTotal;
        alert('Compra realizada com sucesso!');
    } 

}