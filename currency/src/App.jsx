import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedamount, setConvertedAmount ] = useState(0)

  const currencyinfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyinfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedamount)
  }
  
 const convert = () => {
  setConvertedAmount(amount * currencyinfo[to])
 }


  return (
    <>
     <h1 className='text-3xl bg-orange-500'>
      Currency app with chai</h1>
    </>
  )
}

export default App
