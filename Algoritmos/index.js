const livros = require('./listalivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`O livro mais barato tem o preço de ${livros[maisBarato].preco} e seu nome é ${livros[maisBarato].titulo}`)