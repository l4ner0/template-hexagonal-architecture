import { Debt } from '../value-objects/debt.value-object';

interface CreditDebtsToPayProps {
  lastUpdate: string;
  maximumPaymentAmount: number;
  minimumPaymentAmount: number;
  maximumTransactionAmount: number;
  debts: Debt[];
}

export class CreditDebtsToPay {
  private readonly lastUpdate: string;
  private readonly maximumPaymentAmount: number;
  private readonly minimumPaymentAmount: number;
  private readonly maximumTransactionAmount: number;
  private readonly debts: Debt[];

  constructor(props: CreditDebtsToPayProps) {
    this.lastUpdate = props.lastUpdate;
    this.maximumPaymentAmount = props.maximumPaymentAmount;
    this.minimumPaymentAmount = props.minimumPaymentAmount;
    this.maximumTransactionAmount = props.maximumTransactionAmount;
    this.debts = props.debts;
  }

  existDebts(): boolean {
    if (this.debts === null || this.debts?.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  getData(): Record<string, unknown> {
    return {
      lastUpdate: this.lastUpdate,
      maximumPaymentAmount: this.maximumPaymentAmount,
      minimumPaymentAmount: this.minimumPaymentAmount,
      maximumTransactionAmount: this.maximumTransactionAmount,
      debts: this.debts,
    };
  }
}
