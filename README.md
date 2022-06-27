# desafio-typescriptdio

# desafios-typescript-dio

<h2> Desafio 1 </h2>
// Como podemos rodar isso em um arquivo .ts sem causar erros?
 <br/>
let employee = {}; <br/>
employee.code = 10; <br/>
employee.name = "John"; <br/>

<h2> Desafio 2 </h2>
// Como podemos melhorar o esse código usando TS? 

let pessoa1 = {}; <br/>
pessoa1.nome = "maria"; <br/>
pessoa1.idade = 29; <br/>
pessoa1.profissao = "atriz" <br/>

let pessoa2 = {} <br/>
pessoa2.nome = "roberto"; <br/>
pessoa2.idade = 19; <br/>
pessoa2.profissao = "Padeiro"; <br/>
 <br/>
let pessoa3 = { <br/>
    nome: "laura", <br/>
    idade: "32", <br/>
    profissao: "Atriz" <br/>
}; <br/>
 <br/>
let pessoa4 = { <br/>
    nome = "carlos", <br/>
    idade = 19, <br/>
    profissao = "padeiro" <br/>
} <br/>
 <br/>
<h2> Desafio 3</h2>
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo'); <br/>
let botaoLimpar = document.getElementById('limpar-saldo'); <br/>
let soma = document.getElementById('soma'); <br/>
let campoSaldo = document.getElementById('campo-saldo'); <br/>
 <br/>
campoSaldo.innerHTML = 0 <br/>
 <br/>
function somarAoSaldo(soma) { <br/>
    campoSaldo.innerHTML += soma; <br/>
}; <br/>
 <br/>
function limparSaldo() { <br/>
    campoSaldo.innerHTML = ''; <br/>
}; <br/>
 <br/>
botaoAtualizar.addEventListener('click', function () { <br/>
    somarAoSaldo(soma.value); <br/>
}); <br/>
 <br/>
botaoLimpar.addEventListener('click', function () { <br/>
    limparSaldo(); <br/>
}); <br/>
 <br/>
/** <br/>
    <//>Valor a ser adicionado: <input id="soma"> </h4> <br/>
    <button id="atualizar-saldo">Atualizar saldo</button> <br/>
    <button id="limpar-saldo">Limpar seu saldo</button> <br/>
    <//>"Seu saldo é: " <span id="campo-saldo"></span></h1> <br/>
 */ <br/>
