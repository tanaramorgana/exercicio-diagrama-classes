export class Procedimento {
    constructor(public nome: string, public valor: number) { }
}

export class PetShop {
    constructor(
        public nome: string,
        public endereco: string,
        public telefone: string,
        public funcionarios: Funcionario[]) {
    }
}

export class Funcionario {
    constructor(
        public nome: string,
        public telefone: string,
        public idade: number,
        public endereço: string,
        public cargo: string,
        private salario: number) {
    }

    tosar(pet: Pet) {
        let valor = 0;

        if (pet.pelagem === 'médio') {
            if (pet.tamanho === 'pequeno') {
                valor = 35
            }
            if (pet.tamanho === 'médio') {
                valor = 40;
            }
            if (pet.tamanho === 'grande') {
                valor = 45;
            }
        }

        if (pet.pelagem === 'longo') {
            if (pet.tamanho === 'pequeno') {
                valor = 40
            }
            if (pet.tamanho === 'médio') {
                valor = 45;
            }
            if (pet.tamanho === 'grande') {
                valor = 50;
            }
        }

        const procedimento = new Procedimento('Tosa', valor);
        pet.procedimentos.push(procedimento);
    }


    darBanho(pet: Pet) {
        let valor = 20;

        if (pet.pelagem === 'curto') {
            if (pet.tamanho === 'médio') {
                valor = 25;
            }
            if (pet.tamanho === 'grande') {
                valor = 30;
            }
        }

        if (pet.pelagem === 'médio') {
            if (pet.tamanho === 'pequeno') {
                valor = 35
            }
            if (pet.tamanho === 'médio') {
                valor = 40;
            }
            if (pet.tamanho === 'grande') {
                valor = 45;
            }
        }

        if (pet.pelagem === 'longo') {
            if (pet.tamanho === 'pequeno') {
                valor = 40
            }
            if (pet.tamanho === 'médio') {
                valor = 45;
            }
            if (pet.tamanho === 'grande') {
                valor = 50;
            }
        }
        const procedimento = new Procedimento('Banho', valor);
        pet.procedimentos.push(procedimento);
    }

    cortarUnhas(pet: Pet) {
        const valor = 15;
        const procedimento = new Procedimento('Cortar Unhas', valor);
        pet.procedimentos.push(procedimento);
    }

}


export class Tutor {
    constructor(
        public nome: string,
        public endereco: string,
        public telefone: string,
        public pets: Pet[]) {
    }

    mostrarPets(): string[] {
        const pets = this.pets.map((pet) => `Nome do tutor: ${this.nome}, nome do pet: ${pet.nome},  Raça: ${pet.raca}`);
        return pets;
    }
}

export class Pet {
    constructor(
        public nome: string,
        public tutor: Tutor,
        public especie: string,
        public raca: string,
        public tamanho: string,
        public pelagem: string,
        public procedimentos: Procedimento[]) { }

    MostrarProcedimentos() {
        const procedimentos = this.procedimentos.map((procedimento) => `O ${this.especie} chamado ${this.nome} realizou o seguinte procedimento: ${procedimento.nome}`);
        return procedimentos;
    }

    calculaValorTotal() {
        const valoresProcedimentos = this.procedimentos.map((procedimento) => procedimento.valor);
        const valorTotal = valoresProcedimentos.reduce((total, valor) => total + valor, 0);
        return `O valor total do pet ${this.nome} é de ${valorTotal} reais.`
    }
}

