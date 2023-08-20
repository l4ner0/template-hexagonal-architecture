export class InvalidAmountException extends Error {
  constructor(readonly message: string = 'Monto no válido') {
    super(message);
  }
}
