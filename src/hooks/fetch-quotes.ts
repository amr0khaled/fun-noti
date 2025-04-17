import { Quote, QuoteType } from "@/lib/types"
import { useCallback, useEffect, useMemo, useState } from "react"



export const useFetchQuote = () => {
  const baseApi = 'https://api.codetabs.com/v1/proxy?quest=https://my-fun-api.onrender.com/'
  const [whichType, setType] = useState<QuoteType>('compliment')
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { upper: word, setWord } = useUpperCase()
  const [isOffline, setOffline] = useState(false)
  const [quote, setQuote] = useState<Quote>({
    success: false,
    data: {}
  })
  useEffect(() => {
    setOffline(!navigator.onLine)
  }, [isOffline])

  const fetching = async () => {
    let type = whichType
    if (whichType.includes('_')) {
      type = whichType.split('_').join('') as QuoteType
    }

    const url = `${baseApi}${type}`
    try {
      const res = await fetch(encodeURI(url))
      if (!res.ok) {
        throw new Error("HTTP error!: " + res.status)
      }
      const ob = await res.json()
      return ob
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
        if (isOffline) {
          throw Error("OFFLINE")
        }
        const res = await fetching()
        if (res === undefined) throw new Error("Empty response")
        setQuote(res)
        setLoading(false)
        break
      } catch (e) {
        console.error('Retry error:', e, isOffline)
        setError(true)
        setLoading(false)
        setQuote({
          success: false,
          data: {
            [whichType]: isOffline ? "Your are offline. Try again later" : "Connection Error."
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
  }, [whichType, setWord, isOffline])

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


export const useUpperCase = () => {
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
