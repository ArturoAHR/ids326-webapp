import { Department, GetDepartmentsResponse } from '../types/department';

export class DepartmentMapper {
  static transformToEntityType = (dto: GetDepartmentsResponse): Department => {
    const department = {
      ...dto,
    };
    return department;
  };

  static mapTransformToEntityType = (
    dto: GetDepartmentsResponse[],
  ): Department[] => {
    const departments = dto.map((departmentDto) =>
      this.transformToEntityType(departmentDto),
    );
    return departments;
  };
}
