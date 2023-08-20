export interface ResponseApiCreditDebtsDto {
  codRes: string;
  fechaUltimaActualizacion: string;
  importeMinimoPago: number;
  importeMaximoPago: number;
  importeMaximoTransaccion: number;
  deudas: Deuda[];
}

export interface Deuda {
  credito: string;
  concepto: string;
  monto: number;
  codigoTransaccion: string;
  idx: number;
}
