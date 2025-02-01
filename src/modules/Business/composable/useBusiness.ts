import type { IFormData } from '../models/IFormData';
import { useBusinessStore } from '@/stores/business';
import { object, string } from 'yup';
import { ref } from 'vue';

export function useBusiness() {
  const businessStore = useBusinessStore();

  const schema = object().shape({
    productOrService: string().required('Product or service is required'),
    targetAudience: string().required('Target audience is required'),
    regionOrCity: string().required('Region or city is required'),
    startUpCapital: string().required('Start-up capital is required'),
    salesChannels: string().required('Sales channels are required'),
    keyCosts: string().required('Key costs are required'),
    mainGoals: string().required('Main goals are required'),
  });

  const fields = {
    productOrService: {
      label: 'What product or service do you plan to offer?',
      name: 'productOrService',
      type: 'text',
    },
    targetAudience: {
      label: 'Who is your target audience?',
      name: 'targetAudience',
      type: 'text',
    },
    regionOrCity: {
      label: 'What region or city do you plan to work in?',
      name: 'regionOrCity',
      type: 'text',
    },
    startUpCapital: {
      label: 'What kind of start-up capital do you plan to invest?',
      name: 'startUpCapital',
      type: 'number',
    },
    salesChannels: {
      label: 'What sales channels do you plan to utilize?',
      name: 'salesChannels',
      type: 'text',
    },
    keyCosts: {
      label: 'What are the key costs you are planning for?',
      name: 'keyCosts',
      type: 'text',
    },
    mainGoals: {
      label: 'What are your main goals for your first year?',
      name: 'mainGoals',
      type: 'textarea',
    },
  };

  const stepList = ref([
    { id: 1, value: '1', label: 'Start' },
    { id: 2, value: '2', label: 'Quiz' },
    { id: 3, value: '3', label: 'Result' },
  ]);

  const formData = ref<IFormData>({
    productOrService: '',
    targetAudience: '',
    regionOrCity: '',
    startUpCapital: '',
    salesChannels: '',
    keyCosts: '',
    mainGoals: '',
  });

  const setStorageStepValue = (value: string): void => {
    sessionStorage.setItem('steps', value);
  };

  const getStorageStepValue = (): string => {
    return sessionStorage.getItem('steps') || '1';
  };

  const setStepValueHandler = async ({
    activateCallback,
    value,
  }: {
    activateCallback: (value: string) => void;
    value: string;
  }) => {
    await setStorageStepValue(value);
    await businessStore.clearState();
    activateCallback(value);
  };

  return {
    setStorageStepValue,
    getStorageStepValue,
    setStepValueHandler,
    stepList,
    formData,
    schema,
    fields,
  };
}
