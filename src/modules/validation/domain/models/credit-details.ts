interface CreditDetailsProps {
  contractCode: string;
  clientDocument: string;
  typeCurrency: string;
  productName: string;
  licensePlate: string;
}

export class CreditDetails {
  private contractCode: string;
  private clientDocument: string;
  private typeCurrency: string;
  private productName: string;
  private licensePlate: string; // placa vehicular

  constructor(props: CreditDetailsProps) {
    this.contractCode = props.contractCode;
    this.clientDocument = props.clientDocument;
    this.typeCurrency = props.typeCurrency;
    this.productName = props.productName;
    this.licensePlate = props.licensePlate;
  }

  getData(): Record<string, unknown> {
    return {
      contractCode: this.contractCode,
      clientDocument: this.clientDocument,
      typeCurrency: this.typeCurrency,
      productName: this.productName,
      licensePlate: this.licensePlate,
    };
  }
}
