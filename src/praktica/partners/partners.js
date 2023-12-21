import React from 'react';
import { ReusableList } from '../common/ReusableList';
import { Link } from 'react-router-dom';    
import { Button, Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';

const _partners = ['Partner1', 'Partner2', 'Partner3', 'Partner4', 'Partner5'];

export function Partners() {
  const [search, setSearch] = React.useState('');

  const [partners, setPartners] = usePersistedState('partners', _partners);

  return (
    <div style={{ width: '70%', marginInline: 'auto', paddingTop: 200 }}>
        <h1>Partners</h1>
      <div
        className='d-flex justify-content-between align-items-center gap-2'
        style={{ marginBottom: 20 }}
      >
        <Link
          className='btn btn-primary'
          to='/praktica/partners/add'
          style={{ width: 200 }}
        >
          Add Partner
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
        onDeleteItem={(index) => {
          const newPartners = [...partners];
          newPartners.splice(index, 1);
          setPartners(newPartners);
        }}
        items={partners.filter((partner) =>
          partner.toLowerCase().includes(search.toLowerCase())
        )}
        link='/praktica/partners/edit'
      />
    </div>
  );
}
