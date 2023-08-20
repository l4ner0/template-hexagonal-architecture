import { Client } from '../models/client';
export interface ClientRepository {
  findByDocument(document: string): Promise<Client | null>;
}
