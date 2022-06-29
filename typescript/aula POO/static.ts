class Conexao{
    static path:string = ''
    database:string = ''
    static getConexao(): string{
        return this.path
    }
}

let conexao: Conexao
conexao = new Conexao()
conexao.database = 'loja'
//console.log(conexao.getConexao())

let con2 = new Conexao()
con2.database = 'posto'

Conexao.path = 'C:/users/db.json'
console.log(Conexao.getConexao())