export interface FormatoDeElemento {
    desenhar(): void

    redimensionar(valor: number, valor2?: number): void
}


export class Circulo implements FormatoDeElemento {
    constructor(public raio: number) {
    }

    desenhar(): void {
        console.log(`Desenhando um círculo de ${this.raio} centímetros.`);
    }

    redimensionar(valor: number): void {
        console.log(`Redimensionando o círculo para ${valor} centímetros.`);
    }

}

export class Retangulo implements FormatoDeElemento {
    constructor(public comprimento: number, public altura: number) {
    }

    desenhar(): void {
        console.log(`Desenhando um retângulo de ${this.comprimento * this.altura} centímetros quadrados.`);
    }

    redimensionar(comprimento: number, altura: number): void {
        console.log(`Redimensionando o retângulo para ${comprimento * altura} centímetros quadrados.`);
    }
}