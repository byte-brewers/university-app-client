import type { IOpenAiData } from '@/models/Bussines/IOpenAiData';
import type { IFormData } from '@/modules/Business/models/IFormData';
import { usePrompt } from '@/modules/Business/composable/usePrompt';
import { supabase } from '@/utils/table/supabase';
import { defineStore } from 'pinia';
import { ref } from 'vue';

import OpenAI from 'openai';

export const useBusinessStore = defineStore(
  'businessStore',
  () => {
    const { generatePrompt } = usePrompt();
    const openAiData = ref<IOpenAiData>();
    const isLoaded = ref(false);

    const fetchOpenAi = async (value: IFormData) => {
      const { data } = await supabase.from('client').select().single();

      const systemPrompt =
        'You are a helpful assistant designed to output JSON.';
      const userPrompt = generatePrompt(value);

      const openai = new OpenAI({
        organization: 'org-gMMLBDt8GYoH6XvDrRNR9dDS',
        project: 'proj_13bhHRRlUbgQnmsrdOEaVlAH',
        apiKey: data.key,
        dangerouslyAllowBrowser: true,
      });

      openAiData.value = undefined;
      isLoaded.value = true;

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

      isLoaded.value = false;

      const content = response.choices[0].message.content;

      if (content) {
        openAiData.value = JSON.parse(content);
        console.log(JSON.parse(content));
      }
    };

    const clearState = () => {
      openAiData.value = undefined;
    };

    return {
      fetchOpenAi,
      clearState,
      openAiData,
      isLoaded,
    };
  },
  {
    persist: {
      storage: sessionStorage,
      pick: ['openAiData'],
    },
  },
);
