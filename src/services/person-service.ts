import {
  CreatePersonRequest,
  DeletePersonRequest,
  EditPersonRequest,
  GetPeopleResponse,
} from '../types/person';
import { AxiosService } from './axios-service';

export class PersonService extends AxiosService {
  private readonly URL = '/person';

  getAll = async (): Promise<GetPeopleResponse[]> => {
    const { data: results } = await this.axios.get<GetPeopleResponse[]>(
      this.URL,
    );
    return results;
  };

  create = async (dto: CreatePersonRequest): Promise<boolean> => {
    const { status } = await this.axios.post(`${this.URL}`, dto);
    return status === 200 || status === 201;
  };

  edit = async ({ id, ...dto }: EditPersonRequest): Promise<boolean> => {
    const { status } = await this.axios.patch(`${this.URL}/${id}`, dto);
    return status === 200 || status === 201;
  };

  delete = async ({ id }: DeletePersonRequest): Promise<boolean> => {
    const { status } = await this.axios.delete(`${this.URL}/${id}`);
    return status === 200 || status === 201;
  };
}
