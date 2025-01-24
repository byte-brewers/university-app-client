import type { IFormData } from '../models/IFormData';

export function usePrompt() {
  const generatePrompt = (data: IFormData) => {
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


      Your answer should be formatted as follows. The answer should be big and understandable to a person.

      business_plan: [
        {
          "step": 1, // Question number.
          "title": "", // Question title.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 2, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 3, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 4, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 5, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 6, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
        {
          "step": 7, // Question number.
          "title": "", // Question number.
          "what_i_have_to_do": "" // What i have to do? Gime me long answer!
          "where_to_start": "" // Where to start? Gime me short answer!
        },
      ],
      others: { // Additional information will be available here.
        sustainability: { // How can I ensure my business is sustainable? Gime me short answer!
          title: "",
          text: ""
        }
        calculations: { // Do I have enough money to start a business? I have ${data.startUpCapital}$. Gime me short answer!
          title: "",
          text: "" 
        }
        technology: { // What technology do I need? Gime me short answer!
          title: "",
          text: "" 
        }
        marketing: { // What marketing strategies should I use? Reach a monthly profit of $1000
          title: "",
          text: ""
        }
        financing: { // What financing options are available? Gime me short answer!
          title: "",
          text: "" 
        }
        community: { // How can I engage with the community? Gime me short answer!
          title: "",
          text: ""
        }
        logistics: { // How should I manage logistics? Gime me short answer!
          title: "",
          text: "" 
        }
        training: { // What training do I need? Gime me short answer!
          title: "",
          text: ""
        }
        branding: { // What should my branding strategy be? Gime me short answer!
          title: "",
          text: "" 
        }
        channels: { // What sales channels should I use? Gime me short answer!
          title: "",
          text: ""
        }
        growth: { // How can I grow my business? Gime me short answer!
          title: "",
          text: "" 
        }
        plans: { // Give me a plan for the next 5 years. Gime me short answer!
          title: "",
          text: ""
        }
        scale: { // How can I scale my business? Gime me short answer!
          title: "",
          text: "" 
        }
        risks: { // What are the risks? Gime me short answer!
          title: "",
          text: ""
        }
        backs: { // When will the business pay off? Gime me short answer!
          title: "",
          text: "" 
        }
        hr: { // What are my human resources needs? Gime me short answer!
          title: "",
          text: ""
        }
      }
    `;
  };

  return {
    generatePrompt,
  };
}
