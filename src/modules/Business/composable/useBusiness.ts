import { OPENAI_API_KEY } from '@/utils/opeaikey';
import { object, string } from 'yup';
import { ref } from 'vue';

import OpenAI from 'openai';

export function useBusiness() {
  const getStartedCaption = ref<string | null>('GET STARTED QUIZ');
  const nextCaption = ref<string | null>('Next');
  const backCaption = ref<string | null>('Back');

  type FormData = {
    productOrService: string;
    targetAudience: string;
    regionOrCity: string;
    startUpCapital: string;
    salesChannels: string;
    keyCosts: string;
    mainGoals: string;
  };

  const formData = ref<FormData>({
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

  // async function submit({
  //   relocate,
  //   submit,
  // }: {
  //   relocate: () => void;
  //   submit?: boolean;
  // }) {
  //   if (submit) {
  //     console.log('submitting form data', formData.value);

  //     const openai = new OpenAI({
  //       organization: 'org-gMMLBDt8GYoH6XvDrRNR9dDS',
  //       project: 'proj_13bhHRRlUbgQnmsrdOEaVlAH',
  //       apiKey: OPENAI_API_KEY,
  //       dangerouslyAllowBrowser: true,
  //     });

  //     const response = await openai.chat.completions.create({
  //       model: 'gpt-4-turbo',
  //       messages: [
  //         {
  //           role: 'system',
  //           content: 'You are a helpful assistant designed to output JSON.',
  //         },
  //         {
  //           role: 'user',
  //           // 1. What product or service do you plan to offer? My answer: Food delivery service.
  //           // 2. Who is your target audience? My answer: Families with children.
  //           // 3. What region or city do you plan to work in? My answer: Ukraine.
  //           // 4. What kind of start-up capital do you plan to invest? My answer: 500000$.
  //           // 5. What sales channels do you plan to utilize? My answer: Offline store.

  //           // Your answer should be formatted as follows.
  //           // business_plan: [
  //           //   {
  //           //       "step": 1,
  //           //       "title": "What product or service do you plan to offer?",
  //           //       "description": "",
  //           //       "what_i_have_to_do": ""
  //           //       "where_to_start": ""
  //           //   },
  //           //   {
  //           //       "step": 1,
  //           //       "title": "Who is your target audience?",
  //           //       "description": "",
  //           //       "what_i_have_to_do": ""
  //           //       "where_to_start": ""
  //           //   },
  //           //   ...
  //           // ]

  //           content: `
  //             I'm an entrepreneur, you're my assistant. I came to you to help me with my business plan.
  //             I'm going to answer a few questions for you to make it easier for you to generate about.

  //             1. What product or service do you plan to offer? My answer: Food delivery service.
  //             2. Who is your target audience? My answer: Families with children.
  //             3. What region or city do you plan to work in? My answer: Ukraine.
  //             4. What kind of start-up capital do you plan to invest? My answer: 500000$.
  //             5. What sales channels do you plan to utilize? My answer: Offline store.

  //             Give me step-by-step instructions on how to do it. Based on my answers.
  //             Your answer should be formatted as follows.
  //             business_plan: [
  //               {
  //                   "step": 1,
  //                   "title": "What product or service do you plan to offer?",
  //                   "description": "", // Describe your product or service.
  //                   "what_i_have_to_do": "" // What should I do with my product or service?
  //                   "where_to_start": "" // Where should I start?
  //               },
  //               {
  //                   "step": 1,
  //                   "title": "Who is your target audience?",
  //                   "description": "", // Describe your target audience.
  //                   "what_i_have_to_do": "" // What should I do with my target audience?
  //                   "where_to_start": "" // Where should I start?
  //               },
  //               ...
  //             ],
  //             others: {
  //               costs: "" // Count me all the costs, the returns, the risks.
  //               plan: "" // Give me a plan for the next 5 years.
  //               scale: "" // How can I scale my business?
  //               risks: "" // What are the risks?
  //               payback: "" // When will the business pay off?
  //               expense: "" // What are the expenses?
  //               marketing: "" // What marketing strategies should I use?
  //               competition: "" // Who are my competitors?
  //               legal: "" // What legal considerations should I be aware of?
  //               funding: "" // What funding options are available?
  //               operations: "" // How should I manage daily operations?
  //               technology: "" // What technology do I need?
  //               customer_service: "" // How should I handle customer service?
  //               hr: "" // What are my human resources needs?
  //               logistics: "" // How should I manage logistics?
  //               suppliers: "" // How should I manage suppliers?
  //               partners: "" // How should I manage partners?
  //               sustainability: "" // How can I ensure my business is sustainable?
  //               innovation: "" // How can I foster innovation in my business?
  //               community: "" // How can I engage with the community?
  //               branding: "" // What should my branding strategy be?
  //               pricing: "" // How should I price my products or services?
  //               distribution: "" // What distribution channels should I use?
  //               training: "" // What training do my employees need?
  //               feedback: "" // How should I gather and use customer feedback?
  //               crisis_management: "" // How should I handle crises?
  //               exit_strategy: "" // What is my exit strategy?
  //               calculations: "" // Calculate everything for me based on the initial data of $500,000.
  //             }
  //           `,
  //         },
  //       ],
  //       store: true,
  //       response_format: { type: 'json_object' },
  //     });

  //     console.log(JSON.parse(response.choices[0].message.content));
  //   }

  //   relocate();
  // }

  function submit(value: FormData) {
    console.log(value);
  }

  return {
    getStartedCaption,
    nextCaption,
    backCaption,
    formData,
    fields,
    schema,
    submit,
  };
}
