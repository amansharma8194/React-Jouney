import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import Params from './components/Params/Params.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact/>} />
        <Route path='github' element={<Github />} />
        <Route path=':userid' element = {<Params />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
