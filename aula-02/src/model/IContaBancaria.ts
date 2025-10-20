export interface IContaBancaria {
    numero: string;
    saldo: number;
    depositar(valor: number): void;
    sacar(valor: number): boolean;
    consultarSaldo(): number;
}
