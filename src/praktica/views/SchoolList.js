import React from 'react';
import { ReusableList } from '../common/ReusableList';

const schools = ['School1', 'School2', 'School3', 'School4', 'School5'];
export function SchoolList({ schools }) {
  const [items, setItems] = React.useState(schools);

  console.log(items);
  return (
    <div className='container'>
      <ReusableList items={items} />
    </div>
  );
}
