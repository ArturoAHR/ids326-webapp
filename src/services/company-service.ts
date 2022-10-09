import {
  CreateCompanyRequest,
  DeleteCompanyRequest,
  EditCompanyRequest,
  GetCompanyResponse,
} from '../types/company';
import { AxiosService } from './axios-service';

export class CompanyService extends AxiosService {
  private readonly URL = '/company';

  getAll = async (): Promise<GetCompanyResponse[]> => {
    const { data: results } = await this.axios.get<GetCompanyResponse[]>(
      this.URL,
    );
    return results;
  };

  create = async (dto: CreateCompanyRequest): Promise<boolean> => {
    const { status } = await this.axios.post(`${this.URL}`, dto);
    return status === 200 || status === 201;
  };

  edit = async ({ id, ...dto }: EditCompanyRequest): Promise<boolean> => {
    const { status } = await this.axios.patch(`${this.URL}/${id}`, dto);
    return status === 200 || status === 201;
  };

  delete = async ({ id }: DeleteCompanyRequest): Promise<boolean> => {
    const { status } = await this.axios.delete(`${this.URL}/${id}`);
    return status === 200 || status === 201;
  };
}
