import { AxiosService } from './axios-service';

export class PersonService extends AxiosService {
  private readonly URL = '/person';

  getAll = async () => {
    const { data: results, status } = await this.axios.get(this.URL);
    if ((status === 200 || status === 201) && results.data) return results.data;
  };
}
