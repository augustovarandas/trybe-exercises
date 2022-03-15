var stage = 'aprovada';

switch (stage) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!');
        break;

    case 'lista':
        console.log('Você está em nossa lista de espera');
        break;
    
    case 'reprovada':
        console.log('Que pena! Você foi reprovada(o)');
        break;
}