import {useState} from 'react'
import Products from './Components/Products'
import './App.css';

function App() {
  
  const [products, setProducts] = useState([
    {
      id: 19876,
      productData: {
        name: "Nike Hyperdrive 0x3",
        pricing: 105, 
        quarter: 3,
        productiondata: {
          region: "SW NAUS",
          data: "12/01/2023"
        }
      }
    },
    {
      id: 19877,
      productData: {
        name: "Under armor long sleeve essential collection",
        pricing: 210, 
        quarter: 2,
        productiondata: {
          region: "SW NAUS",
          data: "12/07/2023"
        }
      }
    },
    {
      id: 19878,
      productData: {
        name: "Nike kick back 2010",
        pricing: 135, 
        quarter: 2,
        productiondata: {
          region: "SW NAUS",
          data: "11/02/2023"
        }
      }
    },
  ])
  
  return (



    <>
      <h1>Instructions</h1>
      <p>Answer the questions in the ./components/questions.txt file, then move onto the ./components/Products.jsx file. Good luck.</p>

      {/* Comonents to be rendered below */}
      <Products products={products}/>
    </>
  );
}

export default App;
