import { useEffect, useMemo, useState } from 'react';
import { DepartmentMapper } from '../mappers/department';
import { DepartmentService } from '../services/department-service';
import { Department } from '../types/department';
import { SelectOption } from '../types/misc';

export const useDepartment = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  const departmentService: DepartmentService = useMemo(
    () => new DepartmentService(),
    [],
  );

  const departmentOptions: SelectOption[] = useMemo(
    () =>
      departments.map((department) => ({
        value: department.id,
        label: department.name,
      })),
    [departments],
  );

  const fetchDepartments = async () => {
    const newDepartments: Department[] =
      DepartmentMapper.mapTransformToEntityType(
        await departmentService.getAll(),
      );
    setDepartments(newDepartments);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return {
    departments,
    departmentOptions,
    fetchDepartments,
  };
};
