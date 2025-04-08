import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/appRoutes"
import { ToastContainer } from "react-toastify"

function App() {
  
  return (
    <BrowserRouter>
      
      <AppRoutes />

    </BrowserRouter>
  )
}

export default App;
