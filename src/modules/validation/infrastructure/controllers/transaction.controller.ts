import { Request, Response } from 'express';
import { OK, BAD_REQUEST, UNPROCESSABLE_ENTITY, INTERNAL_SERVER_ERROR } from 'http-status';

import { LogPort } from '../../../../libs/log/log.port';
import { ValidatePaymentOperationUseCase } from '../../application/validations/validate-payment-operation.use-case';
import { RequestValidateOperationDto } from './dtos/request-validate-operation.dto';

/* Exceptions */
import { BadRequestTransactionException } from '../../domain/exceptions/bad-request-transaction.exception';
import {
  CreditNotFoundException,
  CreditWithoutDebtsToPayException,
  CustomerNotFountException,
} from '../../domain/exceptions';

export class TransactionController {
  constructor(
    private readonly log: LogPort,
    private readonly validatePaymentOperationUseCase: ValidatePaymentOperationUseCase,
  ) {}

  async validateOperation(req: Request, res: Response): Promise<void> {
    try {
      const { platform, paymentMethod, paymentType, validationData } = req.body;
      const payload: RequestValidateOperationDto = {
        platform,
        paymentMethod,
        paymentType,
        validationData: {
          documentType: validationData.documentType,
          document: validationData.document,
          credit: validationData.credit,
        },
      };
      this.log.info(`payload: `, payload);
      const isValidate = await this.validatePaymentOperationUseCase.execute(payload);
      res.status(OK).send({ responseCode: '00', message: 'Operación válida', data: { isValidate } });
    } catch (error) {
      if (error instanceof CreditNotFoundException) {
        this.log.error(error);
        res.status(UNPROCESSABLE_ENTITY).send({ responseCode: '01', message: error.message });
      } else if (error instanceof CreditWithoutDebtsToPayException) {
        this.log.error(error);
        res.status(UNPROCESSABLE_ENTITY).send({ responseCode: '02', message: error.message });
      } else if (error instanceof CustomerNotFountException) {
        this.log.error(error);
        res.status(UNPROCESSABLE_ENTITY).send({ responseCode: '03', message: error.message });
      } else if (error instanceof BadRequestTransactionException) {
        this.log.error(error);
        res.status(BAD_REQUEST).send({ responseCode: '04', message: error.message });
      } else {
        this.log.error(error);
        res.status(INTERNAL_SERVER_ERROR).send({ responseCode: '99', message: 'Internal Error' });
      }
    }
  }
}
