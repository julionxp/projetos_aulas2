

let numeroVendas = 8

if(numeroVendas < 0){
    console.log("Número de vendas inválido");

} else if(numeroVendas >= 0 && numeroVendas <= 4){
    console.log("Desempenho Insuficiente");

} else if(numeroVendas >= 5 && numeroVendas <= 9){
    console.log("Desempenho Satisfatório");

} else if(numeroVendas >= 10){
    console.log("Desempenho Exelente");
}


