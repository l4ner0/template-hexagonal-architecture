import { Credit } from '../models/credit';
import { CreditDetails } from '../models/credit-details';
export interface CreditRepository {
  findByClientDocument(document: string): Promise<Credit[] | []>;
  findByContractCode(contractCode: string): Promise<CreditDetails | null>;
}
