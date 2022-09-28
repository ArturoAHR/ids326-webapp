import { Role, GetRolesResponse } from '../types/role';

export class RoleMapper {
  static transformToEntityType = (dto: GetRolesResponse): Role => {
    const role = {
      ...dto,
    };
    return role;
  };

  static mapTransformToEntityType = (dto: GetRolesResponse[]): Role[] => {
    const roles = dto.map((roleDto) => this.transformToEntityType(roleDto));
    return roles;
  };
}
