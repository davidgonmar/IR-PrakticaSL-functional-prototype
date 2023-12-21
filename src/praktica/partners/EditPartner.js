import { Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';
import { useNavigate } from 'react-router-dom';
const inputs = [
  {
    name: 'address',
    type: 'text',
    placeholder: 'address',
    defaultValue: 'av. adsad',
  },
  {
    name: 'phone_number',
    type: 'text',
    placeholder: 'phone',
    defaultValue: '678645387',
  },
  {
    name: 'postcode',
    type: 'text',
    placeholder: 'post code',
    defaultValue: '41293',
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'city',
    defaultValue: 'Sevilla',
  },
  {
    name: 'country',
    type: 'text',
    placeholder: 'country',
    defaultValue: 'España',
  },
  {
    name: 'cif',
    type: 'text',
    placeholder: 'cif',
    defaultValue: '8347347890B',
  },
  {
    name: 'vat',
    type: 'text',
    placeholder: 'vat/vies',
    defaultValue: '8748374',
  },
  {
    name: 'legalrep',
    type: 'text',
    placeholder: 'Legal Rep.',
    defaultValue: 'asdasd',
  },
  {
    name: 'legalrepnif',
    type: 'text',
    placeholder: 'Legal Rep. NIF',
    defaultValue: '64927352F',
  }
];

export function EditPartner() {
  const [partners, setpartners] = usePersistedState('partners', []);
  const navigate = useNavigate();

  const handleCreate = () => {
    console.log(partners);

    new Promise((resolve) => setTimeout(resolve, 100)).then(() =>
      navigate('/praktica/partners')
    );
  };
  return (
    <div style={{ width: '50%', marginInline: 'auto', paddingTop: 20 }}>
      <h1>Edit Partner</h1>
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
