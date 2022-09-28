import { GetPeopleResponse } from '../types/person';
import { AxiosService } from './axios-service';

export class PersonService extends AxiosService {
  private readonly URL = '/person';

  getAll = async (): Promise<GetPeopleResponse[]> => {
    const { data: results } = await this.axios.get<GetPeopleResponse[]>(
      this.URL,
    );
    return results;
  };
}
