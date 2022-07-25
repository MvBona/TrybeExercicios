let peça = 'peão'
let lcase = peça.toLowerCase()

if (lcase === 'rei'){
    console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez.")
} else if(lcase === 'dama' || lcase === 'rainha'){
    console.log("Pode mover-se em qualquer direção, porém quantas casas quiser, desde que estejam livres.")
} else if(lcase === 'torre'){
    console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.")
} else if(lcase === 'bispo'){
    console.log("Move-se na diagonal, quantas casas quiser.")
} else if(lcase === 'cavalo'){
    console,log("O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.")
} else if(lcase === 'peão'){
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.")
} else {
    console.log("Não é uma peça de xadrez.")
}