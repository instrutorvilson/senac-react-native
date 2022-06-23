class Animal{
    raca:string=''
    especie:string=''
}

let animal: Animal
animal = new Animal()
animal.raca = 'Ruim'
animal.especie = 'pintcher' 

class Mamifero extends Animal{
    numeroMamas:number=0
}
let mamifero: Mamifero
mamifero = new Mamifero()
mamifero.numeroMamas = 8
mamifero.raca = 'pitbull'
mamifero.especie = 'canina'

class Cachorro extends Mamifero{
    cor:string=''
}
let cachorro = new Cachorro()
cachorro.cor = 'malhado'
cachorro.raca = 'Dalmata'
cachorro.especie = 'canino'
cachorro.numeroMamas = 8