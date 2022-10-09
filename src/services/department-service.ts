import {
  CreateDepartmentRequest,
  DeleteDepartmentRequest,
  EditDepartmentRequest,
  GetDepartmentsResponse,
} from '../types/department';
import { AxiosService } from './axios-service';

export class DepartmentService extends AxiosService {
  private readonly URL = '/department';

  getAll = async (): Promise<GetDepartmentsResponse[]> => {
    const { data: results } = await this.axios.get<GetDepartmentsResponse[]>(
      this.URL,
    );
    return results;
  };

  create = async (dto: CreateDepartmentRequest): Promise<boolean> => {
    const { status } = await this.axios.post(`${this.URL}`, dto);
    return status === 200 || status === 201;
  };

  edit = async ({ id, ...dto }: EditDepartmentRequest): Promise<boolean> => {
    const { status } = await this.axios.patch(`${this.URL}/${id}`, dto);
    return status === 200 || status === 201;
  };

  delete = async ({ id }: DeleteDepartmentRequest): Promise<boolean> => {
    const { status } = await this.axios.delete(`${this.URL}/${id}`);
    return status === 200 || status === 201;
  };
}
