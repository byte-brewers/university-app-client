import { object, string } from 'yup';
import { ref } from 'vue';

export function useAuthorization() {
  const textButton = ref<string | null>('SIGN IN');

  type FormData = {
    email: string;
    pass: string;
  };

  const formData = ref<FormData>({
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

  function submit(value: FormData) {
    console.log('Authorization:', value);
  }

  return {
    textButton,
    formData,
    fields,
    schema,
    submit,
  };
}
