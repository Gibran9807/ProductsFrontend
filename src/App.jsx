import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./components/products/Home"
import ProductsList from './components/products/ProductsList'

function App() {
  return (
      <BrowserRouter>
        <div className="container p-5">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<ProductsList/>} />
              <Route path="/edit/:id" element={<ProductsList/>}/>
          </Routes>
        </div>
      </BrowserRouter>

    )
}

export default App