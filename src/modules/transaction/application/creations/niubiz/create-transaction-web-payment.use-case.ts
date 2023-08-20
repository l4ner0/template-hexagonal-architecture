/* Models */
import { InstallmentPayment } from "../../../domain/models/niubiz/installment-payment";

/* Repositories */
import { DigitalPaymentRepository } from "../../../domain/repositories/digital-payment.repository";

/* Ports */
import { EncryptionPort } from "../../../domain/ports/encryption.port";

/* Exceptions */

interface createTransactionDTO {
    paymentMethod: number;
    paymentType: number;
    platform: number;
    clientDocument: string;
    credit: string;
}

export class createTransactionWebPaymentUseCase {
    constructor(
        private readonly digitalPaymentRepository: DigitalPaymentRepository,
        private readonly encryptionPort: EncryptionPort,
    ){}

    async execute(payload: createTransactionDTO): Promise<string>{
        const installmentPayment: InstallmentPayment = new InstallmentPayment({
            id: undefined,
            amountPay: undefined,
            dateCreation: undefined,
            dateUpdated: undefined,
            paymentMethod: payload.paymentMethod,
            paymentType: payload.paymentType,
            platform: payload.platform,
            transactionCompleted: undefined,
            purchaseNumber: undefined,
            clientDocument: payload.clientDocument,
            credit: payload.credit,
            actionCode: undefined,
            actionDescription: undefined,
            authorizationCode: undefined,
            authorizationStatus: undefined,
            maskCard: undefined,
            transactionDate: undefined,
            transactionId: undefined,
        });
        installmentPayment.initTransaction();
        console.log('installmentPayment: ', installmentPayment.getData());

        const saveTransaction = await this.digitalPaymentRepository.saveTransaction(installmentPayment);

        if(!saveTransaction) throw new Error('No se pudo guardar la transacción');
        
        const token = await this.encryptionPort.encode('jwt', '1d', installmentPayment.id);

        if(!token) throw new Error('No se pudo generar el token de la transacción');
        
        return token;

    }
}