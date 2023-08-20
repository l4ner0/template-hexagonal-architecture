/* Entities */
import { Client } from '../../domain/models/client';
import { Credit } from '../../domain/models/credit';
import { CreditDebtsToPay } from '../../domain/models/credit-debts-to-pay';

/* Repositories */
import { CreditRepository } from '../../domain/repositories/credit.repository';
import { ClientRepository } from '../../domain/repositories/client.repository';
import { CreditDebtRepository } from '../../domain/repositories/credit-debt.repository';

import { paymentTypes } from '../../domain/enums';

/* Exceptions */
import { BadRequestTransactionException } from '../../domain/exceptions/bad-request-transaction.exception';
import { CreditWithoutDebtsToPayException, CustomerNotFountException } from '../../domain/exceptions';
import { CreditNotFoundException } from '../../domain/exceptions/credit-not-found.exception';

export class ValidatePaymentOperationUseCase {
  constructor(
    private readonly clientRepository: ClientRepository,
    private readonly creditRepository: CreditRepository,
    private readonly creditDebtRepository: CreditDebtRepository,
  ) {}

  async execute(payload: any): Promise<boolean> {
    let isValidPaymentOperation: boolean;

    switch (payload.paymentType) {
      case paymentTypes.web:
        const isValidClient: boolean = await this.validateClient(payload.validationData.document);
        const isValidCredit: boolean = await this.validateCreditsToPay(payload.validationData.document);

        isValidPaymentOperation = isValidClient && isValidCredit;
        break;

      default:
        throw new BadRequestTransactionException('El paymentType solicitado no es válido');
    }
    return isValidPaymentOperation;
  }

  async validateClient(document: string): Promise<boolean> {
    const client: Client | null = await this.clientRepository.findByDocument(document);
    if (!client) {
      throw new CustomerNotFountException();
    }
    return true;
  }

  async validateCreditsToPay(document: string): Promise<boolean> {
    const credits: Credit[] | null = await this.creditRepository.findByClientDocument(document);
    if (credits.length === 0) {
      throw new CreditNotFoundException('No existen creditos a pagar');
    }

    const isCreditToPay: boolean = await Promise.all(
      credits.map(async (credit) => {
        const isValidateDebt = await this.validateDebt(credit.getContractCode);
        return isValidateDebt;
      }),
    ).then((results) => results.every((result) => result));

    if (!isCreditToPay) {
      throw new CreditWithoutDebtsToPayException();
    }
    return true;
  }

  async validateDebt(contractCode: string): Promise<boolean> {
    const creditDebt: CreditDebtsToPay | null = await this.creditDebtRepository.findByContractCode(contractCode);
    return !!(creditDebt && creditDebt?.existDebts());
  }
}
