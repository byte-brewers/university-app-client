export interface IBenefit {
  benefitItems: IBenefitItem[]
}

interface IBenefitItem {
  picture: string
  alt: string
  title: string
  text: string
  id: number
}
