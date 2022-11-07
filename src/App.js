import './style.css'
import React, {useEffect, useState}  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navigation/Navbar'
import Footer from './Components/Navigation/Footer'
import Home from './Views/Home';
import Products from './Views/Products';
import ProductDetails from './Views/ProductDetails';
import Contact from './Views/Contact';
import NotFound from './Views/NotFound'
import { ProductsContext } from './contexts/contexts'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7373"
    },
    secondary: {
      main: "#fcfcfc"
    }
  }
});

function App() {
  const [products, setProducts] = useState({
    allProducts: [],
    featuredProducts: [],
    cardSectionProducts: []
  })


  useEffect(() => {
    const fetchAllData = async () => {
      Promise.all([
        await fetch('https://win22-webapi.azurewebsites.net/api/products'),
        await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8'),
        await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4'),
      ])
      .then(([resAll, resFeatured, resCardProd]) => 
        Promise.all([resAll.json(), resFeatured.json(), resCardProd.json()])
      ) 
      .then(([dataAll, dataFeatured, dataCardProd]) => {
        setProducts({
          allProducts: dataAll,
          featuredProducts: dataFeatured,
          cardSectionProducts: dataCardProd
        })
      })
    }
    fetchAllData()

  }, [setProducts])  

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/'>
        <ProductsContext.Provider value={products}>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />}/>
            </Routes>
          <Footer />
        </ProductsContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
