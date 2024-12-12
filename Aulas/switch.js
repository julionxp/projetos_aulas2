// calabresa --> saindo pizza de calabresa
// frango --> saindo pizza de frango
// queijo --> saindo pizza de queijo

let saborPizza = "calabresa";


switch (saborPizza) {

    case "calabresa":
        console.log("saindo pizza de calabresa");
        break;
    case "frango":
        console.log("saindo pizza de frango");
        break;
    case "queijo":        
        console.log("saindo pizza de queijo");
        break;

    default:
        console.log("sabor de pizza indisponível");
}