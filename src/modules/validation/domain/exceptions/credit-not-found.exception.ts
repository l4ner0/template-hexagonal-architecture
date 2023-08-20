export class CreditNotFoundException extends Error {
  constructor(readonly message: string = 'Credito no encontrado') {
    super(message);
  }
}
