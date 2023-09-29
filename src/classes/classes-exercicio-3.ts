class Animal {
    nome: string;
    cor: string;
    raca: string;
    pelagem: string;


    constructor(nome: string, cor: string, raca: string, pelagem: string) {
        this.nome = nome;
        this.cor = cor;
        this.raca = raca;
        this.pelagem = pelagem;
    }

    andar() {
        console.log('Animal andando');
    }

    fazerSom() {
        console.log('Animal fez som');
    }
}

export class Cachorro extends Animal {
    orelhas: string;

    constructor(nome: string, cor: string, raca: string, pelagem: string, orelhas: string) {
        super(nome, cor, raca, pelagem);
        this.orelhas = orelhas;
    }

    andar() {
        console.log('Cachorro passeando.');
    }

    fazerSom() {
        console.log('Au Au Au!');
    }
}

export class Cavalo extends Animal {
    crina: string;

    constructor(nome: string, cor: string, raca: string, pelagem: string, crina: string) {
        super(nome, cor, raca, pelagem);
        this.crina = crina;
    }

    andar() {
        console.log('Cavalo galopando.');
    }

    fazerSom() {
        console.log('Relinchando!');
    }
}

export class Gato extends Animal {
    garra: string

    constructor(nome: string, cor: string, raca: string, pelagem: string, garra: string) {
        super(nome, cor, raca, pelagem);
        this.garra = garra;

    }

    andar() {
        console.log('Gato andando.');
    }

    fazerSom() {
        console.log('Miau!');
    }
}