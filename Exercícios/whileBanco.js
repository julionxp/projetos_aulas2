// ====================================================================
//                             BANCO AZUL
// ====================================================================

const limiteSaques = 3;
let saldo = 0;
let extrato = '';
let limite = 500;
let numeroSaques = 0;


while (true) {
    
    let menu = prompt(`
        
        ====================================
                    [D] DEPÓSITO
                    [S] SAQUE
                    [C] SALDO ATUAL
                    [E] EXTRATO
                    [Q] SAIR
        ====================================
        
        `)

        if (menu.toLowerCase() == "d") {
            let valor = parseFloat(prompt("INFORME O VALOR DO DEPÓSITO: R$"))
            if (valor > 0) {
                saldo += valor

                extrato += `Depósito de R$ ${valor} \n`
                alert(`DEPÓSITO DE R$ ${valor} REALIZADO COM SUCESSO!`)
            
            } else {alert(`A OPERAÇÃO FALHOU! O VALOR INFORMADO É INVÁLIDO`)}
        
        }

        else if (menu.toLowerCase() == "s") {
            let valorSaque = parseFloat(prompt(`INFORME O VALOR DO SAQUE: R$`))
            if (valorSaque <= limite) {
                saldo -= valorSaque

                extrato += `Saque de R$ ${valorSaque} \n`
                alert(`SAQUE DE R$ ${valorSaque} RETIRADO COM SUCESSO!`);

            } else if (valorSaque > limite){
                alert(`SEU SAQUE É MAIOR QUE SEU LIMITE!`)
            
            } else if (valorSaque > limiteSaques){
                console.log(`VOCê ATINGIU SEU LIMITE DE SAQUES!`);
                
            }

        }

        else if (menu.toLowerCase() == "c") {
            alert(`SEU SALDO ATUAL É DE R$ ${saldo}`)
        
        }

        else if (menu.toLowerCase() == "e"){
            if (extrato == '') {
                alert(`NÃO FORAM REALIZADAS MOVIMENTAÇÕES!`);
            
            } else {
                alert(extrato);
            }
        }

        else if (menu.toLowerCase() == "q") {
            break;

        } else {
            alert(`!ERRO, AÇÃO INVÁLIDA!`)
        
        };

};