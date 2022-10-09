import { useEffect, useMemo, useState } from 'react';
import { CompanyMapper } from '../mappers/company';
import { CompanyService } from '../services/company-service';
import {
  Company,
  CreateCompanyRequest,
  DeleteCompanyRequest,
  EditCompanyRequest,
} from '../types/company';
import { SelectOption } from '../types/misc';

export const useCompany = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  const companyService: CompanyService = useMemo(
    () => new CompanyService(),
    [],
  );

  const companyOptions: SelectOption[] = useMemo(
    () =>
      companies.map((company) => ({
        value: company.id,
        label: company.name,
      })),
    [companies],
  );

  const fetchCompanies = async () => {
    const newCompanies: Company[] = CompanyMapper.mapTransformToEntityType(
      await companyService.getAll(),
    );
    setCompanies(newCompanies);
  };

  const deleteCompany = async (dto: DeleteCompanyRequest) => {
    const deleted: boolean = await companyService.delete(dto);
    await fetchCompanies();
    return deleted;
  };

  const createCompany = async (dto: CreateCompanyRequest) => {
    const created: boolean = await companyService.create(dto);
    await fetchCompanies();
    return created;
  };

  const editCompany = async (dto: EditCompanyRequest) => {
    const edited: boolean = await companyService.edit(dto);
    await fetchCompanies();
    return edited;
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return {
    companies,
    companyOptions,
    fetchCompanies,
    createCompany,
    editCompany,
    deleteCompany,
  };
};
