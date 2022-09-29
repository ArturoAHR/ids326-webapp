import {
  CreateContactTypeRequest,
  DeleteContactTypeRequest,
  EditContactTypeRequest,
  GetContactTypesResponse,
} from '../types/contact-type';
import { AxiosService } from './axios-service';

export class ContactTypeService extends AxiosService {
  private readonly URL = '/contact-type';

  getAll = async (): Promise<GetContactTypesResponse[]> => {
    const { data: results } = await this.axios.get<GetContactTypesResponse[]>(
      this.URL,
    );
    return results;
  };

  create = async (dto: CreateContactTypeRequest): Promise<boolean> => {
    const { status } = await this.axios.post(`${this.URL}`, dto);
    return status === 200 || status === 201;
  };

  edit = async ({ id, ...dto }: EditContactTypeRequest): Promise<boolean> => {
    const { status } = await this.axios.patch(`${this.URL}/${id}`, dto);
    return status === 200 || status === 201;
  };

  delete = async ({ id }: DeleteContactTypeRequest): Promise<boolean> => {
    const { status } = await this.axios.delete(`${this.URL}/${id}`);
    return status === 200 || status === 201;
  };
}
