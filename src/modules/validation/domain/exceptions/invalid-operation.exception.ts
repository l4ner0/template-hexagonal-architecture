export class InvalidOperationException extends Error {
  constructor(readonly message: string = 'Operación no válida') {
    super(message);
  }
}
