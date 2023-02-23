import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Contact from './components/Contact'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/catalogue" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
