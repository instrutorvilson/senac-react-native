class Pessoa{
    id: number
    nome:string
    fone:string
    email:string
    peso:number
    altura:number

    constructor(id:number, nome:string, 
                fone:string, email:string, 
                peso: number, altura:number){
      this.id = id
      this.nome = nome
      this.fone = fone
      this.email = email 
      this.altura = altura
      this.peso = peso 
    }

    imprimir(): void{
      console.log(`Id: ${this.id}`)
      console.log(`Nome: ${this.nome}`)
      console.log(`Fone: ${this.fone}`)
      console.log(`Email: ${this.email}`)
      console.log(`IMC: ${this.calcularIMC()}`)
      console.log('')
    }

    calcularIMC():number{
       let imc = (this.peso/(this.altura*this.altura)).toFixed(2);
       return parseFloat(imc)
    }
}

export default Pessoa