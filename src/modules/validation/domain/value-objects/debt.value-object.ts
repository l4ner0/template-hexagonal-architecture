import { InvalidAmountException } from '../exceptions';

interface DebtProps {
  idx: number;
  amount: number;
  detail: string;
}

export class Debt {
  private readonly idx: number;
  private readonly amount: number;
  private readonly detail: string;
  constructor(props: DebtProps) {
    this.idx = props.idx;
    this.amount = props.amount;
    this.detail = props.detail;
  }

  validateAmountDebt() {
    if (this.amount < 0 || this.amount === null) {
      throw new InvalidAmountException(`El monto ${this.amount} no es un monto válido`);
    }
  }

  getData(): Record<string, unknown> {
    return {
      idx: this.idx,
      amount: this.amount,
      detail: this.detail,
    };
  }
}
