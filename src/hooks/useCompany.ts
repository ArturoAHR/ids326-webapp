import { useEffect, useMemo, useState } from 'react';
import { CompanyMapper } from '../mappers/company';
import { CompanyService } from '../services/company-service';
import { Company } from '../types/company';
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

  useEffect(() => {
    fetchCompanies();
  }, []);

  return {
    companies,
    companyOptions,
    fetchCompanies,
  };
};
