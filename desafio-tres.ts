let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let saldoTotal = 0;

function somarAoSaldo(addSaldo: number) {
    saldoTotal += addSaldo;
    if(campoSaldo) {
        campoSaldo.innerHTML = saldoTotal.toString();
    }
    limparCampoSoma();
}

if(botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

function limparCampoSoma() {
    soma.value = '';
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if(botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
    limparSaldo();
    })
};