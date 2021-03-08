import { SpectreStatus } from '../../../../utils/enam/spectre-status.enum';

export interface Company {
  CompanyId: number;
  CompanyName: string;
  LicenseKey: string;
  LicenseKeyStartDate: string;
  LicenseKeyExpireDate: string;
  //Status: SpectreStatus.ACTIVE;
}
