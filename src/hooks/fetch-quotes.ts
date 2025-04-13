import { useCallback, useMemo, useState } from "react"


export type QuoteType = 'compliment' | 'fortune' | 'funfact' | 'pizzaidea' | 'lifetruth' | 'thought'
export type Quote = {
  success: boolean,
  data: { [key: string]: string }
}

export const useFetchQuote = () => {
  const baseApi = 'https://corsproxy.io/?url=https://my-fun-api.onrender.com/'
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

    const url = `${baseApi}${type}`
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error("HTTP error!: " + res.status)
      }
      return await res.json() as Quote
    } catch (e) {
      console.error('Fetch error:', e)
      setError(true)
    }
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const MAX_TRIES = 5
  const fetchQuotes = useCallback(async () => {
    setWord(whichType)
    for (let tries = 0; tries < MAX_TRIES; tries++) {
      try {
        setError(false)
        setLoading(true)
        const res = await fetching()
        if (!res) throw new Error("Empty response")
        setQuote(res)
        setLoading(false)
        break
      } catch (e) {
        console.error('Retry error:', e)
        setError(true)
        setLoading(false)
        setQuote({
          success: false,
          data: {
            [whichType]: "Connection Error."
          }
        })
        if (tries === MAX_TRIES - 1) {
          setQuote({
            success: false,
            data: {
              [whichType]: "Try again later."
            }
          })
        } else {
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
