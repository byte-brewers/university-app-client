import type { IAuthFormData } from '../models/IFormData';

import { object, string } from 'yup';
import { ref } from 'vue';

export function useAuthorization() {
  const formData = ref<IAuthFormData>({
    email: '',
    pass: '',
  });

  const fields = {
    email: {
      label: 'Your email address',
      name: 'email',
      type: 'text',
    },
    pass: {
      label: 'Password',
      name: 'pass',
      type: 'text',
    },
  };

  const schema = object().shape({
    email: string().required('Email is required'),
    pass: string().required('Pass is required'),
  });

  const fetchOpenAi = (value: IAuthFormData) => {
    console.log('Authorization:', value);
  };

  return {
    formData,
    fields,
    schema,
    fetchOpenAi,
  };
}
