export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private nome: string) {}

  get ferramenta(): Ferramenta {
    return this._ferramenta as Ferramenta;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }

    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const Stevan = new Escritor('Stevan');
const caneta = new Caneta('caneta');

Stevan.escrever();

Stevan.ferramenta = caneta;
console.log(Stevan);
Stevan.escrever();
