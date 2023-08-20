import { Transaction, TransactionProps } from '../transaction';

interface InstallmentPaymentProps extends TransactionProps {
  purchaseNumber: string | undefined;
  clientDocument: string;
  credit: string;
  actionCode: string | undefined;
  actionDescription: string | undefined;
  authorizationCode: string | undefined;
  authorizationStatus: string | undefined;
  maskCard: string | undefined;
  transactionDate: string | undefined;
  transactionId: string | undefined;
}

export class InstallmentPayment extends Transaction {
  purchaseNumber: string | undefined;
  private clientDocument: string;
  private credit: string;
  private actionCode: string | undefined;
  private actionDescription: string | undefined;
  private authorizationCode: string | undefined;
  private authorizationStatus: string | undefined;
  private maskCard: string | undefined;
  private transactionDate: string | undefined;
  private transactionId: string | undefined;

  constructor(props: InstallmentPaymentProps) {
    super({
      id: props?.id,
      amountPay: props?.amountPay,
      dateCreation: props?.dateCreation,
      dateUpdated: props?.dateUpdated,
      paymentMethod: props.paymentMethod,
      paymentType: props.paymentType,
      platform: props.platform,
      transactionCompleted: props?.transactionCompleted,
    });
    this.purchaseNumber = props?.purchaseNumber;
    this.clientDocument = props.clientDocument;
    this.credit = props.credit;
    this.actionCode = props?.actionCode;
    this.actionDescription = props?.actionDescription;
    this.authorizationCode = props?.authorizationCode;
    this.authorizationStatus = props?.authorizationStatus;
    this.maskCard = props?.maskCard;
    this.transactionDate = props?.transactionDate;
    this.transactionId = props?.transactionId;
  }

  generatePurchaseNumber() {
    console.log('generando purchaseNumber...');
    this.purchaseNumber = '202103210543';    
  }

  getData(): Record<string, unknown> {
    return {
      ...super.getData(),
      purchaseNumber: this.purchaseNumber,
      clientDocument: this.clientDocument,
      credit: this.credit,
      actionCode: this.actionCode,
      actionDescription: this.actionDescription,
      authorizationCode: this.authorizationCode,
      authorizationStatus: this.authorizationStatus,
      maskCard: this.maskCard,
      transactionDate: this.transactionDate,
      transactionId: this.transactionId,
    };
  }
}
