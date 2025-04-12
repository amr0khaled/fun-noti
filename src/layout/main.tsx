import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectLabel, SelectTrigger, SelectValue, SelectGroup, SelectItem } from "@/components/ui/select"
import { useCallback, useMemo, useState } from "react"

type QuoteType = 'compliment' | 'fortune' | 'funfact' | 'pizzaidea' | 'lifetruth' | 'thought'
type Quote = {
  success: boolean,
  data: { [key: string]: string }
}

const quoteTypes = ['compliment', 'fortune', 'fun_fact', 'pizza_idea', 'life_truth', 'thought']
const titletype = ['Compliment', 'Fortune', 'Fun fact', 'Pizza idea', 'Life truth', 'Thought']

export default function Main() {
  const [whichType, setType] = useState<QuoteType>('compliment')
  const [quote, setQuote] = useState<Quote>({
    success: false,
    data: {}
  })
  const fetchQuotes = useCallback(async () => {
    let type = whichType
    if (whichType.includes('_')) {
      type = whichType.split('_').join('') as QuoteType
    }
    const res = await fetch(`/api/${type}`)
    setQuote(await res.json() as Quote)
  }, [whichType])

  const upperType = useMemo(() => {
    let type = whichType
    if (whichType.includes('_')) {
      type = whichType.replace('_', " ") as QuoteType
    }
    return `${type[0].toUpperCase()}${type.slice(1)}`
  }, [whichType])
  return (
    <main className='flex justify-center items-center h-[90vh]'>
      <Card className='flex flex-col justify-center gap-8 max-w-[500px]'>
        <CardHeader className='flex flex-col gap-y-4'>
          <CardTitle>Get your fun words for today!</CardTitle>
          <Label>Select your words type</Label>
        </CardHeader>
        <CardContent>
          <p className='text-wrap'>{!quote.data[whichType] ? 'Your lucky words will be shown here!!' : quote.data[whichType]}</p>
        </CardContent>
        <CardFooter className='flex justify-evenly'>
          <Select onValueChange={(e: QuoteType) => setType(e)} defaultValue={whichType}>
            <SelectTrigger>
              <SelectValue placeholder={upperType} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Types</SelectLabel>
                {titletype.map((e, i) =>
                  <SelectItem key={i} value={quoteTypes[i]}>
                    {e}
                  </SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button onClick={fetchQuotes}>Get your {upperType}</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
