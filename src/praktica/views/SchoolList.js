import React from 'react';
import { ReusableList } from '../common/ReusableList';

const schools = ['School1', 'School2', 'School3', 'School4', 'School5'];

export function SchoolList() {
  const [items, setItems] = React.useState(schools);

  return (
    <div className='container'>
      <ReusableList items={schools} />
    </div>
  );
}
