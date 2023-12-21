import { Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';
import { useNavigate } from 'react-router-dom';
const inputs = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'First name',
    defaultValue: 'Adam',
  },
  {
    name: 'category',
    type: 'text',
    placeholder: 'Last Name',
    defaultValue: 'Pérez Rodríguez',
  },
  {
    name: 'specialty',
    type: 'text',
    placeholder: 'Specialty',
    defaultValue: 'Science',
  },
  {
    name: 'dni',
    type: 'text',
    placeholder: 'DNI',
    defaultValue: '74623859F',
  },
  {
    name: 'address',
    type: 'text',
    placeholder: 'Address',
    defaultValue: 'Av. de asdasd',
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'City',
    defaultValue: 'Seville',
  },
  {
    name: 'postcode',
    type: 'text',
    placeholder: 'Postcode',
    defaultValue: '41011',
  },
  {
    name: 'phone',
    type: 'text',
    placeholder: 'Phone number',
    defaultValue: '606384625',
  },
  {
    name: 'email',
    type: 'text',
    placeholder: 'Email',
    defaultValue: 'juanper@gmail.com',
  },
  {
    name: 'iban',
    type: 'text',
    placeholder: 'IBAN',
    defaultValue: 'ES72 2487 3484 2847 3878375',
  },
  {
    name: 'grading',
    type: 'text',
    placeholder: 'Grading',
    defaultValue: '8.9',
  },
];

export function EditParticipant() {
  const [schools, setSchools] = usePersistedState('schools', []);
  const navigate = useNavigate();

  const handleCreate = () => {
    console.log(schools);

    new Promise((resolve) => setTimeout(resolve, 100)).then(() =>
      navigate(-1)
    );
  };
  return (
    <div style={{ width: '50%', marginInline: 'auto', paddingTop: 20 }}>
      <h1>Edit Participant</h1>
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
          Confirm edit
        </button>
      </div>
    </div>
  );
}
