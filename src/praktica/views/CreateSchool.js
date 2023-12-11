import { Input } from 'reactstrap';

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
        <button className='btn btn-primary'>Create</button>
      </div>
    </div>
  );
}
