const peca = "cavalo";

switch (peca.toLowerCase()) {
    case "peão":
        console.log ("Movimenta-se 1 casa em qualquer direção, com exceção da primeira rodada onde se movimentará 2 casas em qualquer direção");
        break;

    case "bispo":
        console.log ("Movimenta-se diagonalmente em relação ao tabuleiro por quantas casas quiser");
        break;

    case "torre":
        console.log ("Movimenta-se vertical ou horizontalmente em relação ao tabuleiro, por quantas casas quiser até ser bloqueado por outra peça ou atingir o final do tabuleiro");
        break;

    case "cavalo":
        console.log ("Movimenta-se 2 casas em uma direção, vertical ou horizontal, e uma casa em direção transversal à inicial");
        break;

    case "rainha":
        console.log ("Movimenta-se vertical, horizontal ou diagonalmente na quantidade de casas que quiser");
        break;

    case "rei":
       console.log ("Movimenta-se para qualquer casa adjacente à que estiver");
        break;

    default:
        console.log ("Erro! Essa não é uma peça válida!");
         break;

}
