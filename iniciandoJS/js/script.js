var nome = "João Victor";

let livro = "Introdução ao javascript";

const mensagem = "bem vindo ao site.";

//console.log("Olá " + nome + " " + mensagem + " O seu livro " + livro + " está pronto para ser lido!")

//alert("Bem vindo!");

let num1 = 4;
let num2 = 8;
let soma = num1 + num2;

//console.log(soma);

let ehVerdadeiro = true;

//////console.log(ehVerdadeiro);

if (ehVerdadeiro) {
   // alert('Sim, é verdadeiro');
} else {
    //alert('é falso');
}

let valores = [10, 20, 50, 80];

//console.log(valores)

let maioresQue20 = valores.filter(n => n > 20);

//console.log(maioresQue20);

let usuario = {
    id: 1,
    nome: 'joao',
    contatos: [
        {
            tipo: "telefone",
            valor: "(83) 98665-6637"
        },
        {
            tipo: 'email',
            valor: 'joao@gmail.com'
        }
    ],
    cpf: '12345678900'
};

//console.log(usuario);

for(let i =0; i < usuario.contatos.length; i++){
    //console.log(usuario.contatos[i]);
}

//find apenas 1 'tipo'
let contatoEncontrado = usuario.contatos.find(c => c.tipo === 'telefone');
//console.log(contatoEncontrado);

// == compara valores, independentemente do tipo.
// === compara valor e tipo.
let valor = (1 === '1');
console.log(valor);
