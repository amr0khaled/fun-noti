import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectLabel, SelectTrigger, SelectValue, SelectGroup, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import { QuoteType, useFetchQuote } from "@/hooks/fetch-quotes"
import { useIsMobile } from "@/hooks/is-mobile"


const quoteTypes = ['compliment', 'fortune', 'fun_fact', 'pizza_idea', 'life_truth', 'thought']
const titletype = ['Compliment', 'Fortune', 'Fun fact', 'Pizza idea', 'Life truth', 'Thought']

export default function Main() {
  const isMobile = useIsMobile()
  const {
    setType,
    type: whichType,
    exec,
    quote,
    isLoading,
    upper: upperType,
    error
  } = useFetchQuote()
  console.log(import.meta.env.MODE === 'production')
  return (
    <main className='flex justify-center items-center h-[90vh]'>
      <Card className='flex flex-col justify-center w-[330px] min-w-[250px] md:w-[500px] md:min-w-[450px]'>
        <CardHeader className='flex flex-col gap-y-4'>
          <CardTitle>Get your fun words for today!</CardTitle>
          <Label>Select your words type</Label>
        </CardHeader>
        <CardContent className='flex flex-col gap-8 justify-between'>
          <Separator />
          {
            isLoading
              ? <div className='w-full flex justify-center items-center'><Spinner /></div>
              :
              <h3 className={`text-wrap font-semibold text-xl ${error ? 'text-red-400' : 'text-green-300'}`.trim()}>{!quote.data[whichType] ? 'Press this button to get your words 👇' : quote.data[whichType]}</h3>
          }
          <Separator />
        </CardContent>
        <CardFooter className={`flex justify-around ${isMobile && 'flex-col gap-4'}`.trim()}>
          <Select onValueChange={(e: QuoteType) => setType(e)} defaultValue={whichType}>
            <SelectTrigger className={`cursor-pointer ${isMobile && "w-full"}`.trim()}>
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
          <Button className={`cursor-pointer hover:brightness-95 ${isMobile && "w-full"}`.trim()} onClick={exec}>
            {isLoading ? "Loading..." : `Get your ${upperType}`}
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
