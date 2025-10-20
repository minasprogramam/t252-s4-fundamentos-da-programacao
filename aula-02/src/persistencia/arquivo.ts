import fs from "fs";
import path from "path";

const DATA_DIR = path.join(__dirname, "..", "..", "data");
const FILE = path.join(DATA_DIR, "contas.json");

function ensureFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, "[]", "utf-8");
}

export function carregarContas(): Array<{ numero: string; saldo: number }> {
  ensureFile();
  const raw = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(raw);
}

export function salvarContas(contas: Array<{ numero: string; saldo: number }>) {
  ensureFile();
  fs.writeFileSync(FILE, JSON.stringify(contas, null, 2), "utf-8");
}

export function salvarOuAtualizarConta(conta: { numero: string; saldo: number }) {
  const contas = carregarContas();
  const idx = contas.findIndex(c => c.numero === conta.numero);
  if (idx >= 0) contas[idx] = conta; else contas.push(conta);
  salvarContas(contas);
}
