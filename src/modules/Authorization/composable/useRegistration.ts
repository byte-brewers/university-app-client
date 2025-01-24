import { object, string } from 'yup';
import { ref } from 'vue';

export function useRegistration() {
  const textButton = ref<string | null>('SIGN UP');

  type FormData = {
    email: string;
    pass1: string;
    pass2: string;
  };

  const formData = ref<FormData>({
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

  function submit(value: FormData) {
    console.log('Registration:', value);
  }

  return {
    textButton,
    formData,
    fields,
    schema,
    submit,
  };
}
