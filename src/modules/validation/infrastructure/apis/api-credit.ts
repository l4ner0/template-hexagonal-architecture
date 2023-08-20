import { get } from '../../../../libs/http-client/axios.adapter';

import { CreditRepository } from '../../domain/repositories/credit.repository';
import { CreditDetails } from '../../domain/models/credit-details';
import { ResponseApiCreditDto, ResponseApiCreditDetailsDto } from './dtos';
import { Credit } from '../../domain/models/credit';

export class ApiCredit implements CreditRepository {
  async findByClientDocument(document: string): Promise<Credit[] | []> {
    const responseApiCredit = await get<ResponseApiCreditDto>(
      `${process.env.API_KONG}/credito/listado/${document}`,
    );
    if (responseApiCredit.codRes === '00') {
      return responseApiCredit.data.map(
        (credit) =>
          new Credit({
            contractCode: credit.codigoContrato,
            activationDate: credit.fechaActivacion,
            clientDocument: credit.documento,
            daysPastDue: credit.diasMora,
          }),
      );
    } else {
      return [];
    }
  }
  async findByContractCode(contractCode: string): Promise<CreditDetails | null> {
    const responseApiCreditDetail = await get<ResponseApiCreditDetailsDto>(
      `${process.env.API_KONG}/credito/cuenta/${contractCode}`,
    );
    if (responseApiCreditDetail.codRes === '00') {
      return new CreditDetails({
        contractCode: responseApiCreditDetail.data[0].codigoCredito,
        clientDocument: responseApiCreditDetail.data[0].codigoDocumento,
        typeCurrency: responseApiCreditDetail.data[0].tipoMoneda,
        productName: responseApiCreditDetail.data[0].nombreProducto,
        licensePlate: responseApiCreditDetail.data[0].placaVehiculo,
      });
    } else {
      return null;
    }
  }
}
