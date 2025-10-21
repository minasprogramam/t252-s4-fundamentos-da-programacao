import { IContaBancaria } from "./IContaBancaria";
import { salvarOuAtualizarConta } from "../persistencia/arquivo";

export class ContaBancaria implements IContaBancaria {
  numero: string;
  saldo: number;

  constructor(numero: string) {
    this.numero = numero;
    this.saldo = 0;
    this.persistir();
  }

  private persistir() {
    salvarOuAtualizarConta({ numero: this.numero, saldo: this.saldo });
  }

  depositar(valor: number): void {
    this.saldo += valor;
    this.persistir();
  }

  sacar(valor: number): boolean {
    if (valor > this.saldo) return false;
    this.saldo -= valor;
    this.persistir();
    return true;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}