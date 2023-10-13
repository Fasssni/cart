import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom"
import "./main.css"
import { ShoppingCartProvider } from './context/StoreContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <ShoppingCartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShoppingCartProvider>

)
