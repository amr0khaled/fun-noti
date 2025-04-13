import { useCallback, useMemo, useState } from "react"


export type QuoteType = 'compliment' | 'fortune' | 'funfact' | 'pizzaidea' | 'lifetruth' | 'thought'
export type Quote = {
  success: boolean,
  data: { [key: string]: string }
}
export const useFetchQuote = () => {
  const [whichType, setType] = useState<QuoteType>('compliment')
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { upper: word, setWord } = useUpper()
  const [quote, setQuote] = useState<Quote>({
    success: false,
    data: {}
  })
  const fetching = async () => {
    let type = whichType
    if (whichType.includes('_')) {
      type = whichType.split('_').join('') as QuoteType
    }
    const res = await fetch(`/api/${type}`)
    return await res.json() as Quote
  }
  const delay = (ms: number) => {
    return new Promise(e => setTimeout(e, ms))
  }
  const MAX_TRIES = 5;
  const fetchQuotes = useCallback(async () => {
    setWord(whichType as QuoteType)
    for (let tries = 0; tries < MAX_TRIES; tries++) {
      try {
        setError(false)
        setLoading(true)
        setQuote(await fetching())
        setLoading(false)
        break
      } catch (e) {
        setError(true)
        setLoading(false)
        JSON.stringify(e)
        setQuote({
          success: false,
          data: {
            [whichType]: "Connection Error."
          }
        })
        if (tries > MAX_TRIES) {
          setLoading(false)
          setQuote({
            success: false,
            data: {
              [whichType]: "Try again later."
            }
          })
        } else {
          setTimeout(() => {
            console.log(tries)
            if (tries === 4) {
              setLoading(false)
            } else {
              setLoading(true)
            }
          }, 500)
          await delay(1500)
        }
      }
    }
  }, [whichType, setWord])
  return {
    isLoading,
    setType,
    type: whichType,
    upper: word,
    quote,
    exec: fetchQuotes,
    error
  }
}

export const useUpper = () => {
  const [whichType, setType] = useState<QuoteType>('compliment')
  const upperType = useMemo(() => {
    let type = whichType
    if (whichType.includes('_')) {
      type = whichType.replace('_', " ") as QuoteType
    }
    return `${type[0].toUpperCase()}${type.slice(1)}`
  }, [whichType])
  return {
    upper: upperType,
    setWord: setType
  }
}
