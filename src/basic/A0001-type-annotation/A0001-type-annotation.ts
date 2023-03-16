// Tipos básicos (aqui ocorre inferência de tipos)
const nome = 'Luiz'; // Qualquer tipo de strings: '' "" ``
const idade = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
const adulto = true; // true ou false
const simbolo = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeStrings: Array<string> = ['a', 'b'];
const arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 30,
  nome: 'Luiz',
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(nome);

// Module mode
export default 1;
