import { useEffect, useMemo, useState } from 'react';
import { RoleMapper } from '../mappers/role';
import { RoleService } from '../services/role-service';
import { SelectOption } from '../types/misc';
import {
  CreateRoleRequest,
  DeleteRoleRequest,
  EditRoleRequest,
  Role,
} from '../types/role';

export const useRole = () => {
  const [roles, setRoles] = useState<Role[]>([]);

  const roleService: RoleService = useMemo(() => new RoleService(), []);

  const roleOptions: SelectOption[] = useMemo(
    () =>
      roles.map((role) => ({
        value: role.id,
        label: role.name,
      })),
    [roles],
  );

  const fetchRoles = async () => {
    const newRoles: Role[] = RoleMapper.mapTransformToEntityType(
      await roleService.getAll(),
    );
    setRoles(newRoles);
  };

  const deleteRole = async (dto: DeleteRoleRequest) => {
    const deleted: boolean = await roleService.delete(dto);
    await fetchRoles();
    return deleted;
  };

  const createRole = async (dto: CreateRoleRequest) => {
    const created: boolean = await roleService.create(dto);
    await fetchRoles();
    return created;
  };

  const editRole = async (dto: EditRoleRequest) => {
    const edited: boolean = await roleService.edit(dto);
    await fetchRoles();
    return edited;
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  return {
    roles,
    roleOptions,
    fetchRoles,
    createRole,
    editRole,
    deleteRole,
  };
};
