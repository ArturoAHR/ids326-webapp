import { Company, GetCompanyResponse } from '../types/company';

export class CompanyMapper {
  static transformToEntityType = (dto: GetCompanyResponse): Company => {
    const company = {
      ...dto,
      ceo: dto.__ceo__,
    };
    return company;
  };

  static mapTransformToEntityType = (dto: GetCompanyResponse[]): Company[] => {
    const companies = dto.map((companyDto) =>
      this.transformToEntityType(companyDto),
    );
    return companies;
  };
}
