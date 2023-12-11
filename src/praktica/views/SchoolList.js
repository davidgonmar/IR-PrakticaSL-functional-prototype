import React from 'react';
import { ReusableList } from '../common/ReusableList';

const schools = ['School1', 'School2', 'School3', 'School4', 'School5'];

export function SchoolList() {
  const [items, setItems] = React.useState(schools);

  return (
    <div style={{ width: '70%', marginInline: 'auto', paddingTop: 200 }}>
      <ReusableList items={schools} />
    </div>
  );
}
