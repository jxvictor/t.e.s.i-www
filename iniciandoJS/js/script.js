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

let valores = [800, 90, 20, 50, 80, 200, 1, 2, 400, 1000];

//console.log(valores);

/*detalhe: para inteiro, tem que colocar parametro definindo se quer crescente ou
descrescente*/
let ordenado = valores.sort((a, b) => a-b);
////console.log(ordenado);

let pessoas = ['zowie', 'chico', 'fabio', 'francisco', 'alan', 'ana', 'jose'];
//console.log(pessoas.sort());

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
//console.log(valor);

function exibir(){
    //console.log("teste de função");
}

//exibir();

function somaNumeros(n1, n2){
    return n1 + n2;
}

//console.log(somaNumeros(10, 2));

function teste() {
    var global = 'inicio';
    let interno = 'inicio interno';
    if(true){
        global = 'teste';
    }

    console.log(global);
    console.log(interno);
}

teste();