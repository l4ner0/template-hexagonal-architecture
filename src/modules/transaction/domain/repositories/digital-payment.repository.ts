import { Transaction } from "../models/transaction";

export interface DigitalPaymentRepository {
    saveTransaction(payload: Transaction): Promise<Transaction | null>;
}