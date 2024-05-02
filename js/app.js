// Função alterarStatus, acessada quando é realizado o click em algum dos botões
function alterarStatus(jogoSelecionado) {

    // obtem os dados do item selecionado na tela
    let itemSelecionado = document.getElementsByClassName('dashboard__items__item')[jogoSelecionado - 1];
    let imagemSelecionada = itemSelecionado.getElementsByTagName('div');
    let botaoSelecionado = itemSelecionado.getElementsByTagName('a');

    // pelo className, identifica se o botão e a imagem estão setados como "Alugar" ou "Devolver" e a partir daí inverte o status
    if (botaoSelecionado[0].className == 'dashboard__item__button') {
        botaoSelecionado[0].className = 'dashboard__item__button dashboard__item__button--return';
        botaoSelecionado[0].innerHTML = 'Devolver';
        imagemSelecionada[0].className = 'dashboard__item__img dashboard__item__img--rented';
    } else {
        botaoSelecionado[0].className = 'dashboard__item__button';
        botaoSelecionado[0].innerHTML = 'Alugar';
        imagemSelecionada[0].className = 'dashboard__item__img';
    }
}