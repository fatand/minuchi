import React from 'react';
import ItemList from './ItemList';
import products from "../data.json";


const ItemListContainer = () => {

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (products.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(products);
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

  console.log(products);

  const cat = products.map((prod) => {
    return prod.category;
  })

  console.log(cat);

  return (
    <>
    {/* ACA CARGO EL jsx DE ITEM LIST DONDE LE PASO LA LISTA DE PRODUCTOS products Y LAS CATEGORIAS */}
    <ItemList products={products} cat={cat} />
    </>
  )
}

export default ItemListContainer