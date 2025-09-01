class game {
	constructor(name, age, kind, attack){
    this.name = name
    this.age = age
    this.kind = kind
    this.attack = attack
    }

    escrever(){
    console.log(`${this.name} , o ${this.kind} de ${this.age} anos , atacou usando ${this.attack}`)
    }
}

	let hero = new game ("Sandersonildo","33", "monge", "artes marciais")
    hero.escrever()