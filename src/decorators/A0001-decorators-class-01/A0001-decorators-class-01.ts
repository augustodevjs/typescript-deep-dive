@decorator
export class Animal {
  constructor(public cor: string, public nome: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Augusto', 'roxo');
console.log(animal);