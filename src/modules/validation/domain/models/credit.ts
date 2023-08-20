interface CreditProps {
  contractCode: string;
  activationDate: string;
  clientDocument: string;
  daysPastDue: number;
}

export class Credit {
  private contractCode: string;
  private activationDate: string | undefined;
  private clientDocument: string;
  private daysPastDue: number; // días de mora

  constructor(props: CreditProps) {
    this.contractCode = props.contractCode;
    this.activationDate = props.activationDate;
    this.clientDocument = props.clientDocument;
    this.daysPastDue = props.daysPastDue;
  }

  get getContractCode(): string {
    return this.contractCode;
  }

  getData(): Record<string, unknown> {
    return {
      contractCode: this.contractCode,
      activationDate: this.activationDate,
      clientDocument: this.clientDocument,
      daysPastDue: this.daysPastDue,
    };
  }
}
