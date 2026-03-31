import { useEffect, useState } from "react"
import Banner from "./components/Banner"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Getstarted from "./components/Getstarted"
import Navbar from "./components/Navbar"
import Pricingcard from "./components/Pricingcard"
import Products from "./components/Products"
import Workflow from "./components/Workflow"
import Cart from "./components/Cart"

const getProducts = async () => {
  const res = await fetch ('/digitools.json')
  return res.json()
}

// const productPromise = getProducts()

function App() {
const [products, setProducts] = useState([])
const [carts, setCarts] = useState([])

useEffect(() => {
  getProducts().then(data => setProducts(data))
}, []);


  return (
    <>
      <Navbar carts={carts}/>
      <Banner/>
      <Counter/>
      <Products products={products} carts={carts} setCarts={setCarts}/>
      {/* <Cart carts={carts}/> */}
      <Getstarted/>
      <Pricingcard/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
