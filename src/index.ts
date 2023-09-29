import { Item1, Pedido1 } from "./classes/classes-exercicio1";
import { Circulo, Retangulo } from "./classes/classes-exercicio2";
import { Cachorro, Cavalo, Gato } from "./classes/classes-exercicio-3";

import { Funcionario, Tutor, Pet, PetShop } from "./classes/classes-exercicio-4"
import { ItemPedido, Pedido } from "./classes/classes-exercicio-5";

console.log('exercicio-1');
const laranja = new Item1(30, 'laranja', 'laranja do céu');
const melancia = new Item1(40, 'melancia', 'melancia pingo doce');

const pedidoFrutas = new Pedido1([laranja, melancia], laranja.valor + melancia.valor);

console.log(pedidoFrutas);

console.log('exercicio-2');

const circulo = new Circulo(50);
circulo.desenhar();
circulo.redimensionar(70);

const retangulo = new Retangulo(40, 30);
retangulo.desenhar();
retangulo.redimensionar(60, 80);


console.log('exercicio 3');

const madah = new Cachorro('Madah', 'Preto e Tan', 'Dachshund', 'Pelo curto', 'Orelhas caídas');
console.log(madah);

madah.andar();
madah.fazerSom();

const pacoca = new Cavalo('Paçoca', 'marrom', 'Crioulo', 'Pelo curto', 'Crina preta');
console.log(pacoca);

pacoca.andar();
pacoca.fazerSom();

const cacau = new Gato('Cacau', 'Marrom', 'Sem raça', 'Pelo médio', 'Garras afiadas');
console.log(cacau);
cacau.andar();
cacau.fazerSom();

console.log('exercicio 4');


const maria = new Funcionario('Maria', '51999999999', 40, 'R. das oliveiras, 444', 'groomer', 4000);
const joana = new Funcionario('Joana', '51988888888', 35, 'R. das videiras, 555', 'groomer', 3800);

const jana = new Tutor('Jana', 'R. das oliveiras, 444', '51999999999', []);
const mario = new Tutor('Mario', 'R. das oliveiras, 444', '51999999999', []);
const jose = new Tutor('Jose', 'R. das oliveiras, 444', '51999999999', []);
const carlos = new Tutor('Carlos', 'R. das oliveiras, 444', '51999999999', []);

const suzeti = new Pet('Suzeti', jana, 'cachorro', 'shih tsu', 'pequeno', 'longo', []);
jana.pets.push(suzeti);

const bolinha = new Pet('Bolinha', mario, 'cachorro', 'dachshund', 'pequeno', 'medio', []);

const rex = new Pet('Rex', mario, 'cachorro', 'golden retriewer', 'grande', 'longo', []);
mario.pets.push(bolinha, rex);

const pipoca = new Pet('Pipoca', jose, 'gato', 'sem raça definida', 'pequeno', 'curto', []);
jose.pets.push(pipoca);

const pirata = new Pet('Pirata', carlos, 'cachorro', 'sem raça definida', 'medio', 'curto', []);
carlos.pets.push(pipoca);

const petShop = new PetShop('Pitpet', 'R. das orquídeas, 2222', '51998484848', [maria, joana]);
console.log(petShop);



maria.tosar(suzeti);

maria.darBanho(bolinha);
maria.tosar(bolinha);

maria.darBanho(rex);
maria.tosar(rex);
maria.cortarUnhas(rex);

joana.darBanho(pipoca);
joana.cortarUnhas(pipoca);

joana.darBanho(pirata);
joana.cortarUnhas(pirata);


console.log(suzeti.MostrarProcedimentos());
console.log(suzeti.calculaValorTotal());
console.log(bolinha.MostrarProcedimentos());
console.log(bolinha.calculaValorTotal());
console.log(rex.MostrarProcedimentos());
console.log(rex.calculaValorTotal());
console.log(pipoca.MostrarProcedimentos());
console.log(pipoca.calculaValorTotal());
console.log(pirata.MostrarProcedimentos());
console.log(pirata.calculaValorTotal());


console.log(jana.mostrarPets());
console.log(mario.mostrarPets());
console.log(jose.mostrarPets());
console.log(carlos.mostrarPets());


console.log('exercicio 5');

const sapato = new ItemPedido(100, 'sapato', 3);
const tenis = new ItemPedido(80, 'tenis', 5);
const pedidoSapatos = new Pedido();
pedidoSapatos.add(sapato);
pedidoSapatos.add(tenis);
console.log(sapato.recuperarValorTotal());
console.log(sapato.aplicarDescontoEmPorcentagem(10));
console.log(tenis.recuperarValorTotal());
console.log(tenis.aplicarDescontoEmReais(20));








