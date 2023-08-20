export interface LogPort {
  info(message1: unknown, message2?: unknown): void;
  error(message: unknown, message2?: unknown): void;
}
