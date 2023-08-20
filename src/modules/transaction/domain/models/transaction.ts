export interface TransactionProps {
  id: string | undefined | Date;
  amountPay?: number;
  dateCreation?: Date | undefined;
  dateUpdated: Date | undefined;
  paymentMethod: number;
  paymentType: number;
  platform: number;
  transactionCompleted: boolean | undefined;
}

export class Transaction {
  public id: string | undefined | Date;
  private amountPay: number | undefined;
  private dateCreation: Date | undefined;
  private dateUpdated: Date | undefined;
  private paymentMethod: number;
  private paymentType: number;
  private platform: number;
  private transactionCompleted: boolean | undefined;

  constructor(props: TransactionProps) {
    this.id = props?.id;
    this.amountPay = props?.amountPay;
    this.dateCreation = props?.dateCreation;
    this.dateUpdated = props?.dateUpdated;
    this.paymentMethod = props.paymentMethod;
    this.paymentType = props.paymentType;
    this.platform = props.platform;
    this.transactionCompleted = props?.transactionCompleted;
  }

  initTransaction(): void {
    this.id = new Date();
    this.dateCreation = new Date();
    this.dateUpdated = undefined;
    this.transactionCompleted = false;
  }

  getData(): Record<string, unknown> {
    return {
      amountPay: this.amountPay,
      dateCreation: this.dateCreation,
      dateUpdated: this.dateUpdated,
      paymentMethod: this.paymentMethod,
      paymentType: this.paymentType,
      platform: this.platform,
      transactionCompleted: this.transactionCompleted,
    };
  }
}
