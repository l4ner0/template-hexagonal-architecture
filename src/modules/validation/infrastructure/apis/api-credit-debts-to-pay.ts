import { CreditDebtsToPay } from '../../domain/models/credit-debts-to-pay';
import { CreditDebtRepository } from '../../domain/repositories/credit-debt.repository';
import { Debt } from '../../domain/value-objects/debt.value-object';

/* DTOs */
import { ResponseApiCreditDebtsDto } from './dtos';

/* Adapters */
import { get } from '../../../../libs/http-client/axios.adapter';

export class ApiCreditDebtsToPay implements CreditDebtRepository {
  async findByContractCode(contractCode: string): Promise<CreditDebtsToPay | null> {
    const responseApiCreditDebtsToPay = await get<ResponseApiCreditDebtsDto>(
      `${process.env.API_CREDITO}/ms/v2/credito/deudaCuotas/${contractCode}`,
    );

    if (responseApiCreditDebtsToPay.codRes === '00') {
      return new CreditDebtsToPay({
        lastUpdate: responseApiCreditDebtsToPay.fechaUltimaActualizacion,
        maximumPaymentAmount: responseApiCreditDebtsToPay.importeMaximoPago,
        minimumPaymentAmount: responseApiCreditDebtsToPay.importeMinimoPago,
        maximumTransactionAmount: responseApiCreditDebtsToPay.importeMaximoTransaccion,
        debts: responseApiCreditDebtsToPay.deudas.map(
          (deuda) => new Debt({ idx: deuda.idx, amount: deuda.monto, detail: deuda.concepto }),
        ),
      });
    } else {
      return null;
    }
  }
}
