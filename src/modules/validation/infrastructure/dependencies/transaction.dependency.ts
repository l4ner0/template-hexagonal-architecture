import { WinstonAdapter } from '../../../../libs/log/winston.adapter';
import { ApiClient } from '../apis/api-client';
import { ApiCredit } from '../apis/api-credit';

import { ValidatePaymentOperationUseCase } from '../../application/validations/validate-payment-operation.use-case';

import { TransactionController } from '../controllers/transaction.controller';
import { ApiCreditDebtsToPay } from '../apis/api-credit-debts-to-pay';

const winstonAdapter = new WinstonAdapter();
const apiClient = new ApiClient();
const apiCredit = new ApiCredit();
const apiCreditDebtsToPay = new ApiCreditDebtsToPay();

const validatePaymentOperationUseCase = new ValidatePaymentOperationUseCase(
  apiClient,
  apiCredit,
  apiCreditDebtsToPay,
);

export const transactionController = new TransactionController(winstonAdapter, validatePaymentOperationUseCase);
