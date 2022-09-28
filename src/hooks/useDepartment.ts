import { useEffect, useMemo, useState } from 'react';
import { DepartmentMapper } from '../mappers/department';
import { DepartmentService } from '../services/department-service';
import { Department } from '../types/department';

export const useDepartment = () => {
  const [departments, setDepartments] = useState<Department[]>([]);

  const departmentService: DepartmentService = useMemo(
    () => new DepartmentService(),
    [],
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
    fetchDepartments,
  };
};
