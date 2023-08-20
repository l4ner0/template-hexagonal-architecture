import { CreditDebtsToPay } from '../models/credit-debts-to-pay';

export interface CreditDebtRepository {
  findByContractCode(contractCode: string): Promise<CreditDebtsToPay | null>;
}
