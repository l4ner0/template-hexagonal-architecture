export interface RequestValidateOperationDto {
  platform: number;
  paymentMethod: number;
  paymentType: number;
  validationData: ValidationData;
}

export interface ValidationData {
  documentType?: number;
  document?: string;
  credit?: string;
}
