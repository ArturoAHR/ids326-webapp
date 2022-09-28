import { DeletePersonRequest, GetPeopleResponse } from '../types/person';
import { AxiosService } from './axios-service';

export class PersonService extends AxiosService {
  private readonly URL = '/person';

  getAll = async (): Promise<GetPeopleResponse[]> => {
    const { data: results } = await this.axios.get<GetPeopleResponse[]>(
      this.URL,
    );
    return results;
  };

  delete = async ({ id }: DeletePersonRequest): Promise<boolean> => {
    const { status } = await this.axios.delete(`${this.URL}/${id}`);
    return status === 200 || status === 201;
  };
}
