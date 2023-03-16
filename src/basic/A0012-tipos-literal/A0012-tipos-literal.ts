let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

enum Cores {
  Vermelho = 'Vermelho',
  Amarelo = 'Amarelo',
  Azul = 'Azul',
}

export function escolhaCor(cor: Cores): string {
  return cor;
}
console.log(escolhaCor(Cores.Azul), pessoa, x, y);
