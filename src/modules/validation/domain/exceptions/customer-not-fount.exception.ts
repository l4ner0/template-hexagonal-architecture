export class CustomerNotFountException extends Error {
  constructor(readonly message: string = 'Cliente no encontrado') {
    super(message);
  }
}
