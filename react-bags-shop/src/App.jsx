import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Content from './components/Content'
import Menu from './components/Menu'
import { CartProvider } from './context/CartContext';
import { FavoriteProvider } from './context/FavoriteContext';

function App() {
  return (
    <FavoriteProvider>
      <CartProvider>
        <Navbar/>
        <Hero/>
        <Content/>
        <Menu/>
      </CartProvider>
    </FavoriteProvider>
  )
}

export default App
