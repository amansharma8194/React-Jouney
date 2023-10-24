import React from 'react'
import { useId } from 'react'

const InputBox = (
  {
    label="",
  amount,
  currencyOptions=[],
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
  amountDisable=false,
  currencyDisable=false,
  className=""
  }
) => {
  const amountInputId = useId();
  return (
    <div className={`p-3 rounded-lg bg-white text-sm flex ${className}`} >
            <div className="w-1/2">
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                 id={amountInputId}
                 type="number"
                 placeholder='Amount'
                 className='outline-none w-full py-1.5 bg-transparent'
                 value={amount}
                 disabled = {amountDisable}
                 onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}  />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className='text-black/40 mb-2 w-full'>Choose Currency</p>
                <select 
                disabled = {currencyDisable}
                value={selectCurrency}
                onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                    {
                      currencyOptions.map((currency)=>(
                        <option value={currency} key={currency}>{currency}</option>
                      ))
                    }
                </select>
            </div>
    </div>
  )
}

export default InputBox
