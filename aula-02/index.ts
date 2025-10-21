import { ContaBancaria } from "./src/model/ContaBancaria";

const conta = new ContaBancaria("222");
conta.depositar(100);
conta.sacar(50);
conta.depositar(222222);
conta.sacar(222222);

console.log(`Saldo da conta ${conta.numero}: R$ ${conta.consultarSaldo()}`);