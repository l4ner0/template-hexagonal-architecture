interface ClientProps {
  document: string;
  shortName: string;
  fullName: string;
  cellPhone: string;
}

export class Client {
  private readonly document: string;
  private readonly shortName: string;
  private readonly fullName: string;
  private readonly cellPhone: string;

  constructor(props: ClientProps) {
    this.document = props.document;
    this.shortName = props.shortName;
    this.fullName = props.fullName;
    this.cellPhone = props.cellPhone;
  }

  public getData(): Record<string, unknown> {
    return {
      document: this.document,
      shortName: this.shortName,
      fullName: this.fullName,
      cellPhone: this.cellPhone,
    };
  }
}
