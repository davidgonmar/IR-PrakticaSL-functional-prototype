import { Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';
import { useNavigate } from 'react-router-dom';
const inputs = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'School name',
    defaultValue: 'New School',
  },
  {
    name: 'category',
    type: 'text',
    placeholder: 'Category',
    defaultValue: 'New Category',
  },
  {
    name: 'IBAN',
    type: 'text',
    placeholder: 'IBAN',
    defaultValue: 'ES1234567891234567891234',
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Phone',
    defaultValue: '234234234',
  },
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    defaultValue: 'dadwad@gafw.com',
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Address',
    defaultValue: 'New Address',
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'City',
    defaultValue: 'Seville',
  },
  {
    name: 'country',
    type: 'text',
    placeholder: 'Country',
    defaultValue: 'Spain',
  },
];

export function CreateSchool() {
  const [schools, setSchools] = usePersistedState('schools', []);
  const navigate = useNavigate();

  const handleCreate = () => {
    console.log(schools);
    setSchools([
      ...schools,
      document.querySelector('input[name="name"]').value,
    ]);

    new Promise((resolve) => setTimeout(resolve, 100)).then(() =>
      navigate('/praktica/schools')
    );
  };
  return (
    <div style={{ width: '50%', marginInline: 'auto', paddingTop: 200 }}>
      <h1>Register School</h1>
      <div className='d-flex flex-column gap-3'>
        {inputs.map((input, index) => (
          <Input
            defaultValue={input.defaultValue}
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
