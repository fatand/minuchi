import React from 'react';
import ItemList from './ItemList';
import products from "../data.json";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  // console.log(category);
  const { category } = useParams(); 

  console.log(category);

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(products); //El array de productos del json que se trae mediante la promesa queda bajo la variable "products
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingData();

  const catFilter = products.filter((product) => product.category === category);


  return (
    <>
    {/* ACA CARGO EL jsx DE ITEM LIST DONDE LE PASO LA LISTA DE PRODUCTOS products Y LAS CATEGORIAS */}
    {category ? <ItemList products={catFilter} /> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer