import type { IOpenAiData } from '@/models/Bussines/IOpenAiData';
import type { IFormData } from '@/modules/Business/models/IFormData';
import { usePrompt } from '@/modules/Business/composable/usePrompt';
import { OPENAI_API_KEY } from '@/utils/opeaikey';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import OpenAI from 'openai';

export const useBusinessStore = defineStore(
  'businessStore',
  () => {
    const { generatePrompt } = usePrompt();
    const openAiData = ref<IOpenAiData>();

    const fetchOpenAi = async (value: IFormData) => {
      const systemPrompt =
        'You are a helpful assistant designed to output JSON.';
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
        openAiData.value = JSON.parse(content);
        console.log(JSON.parse(content));
      }
    };

    return {
      fetchOpenAi,
      openAiData,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['openAiData'],
    },
  },
);
