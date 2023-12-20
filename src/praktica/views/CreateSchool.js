import { Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';

const inputs = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'School name',
  },
  {
    name: 'category',
    type: 'text',
    placeholder: 'Category',
  },
  {
    name: 'IBAN',
    type: 'text',
    placeholder: 'IBAN',
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Address',
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Phone',
  },
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Address',
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'City',
  },
  {
    name: 'country',
    type: 'text',
    placeholder: 'Country',
  },
];

export function CreateSchool() {
  const [schools, setSchools] = usePersistedState('schools', schools);

  const handleCreate = () => {
    const newSchool = {
      name: document.querySelector('input[name="name"]').value,
    };
    setSchools([...schools, newSchool]);
  };
  return (
    <div style={{ width: '70%', marginInline: 'auto', paddingTop: 200 }}>
      <h1>Register School</h1>
      <div className='d-flex flex-column gap-3'>
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
        <button className='btn btn-primary' onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
}
