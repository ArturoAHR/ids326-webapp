import { useEffect, useMemo, useState } from 'react';
import { CompanyMapper } from '../mappers/company';
import { CompanyService } from '../services/company-service';
import { Company } from '../types/company';

export const useCompany = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  const companyService: CompanyService = useMemo(
    () => new CompanyService(),
    [],
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
    fetchCompanies,
  };
};
