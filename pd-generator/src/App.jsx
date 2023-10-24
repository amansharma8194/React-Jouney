import { useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isUpper, setIsUpper] = useState(true);
  const [isLower, setIsLower] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isSymbol, setIsSymbol] = useState(true);
  const [password, setPassword] = useState("");
  const passwordInRef = useRef(null)


  function getRandomPassword(){
    let sampleSpace = "";
    let password = "";
    if(isUpper) sampleSpace += "ABCDEFGHIJKLMNOPQRSTUVwXYZ";
    if(isLower) sampleSpace += "abcdefghijklmnopqrstuvwxyz";
    if(isNumber) sampleSpace += "1234567890";
    if(isSymbol) sampleSpace += "!@#~`$%^&*()_+{}[]\|?/.>,<";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * sampleSpace.length + 1);
      password += sampleSpace.charAt(randomIndex);
    }
    return password;
  }
  const copyToClipboard = ()=>{
    passwordInRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  useEffect(()=>{
    setPassword(getRandomPassword());
  },[length, isUpper, isLower, isNumber, isSymbol]);

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-20 bg-slate-700 text-white'>
          <h1 className='text-center text-2xl my-3'>Password Generator</h1>
          <div className='flex rounded overflow-hidden mb-4'>
            <input type="text"
            value = {password}
            placeholder= "Password"
            className='outline-none w-full py-1 px-2 text-slate-700'
            ref={passwordInRef}
            readOnly
            />
            <button
            className= "outline-none bg-blue-700 text-white px-2 shrink-0.5 hover:bg-blue-900"
            onClick={copyToClipboard}
            >Copy</button>
          </div>
          <div className='flex text-lg place-content-between mb-4'>
          <label htmlFor="length">Length: {length}</label>
            <input
             type="range"
             min={6}
             max={50}
             value={length}
             id= "length"
             className='cursor-pointer w-4/6'
             onChange={(e)=>setLength(e.target.value)}
              />
             
          </div>
          <div className='flex text-lg place-content-between mb-4'>
            <label htmlFor="isUpper">Uppercase</label>
            <input
             type="checkbox"
             id="isUpper"
             defaultChecked={isUpper}
             onChange={()=>{setIsUpper(prev=>!prev)}}
             className='form-checkbox h-5 w-5'/>
          </div>
          <div className='flex text-lg place-content-between mb-4'>
            <label htmlFor="isLower">Lowercase</label>
            <input 
            type="checkbox" 
            id="isLower" 
            defaultChecked={isLower}
            onChange={()=>{setIsLower(prev=>!prev)}} 
            className='form-checkbox h-5 w-5'/>

          </div>
          <div className='flex text-lg place-content-between mb-4'>
            <label htmlFor="isNumber">Numbers</label>
            <input 
            type="checkbox" 
            id="isNumber" 
            defaultChecked={isNumber}
            onChange={()=>{setIsNumber(prev=>!prev)}} 
            className='form-checkbox h-5 w-5'/>
            
          </div>
          <div className='flex text-lg place-content-between mb-4'>
            <label htmlFor="isSymbol">Symbols</label>
            <input 
            type="checkbox" 
            id="isSymbol" 
            defaultChecked={isSymbol} 
            onChange={()=>{setIsSymbol(prev=>!prev)}}
            className='form-checkbox h-5 w-5'/>
          </div>
        </div>
    </>
  )
}

export default App
