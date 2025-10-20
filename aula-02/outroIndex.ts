// reduce 

// const numeros = [10, 20, -30, 40, 50];


// let soma = 0

// for (let numero of numeros) {
//     soma = soma + numero
// }

// console.log(`soma usando for: ${soma}`)


// const somaReduce = numeros.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual
// }, 0)



// console.log(`soma usando reduce: ${somaReduce}`)











// const numerosDoKahoot = [1, 2, 3];
// const resultado = numerosDoKahoot.reduce((acc, num) => acc + num, 10);
// // acc: 0 num: 1 => ret: 1
// // acc: 1 num: 2 => ret: 3
// // acc: 3 num: 3 => ret: 6
// console.log(resultado);
















// const nomesDoKahoot = ["Thai", "Paola", "Joy"];
// const frase = nomes.reduce((acc, nome) => acc + " " + nome);
// console.log(frase);



const carrinho = [
  { item: "batom", preco: 25 },
  { item: "base", preco: 20 },
  { item: "pó", preco: 50 },
];

const total = carrinho.reduce((acc, produto) => acc + produto.preco, 15);
console.log(total);