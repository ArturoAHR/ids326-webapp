import { GetRolesResponse } from '../types/role';
import { AxiosService } from './axios-service';

export class RoleService extends AxiosService {
  private readonly URL = '/role';

  getAll = async (): Promise<GetRolesResponse[]> => {
    const { data: results } = await this.axios.get<GetRolesResponse[]>(
      this.URL,
    );
    return results;
  };
}
