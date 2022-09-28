import { useEffect, useMemo, useState } from 'react';
import { RoleMapper } from '../mappers/role';
import { RoleService } from '../services/role-service';
import { SelectOption } from '../types/misc';
import { Role } from '../types/role';

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

  useEffect(() => {
    fetchRoles();
  }, []);

  return {
    roles,
    roleOptions,
    fetchRoles,
  };
};
