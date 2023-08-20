export interface ResponseApiClientDto {
  codRes: string;
  data: Daum[];
}

export interface Daum {
  documento: string;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  numeroTelefono: string;
  correoElectronico: string;
  domicilio: string;
  distrito: string;
  provincia: string;
  departamento: string;
  cuentaAccesoOnline: boolean;
  diferenciaCuentas: boolean;
}
