import {
  CreateRoleRequest,
  DeleteRoleRequest,
  EditRoleRequest,
  GetRolesResponse,
} from '../types/role';
import { AxiosService } from './axios-service';

export class RoleService extends AxiosService {
  private readonly URL = '/role';

  getAll = async (): Promise<GetRolesResponse[]> => {
    const { data: results } = await this.axios.get<GetRolesResponse[]>(
      this.URL,
    );
    return results;
  };

  create = async (dto: CreateRoleRequest): Promise<boolean> => {
    const { status } = await this.axios.post(`${this.URL}`, dto);
    return status === 200 || status === 201;
  };

  edit = async ({ id, ...dto }: EditRoleRequest): Promise<boolean> => {
    const { status } = await this.axios.patch(`${this.URL}/${id}`, dto);
    return status === 200 || status === 201;
  };

  delete = async ({ id }: DeleteRoleRequest): Promise<boolean> => {
    const { status } = await this.axios.delete(`${this.URL}/${id}`);
    return status === 200 || status === 201;
  };
}
