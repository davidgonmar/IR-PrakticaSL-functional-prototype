import React from 'react';
import { ReusableList } from '../common/ReusableList';
import { Link } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';

const schools = ['School1', 'School2', 'School3', 'School4', 'School5'];

export function SchoolList() {
  const [search, setSearch] = React.useState('');

  const [schools, setSchools] = usePersistedState('schools', schools);

  return (
    <div style={{ width: '70%', marginInline: 'auto', paddingTop: 200 }}>
      <div
        className='d-flex justify-content-between align-items-center gap-2'
        style={{ marginBottom: 20 }}
      >
        <Link
          className='btn btn-primary'
          to='/praktica/schools/create'
          style={{ width: 200 }}
        >
          Create School
        </Link>
        <Input
          placeholder='Search...'
          style={{}}
          value={search}
          onInput={(e) => setSearch(e.target.value)}
        />
        <Button>Filter</Button>
      </div>
      <ReusableList
        items={schools.filter((school) =>
          school.toLowerCase().includes(search.toLowerCase())
        )}
      />
    </div>
  );
}
