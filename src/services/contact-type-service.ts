import { GetContactTypesResponse } from '../types/contact-type';
import { AxiosService } from './axios-service';

export class ContactTypeService extends AxiosService {
  private readonly URL = '/contact-type';

  getAll = async (): Promise<GetContactTypesResponse[]> => {
    const { data: results } = await this.axios.get<GetContactTypesResponse[]>(
      this.URL,
    );
    return results;
  };
}
