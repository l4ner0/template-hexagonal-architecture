export interface ResponseApiCreditDto {
  codRes: string;
  message: string;
  data: Daum[];
  lista: number;
}

interface Daum {
  documento: string;
  tipoDocumento: string;
  codigoContrato: string;
  codigoExpediente: string;
  nombreProductoCorto: string;
  codigoPlacaVehicular: string;
  fechaActivacion: string;
  tipoEstado: string;
  estadoHabilitadoFR: boolean;
  nombreClienteCorto: string;
  diasMora: number;
  factorRecaudo: string;
  habilitadoReprogramacion: any;
  categoriaCredito: any;
  estadoReprogramacion: any;
}
