import { formValidators } from '../../../validators/formValidators';

export const loginFormInputs = [
  {
    tag: 'Email',
    name: 'email',
    type: 'email',
    defaultValue: '',
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
  {
    tag: 'Password',
    name: 'password',
    type: 'password',
    defaultValue: '',
    isRequired: true,
    validators: [formValidators.notEmptyValidator],
  },
];
