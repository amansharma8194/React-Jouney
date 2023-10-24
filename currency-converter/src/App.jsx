import { useState , useEffect} from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import  InputBox  from './components/InputBox'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currrencyInfo);
  
  const swap = () => {
    const tempLabel = from;
    const tempAmount = amount;
    setFrom(to);
    setTo(tempLabel);
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };
  const convert = ()=>{
    setConvertedAmount(amount * currrencyInfo[to]);
  }

  return (
    <div className='w-full h-screen flex place-content-evenly p-20'>
      <img src="https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-2/5 h-max rounded-md' />
      <div className='w-2/5 h-max border-2 border-blue-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e)=>e.preventDefault()} >
            <div className='w-full m-2'>
              <InputBox 
                label = "From"
                amount = {amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency)=>{setFrom(currency)}}
                selectCurrency = {from}
                onAmountChange = {(amount)=>{setAmount(amount)}}
              />
            </div>
            <div className='relative w-full h-0.5 m-2'>
              <button
                type='button'
                onClick={swap}
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              >Swap</button>
            </div>
            <div className='w-full m-2 mb-8'>
              <InputBox 
                label = "To"
                amount = {convertedAmount}
                currencyOptions = {options}
                onCurrencyChange = {(currency) => {setTo(currency)}}
                selectCurrency = {to}
                amountDisable = {true}
              />
            </div>
            <button 
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            onClick={convert}>
              Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
          </form>
      </div>
    </div>
  )
}

export default App
