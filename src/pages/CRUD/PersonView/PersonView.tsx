import { usePerson } from '../../../hooks/usePerson';

import './PersonView.css';

export const PersonView = () => {
  const { people } = usePerson();

  return (
    <div className="crud-person-container">
      <div className="crud-person-table"></div>
    </div>
  );
};
