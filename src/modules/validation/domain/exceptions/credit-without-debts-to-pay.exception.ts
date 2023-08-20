export class CreditWithoutDebtsToPayException extends Error {
  constructor(readonly message: string = 'Credito sin cuotas por pagar') {
    super(message);
  }
}
