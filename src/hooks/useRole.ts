import { useEffect, useMemo, useState } from 'react';
import { RoleMapper } from '../mappers/role';
import { RoleService } from '../services/role-service';
import { Role } from '../types/role';

export const useRole = () => {
  const [roles, setRoles] = useState<Role[]>([]);

  const roleService: RoleService = useMemo(() => new RoleService(), []);

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
    fetchRoles,
  };
};
