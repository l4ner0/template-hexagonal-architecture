export class BadRequestTransactionException extends Error {
  constructor(readonly message: string = 'Solicitud incorrecta') {
    super(message);
  }
}
