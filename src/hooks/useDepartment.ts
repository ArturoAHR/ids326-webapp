import { useEffect, useMemo, useState } from 'react';
import { DepartmentMapper } from '../mappers/department';
import { DepartmentService } from '../services/department-service';
import {
  CreateDepartmentRequest,
  DeleteDepartmentRequest,
  Department,
  EditDepartmentRequest,
} from '../types/department';
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

  const deleteDepartment = async (dto: DeleteDepartmentRequest) => {
    const deleted: boolean = await departmentService.delete(dto);
    await fetchDepartments();
    return deleted;
  };

  const createDepartment = async (dto: CreateDepartmentRequest) => {
    const created: boolean = await departmentService.create(dto);
    await fetchDepartments();
    return created;
  };

  const editDepartment = async (dto: EditDepartmentRequest) => {
    const edited: boolean = await departmentService.edit(dto);
    await fetchDepartments();
    return edited;
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  return {
    departments,
    departmentOptions,
    fetchDepartments,
    createDepartment,
    editDepartment,
    deleteDepartment,
  };
};
