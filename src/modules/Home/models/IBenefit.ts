export interface IBenefit {
  benefitItems: IBenefitItem[];
}

interface IBenefitItem {
  picture: string;
  title: string;
  text: string;
  id: number;
}
