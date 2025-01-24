import type { TFormData } from '../models/TFormData';

export function usePrompt() {
  const generatePrompt = (data: TFormData) => {
    console.log('data', data);

    return `
      I am an entrepreneur, you are my assistant. I have come to you to help me with my business plan.
      I want a detailed answer. I will answer a few questions to make it easier for you to write it.
      Create a step-by-step guide for me based on your answers. Your answer should be formatted as follows.
      The answer should be big and understandable to a person.

      1. QuestionWhat product or service do you plan to offer? My answer is: ${data.productOrService}.
      2. Who is your target audience? My answer is: ${data.targetAudience}.
      3. What region or city do you plan to work in? My answer is: ${data.regionOrCity}.
      4. What kind of start-up capital do you plan to invest? My answer is: ${data.startUpCapital}.
      5. What sales channels do you plan to utilize? My answer is: ${data.salesChannels}.
      6. What are the key costs you are planning for? My answer is: ${data.keyCosts}.
      7. What are your main goals for your first year? My answer is: ${data.mainGoals}.


      Your answer should be formatted as follows.

      business_plan: [
        {
          "step": 1, // Question number.
          "title": "", // Question title.
          "what_i_have_to_do": "" // What i have to do? There should be 50-100 words.
          "where_to_start": "" // Where to start? There should be 100-150 words.
        },
        {
          "step": 1, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? There should be 50-100 words.
          "where_to_start": "" // Where to start? There should be 100-150 words.
        },
        ...
      ],
      others: { // Additional information will be available here.
        sustainability: "" // How can I ensure my business is sustainable? There should be 50-100 words.
        calculations: "" // Do I have enough money to start a business? I have ${data.startUpCapital}$. There should be 50-100 words.
        technology: "" // What technology do I need? There should be 50-100 words.
        marketing: "" // What marketing strategies should I use? There should be 50-100 words.
        financing: "" // What financing options are available? There should be 50-100 words.
        community: "" // How can I engage with the community? There should be 50-100 words.
        logistics: "" // How should I manage logistics? There should be 50-100 words.
        training: "" // What training do I need? There should be 50-100 words.
        branding: "" // What should my branding strategy be? There should be 50-100 words.
        channels: "" // What sales channels should I use? There should be 50-100 words.
        growth: "" // How can I grow my business? There should be 50-100 words.
        plans: "" // Give me a plan for the next 5 years. There should be 50-100 words.
        scale: "" // How can I scale my business? There should be 50-100 words.
        risks: "" // What are the risks? There should be 50-100 words.
        backs: "" // When will the business pay off? There should be 50-100 words.
        hr: "" // What are my human resources needs? There should be 50-100 words.
      }
    `;
  };

  return {
    generatePrompt,
  };
}
