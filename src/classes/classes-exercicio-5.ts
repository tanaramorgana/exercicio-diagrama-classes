interface Desconto {

    aplicarDescontoEmPorcentagem(desconto: number): void

    aplicarDescontoEmReais(desconto: number): void;

}


interface ValorPedido {

    recuperarValorTotal(): number

}


export class Pedido implements ValorPedido {

    itens: ItemPedido[] = [];

    add(item: ItemPedido): void {
        this.itens.push(item);
    }

    recuperarValorTotal(): number {
        let total = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);

        return total;
    }

    removeItem(item: string): void {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.itens.splice(index, 1);
        }
    }


}

export class ItemPedido implements Desconto {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        this.valor = this.valor * this.quantidade;
        return this.valor;
    }

    aplicarDescontoEmPorcentagem(desconto: number): number {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        return this.valor -= descontoEmReais;
    }

    aplicarDescontoEmReais(desconto: number): number {
        return this.valor -= desconto;
    }
}



