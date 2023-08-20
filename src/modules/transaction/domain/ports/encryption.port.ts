export interface EncryptionPort {
    encode(typeEncode: string, time: string, payload: any): string | null;
} 