import { get } from '../../../../libs/http-client/axios.adapter';

import { ClientRepository } from '../../domain/repositories/client.repository';
import { Client } from '../../domain/models/client';
import { ResponseApiClientDto } from './dtos';

export class ApiClient implements ClientRepository {
  async findByDocument(document: string): Promise<Client | null> {
    const reponseApiClient = await get<ResponseApiClientDto>(
      `${process.env.API_KONG}/cliente/datos/${document}`,
    );
    if (reponseApiClient.codRes === '00') {
      return new Client({
        document: reponseApiClient.data[0].documento,
        shortName: `${reponseApiClient.data[0].nombre} ${reponseApiClient.data[0].apellidoPaterno}`,
        fullName: `${reponseApiClient.data[0].nombre} ${reponseApiClient.data[0].apellidoPaterno} ${reponseApiClient.data[0].apellidoMaterno}`,
        cellPhone: reponseApiClient.data[0].numeroTelefono,
      });
    } else {
      return null;
    }
  }
}
