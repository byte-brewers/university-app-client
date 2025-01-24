export interface IOpenAiData {
  business_plan: IBusinessPlanItem[];
  others: IbusinessOtherItem;
}

interface IBusinessPlanItem {
  what_i_have_to_do: string;
  where_to_start: string;
  title: string;
  step: number;
}

interface IbusinessOtherItem {
  [key: string]: {
    title: string;
    text: string;
  };
}
