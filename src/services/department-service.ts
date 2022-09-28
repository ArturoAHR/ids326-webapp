import { GetDepartmentsResponse } from '../types/department';
import { AxiosService } from './axios-service';

export class DepartmentService extends AxiosService {
  private readonly URL = '/department';

  getAll = async (): Promise<GetDepartmentsResponse[]> => {
    const { data: results } = await this.axios.get<GetDepartmentsResponse[]>(
      this.URL,
    );
    return results;
  };
}
