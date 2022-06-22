import Pessoa from "./Pessoa"

let jose = new Pessoa(1,'José da silva','123','jose@gmail.com',90,1.68);
/*console.log(jose.email)
jose.fone = '707070'
console.log(jose.fone)
*/
//console.log(jose.calcularIMC())
//jose.imprimir()


let maria = new Pessoa(2,'maria','345','maria@gmail.com',75,1.75)
//console.log(maria.nome)
//console.log(maria.calcularIMC())
//maria.imprimir()


//criar um array de pessoas
let pessoas: Pessoa[] = []
pessoas.push(jose)
pessoas.push(maria)
pessoas.push(new Pessoa(3,'Antonia','2345','antonia@gmail.com',70,1.89))
pessoas.push(new Pessoa(4,'Josefa','2345','josefa@gmail.com',75,1.89))

//console.log(pessoas)
pessoas.forEach((p) => p.imprimir() );