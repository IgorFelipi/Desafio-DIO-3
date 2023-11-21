//Classe com um construtor para capitar os dados recebidos posteriormente
class Hero{
    constructor(nome, idade, classe){
        this.nome = nome;
        this.idade = idade;
        this.classe = classe
        this.tipoDeAtaque = "";
    }
    //Função de Ataque, para dividir o código em etapas
    ataque(){
        const ataques = {
            "Mago": "Magia",
            "Guerreiro": "Espada",
            "Monge": "Artes Marciais",
            "Ninja" : "Shuriken",
            "Default": "Nulo"
        }
        this.tipoDeAtaque = ataques[this.classe] || ataques["Default"];
        
    }
    
    escrever(){
         console.log(`O ${this.classe} atacou usando ${this.tipoDeAtaque}`)
}
}

//Instanciando um novo Heroi
let novoHeroi = new Hero ("Igor", 25, "Monge")
novoHeroi.ataque()
novoHeroi.escrever()
