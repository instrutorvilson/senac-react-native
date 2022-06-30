/*function dados(p1: any, p2:any):any{
    let vetor: any[] = []
    vetor.push(p1)
    vetor.push(p2)
    return vetor
}

let numeros = dados(10,'20')
let frutas = dados('laranja',100)
*/

function dados<T>(p1:T,p2:T):T[]{
    let vetor:T[] = []
    vetor.push(p1)
    vetor.push(p2)
    return vetor
}

let numeros = dados<number>(10,20)
numeros.push(50)
console.log(numeros)

let frutas = dados<string>('laranja','banana')
frutas.push('morango')
console.log(frutas)

function base<T, U>(n1:T, n2:U){
    console.log(`${n1}, ${n2}`)
}
  
let boletim = base<string, number>('José', 7)
let func1 = base<string,boolean>('João', true)
let func2 = base<string,boolean>('Pedro', false)

