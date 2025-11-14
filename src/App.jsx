import './App.css'
import ProductCart from './components/product-cart'
import Header from './components/header'

function App() {

  return (
    <>
    <div>
     <Header/>
     <ProductCart name="i phone" description="brand new" price="Rs.1000"/>
     <ProductCart name="i phone 15 pro max" description="brand new" price="Rs.15000"/>
     <ProductCart name="i phone 14 pro max" description="brand new" price="Rs.16000"/>
     <ProductCart name="i phone 17 pro max" description="brand new" price="Rs.18000"/>
    </div>
    </>
  )
}

export default App
