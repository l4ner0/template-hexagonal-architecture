export interface ResponseApiCreditDetailsDto {
  codRes: string;
  message: string;
  data: Daum[];
}

interface Daum {
  codigoEstado: string;
  nombreEstado: string;
  fechaActualizacion: string;
  codigoCredito: string;
  nombreProducto: string;
  nombreCliente: string;
  tipoDocumento: string;
  codigoDocumento: string;
  importeCredito: string;
  saldoCapital: string;
  tipoMoneda: string;
  plazoCredito: number;
  cuotasPagadas: number;
  cuotasPorPagar: number;
  factorRecaudo: string;
  porcentajeTEA: string;
  porcentajeTCEA: string;
  porcentajeTCOM: string;
  importeCapital: string;
  importeInteres: string;
  importeSeguroDesgravamen: string;
  importeSeguroVehicular: string;
  importeSaldoCuota: string;
  importeMora: string;
  importeDeudaAtrasada: string;
  importePagoCuota: string;
  importePagar: string;
  proximaCuota: string;
  importeApagarITF: string;
  js_cuopen: JsCuopen[];
  fechaVencimiento: string;
  fechaVencimientoLargo: string;
  placaVehiculo: string;
  estadoCuenta: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  codigoEntidadGPS: any;
  importeRenovacionPoliza: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deudasAtrasadas: any;
  nombreClienteCorto: string;
  isBotonPago: boolean;
}

export interface JsCuopen {
  fe_pacpag: string;
  im_salcuo: number;
  nu_cuotas: number;
}
