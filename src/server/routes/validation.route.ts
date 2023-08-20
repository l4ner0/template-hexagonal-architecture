import { Router } from 'express';
import { transactionController } from '../../modules/validation/infrastructure/dependencies/transaction.dependency';

export const routes = (router: Router): void => {
  const creditModule = '/digital-payments/v1/validation';

  router.post(
    `${creditModule}/validate-operation`,
    transactionController.validateOperation.bind(transactionController),
  );
};
