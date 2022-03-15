const chessPiece = 'PAWN';

if (chessPiece.toLowerCase() === 'pawn') {
    console.log('Pode apenas realizar movimentos frontais, de forma que o primeiro movimento de cada peão abranja até duas casas, e os demais se limitam a uma casa à frente. O ataque do peão sempre ocorre na diagonal');
} else if (chessPiece.toLowerCase() === 'tower') {
    console.log('Pode correr sem restrição de número de casas e em todas as direções (frente, trás, direita, esquerda)');
} else if (chessPiece.toLowerCase() === 'horse') {
    console.log('Realiza movimentos em “L”, ou seja, duas casas em um sentido e uma casa em sentido perpendicular àquele, em qualquer direção');
} else if (chessPiece.toLowerCase() === 'bishop') {
    console.log('Sem restrição de número de casas, mas somente no sentido diagonal');
} else if (chessPiece.toLowerCase() === 'queen') {
    console.log('Sem restrições, a Rainha tem livre movimentação no jogo na horizontal, vertical e diagonais');
} else if (chessPiece.toLowerCase() === 'king') {
    console.log('Pode ser movimentado em qualquer direção do tabuleiro, mas apenas de casa em casa');
} else {
    console.log('Essa não é uma peça válida!');
}