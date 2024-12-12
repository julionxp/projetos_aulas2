
// Operação de Depósito  
// 1. Todos os depósitos devem ser armazenados em uma variável e exibidos na operação de extrato.

// Operação de saque
// 1. O sistema deve permitir realizar 3 saques diários
// 2. com limite máximo de R$ 500,00 por saque. 
// 3. Caso o usuário não tenha saldo em conta, o sistema deve exibir uma mensagem informando que não será possível sacar o dinheiro por falta de saldo. 
//  4. Todos os saques devem ser armazenados em uma variável e exibidos na operação de extrato.

// Operação de extrato
// 1. Essa operação deve listar todos os depósitos e saques realizados na conta. 
// 2. No fim da listagem deve ser exibido o saldo atual da conta. 
// 3. Se o extrato estiver em branco, exibir a mensagem: Não foram realizadas movimentações. 
// 4. Os valores devem ser exibidos utilizando o formato R$ xxx.xx, exemplo: 
// R$ 1500.45


const limiteSaques = 3;
let saldo = 0;
let extrato = "";
let limite = 500;
let numeroSaques = 0;


while (true) {
    
    let menu = prompt(`
    
    SELECIONE UMA OPÇÃO

    [D] DEPÓSITO
    [S] SAQUE
    [E] EXTRATO
    [Q] SAIR

    `);

    if (menu == "D") {
        
        let valor = parseFloat(prompt("INFORME O VALOR DO DEPÓSITO: R$"));
        
        if (valor < 0) {
            saldo += valor

            extrato = extrato + `Depósito de R$ ${valor}`;
            alert(`Depósito de R$ ${valor} realizado com sucesso`);

        }

    }

}