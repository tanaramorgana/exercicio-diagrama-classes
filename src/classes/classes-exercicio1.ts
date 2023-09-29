export class Item1 {
    constructor(public valor: number, public nome: string, public descricao: string) { }
}

export class Pedido1 {
    constructor(public itens: Item1[], public valorTotal: number) { }
}

