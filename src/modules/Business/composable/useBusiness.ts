import { ref } from 'vue';

export function useBusiness() {
  const getStartedCaption = ref<string | null>('GET STARTED QUIZ');
  const nextCaption = ref<string | null>('Next');
  const backCaption = ref<string | null>('Back');

  const formData = ref<{
    typeOfService: string;
    targetAudience: string;
    startUpCapital: string;
    salesСhannels: string;
    keyCosts: string;
  }>({
    typeOfService: '',
    targetAudience: '',
    startUpCapital: '',
    salesСhannels: '',
    keyCosts: '',
  });

  return {
    getStartedCaption,
    nextCaption,
    backCaption,
    formData,
  };
}
