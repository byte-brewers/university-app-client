import type { IRegFormData } from '../models/IFormData';

import { object, string } from 'yup';
import { ref } from 'vue';

export function useRegistration() {
  const formData = ref<IRegFormData>({
    email: '',
    pass1: '',
    pass2: '',
  });

  const fields = {
    email: {
      label: 'Your email address',
      name: 'email',
      type: 'text',
    },
    pass1: {
      label: 'Create password',
      name: 'pass1',
      type: 'text',
    },
    pass2: {
      label: 'Repeat Password',
      name: 'pass2',
      type: 'text',
    },
  };

  const schema = object().shape({
    email: string().required('Email is required'),
    pass1: string().required('Pass is required'),
    pass2: string().required('Pass is required'),
  });

  const fetchOpenAi = (value: IRegFormData) => {
    console.log('Registration:', value);
  };

  return {
    formData,
    fields,
    schema,
    fetchOpenAi,
  };
}
