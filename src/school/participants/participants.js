import React from 'react';
import { Link } from 'react-router-dom';    
import { Button, Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';
import { ReusableList } from '../../praktica/common/ReusableList';
const _participants = ['Participant1', 'Participant2', 'Participant3', 'Participant4', 'Participant5'];

export function Participants() {
  const [search, setSearch] = React.useState('');

  const [participants, setparticipants] = usePersistedState('participants', _participants);

  return (
    <div style={{ width: '70%', marginInline: 'auto', paddingTop: 200 }}>
        <h1>Participants</h1>
      <div
        className='d-flex justify-content-between align-items-center gap-2'
        style={{ marginBottom: 20 }}
      >
        <Link
          className='btn btn-primary'
          to='/participants/add'
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
          const newparticipants = [...participants];
          newparticipants.splice(index, 1);
          setparticipants(newparticipants);
        }}
        items={participants.filter((partner) =>
          partner.toLowerCase().includes(search.toLowerCase())
        )}
        link='/participants/edit'
      />
    </div>
  );
}
