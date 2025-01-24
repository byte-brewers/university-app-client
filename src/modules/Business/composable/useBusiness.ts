import type { TFormData } from '../models/TFormData';

import { usePrompt } from './usePrompt';

import { OPENAI_API_KEY } from '@/utils/opeaikey';
import { object, string } from 'yup';
import { ref } from 'vue';

import OpenAI from 'openai';

export function useBusiness() {
  const formData = ref<TFormData>({
    productOrService: '',
    targetAudience: '',
    regionOrCity: '',
    startUpCapital: '',
    salesChannels: '',
    keyCosts: '',
    mainGoals: '',
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
      type: 'text',
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

  const schema = object().shape({
    productOrService: string().required('Product or service is required'),
    targetAudience: string().required('Target audience is required'),
    regionOrCity: string().required('Region or city is required'),
    startUpCapital: string().required('Start-up capital is required'),
    salesChannels: string().required('Sales channels are required'),
    keyCosts: string().required('Key costs are required'),
    mainGoals: string().required('Main goals are required'),
  });

  const { generatePrompt } = usePrompt();

  const fetchOpenAi = async (value: TFormData) => {
    const systemPrompt = 'You are a helpful assistant designed to output JSON.';
    const userPrompt = generatePrompt(value);

    const openai = new OpenAI({
      organization: 'org-gMMLBDt8GYoH6XvDrRNR9dDS',
      project: 'proj_13bhHRRlUbgQnmsrdOEaVlAH',
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const response = await openai.chat.completions.create({
      response_format: { type: 'json_object' },
      model: 'gpt-4-turbo',
      store: true,
      messages: [
        {
          content: systemPrompt,
          role: 'system',
        },
        {
          content: userPrompt,
          role: 'user',
        },
      ],
    });

    const content = response.choices[0].message.content;

    if (content) {
      console.log(JSON.parse(content));
    }
  };

  return {
    formData,
    fields,
    schema,
    fetchOpenAi,
  };
}
