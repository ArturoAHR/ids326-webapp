import { GetCompanyResponse } from '../types/company';
import { AxiosService } from './axios-service';

export class CompanyService extends AxiosService {
  private readonly URL = '/company';

  getAll = async (): Promise<GetCompanyResponse[]> => {
    const { data: results } = await this.axios.get<GetCompanyResponse[]>(
      this.URL,
    );
    return results;
  };
}
