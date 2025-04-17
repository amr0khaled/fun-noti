export type QuoteType = 'compliment' | 'fortune' | 'funfact' | 'pizzaidea' | 'lifetruth' | 'thought'
export type QuoteResType = 'compliment' | 'fortune' | 'fun_fact' | 'pizza_idea' | 'life_truth' | 'thought'
export type Quote = {
  success: boolean,
  data: {
    compliment?: string,
    fortune?: string,
    fun_fact?: string,
    pizza_idea?: string,
    life_truth?: string,
    thought?: string
  }
}
