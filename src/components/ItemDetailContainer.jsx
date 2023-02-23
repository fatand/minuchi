import React, { useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import products from "../data.json";


const ItemDetailContainer = () => {

  const { id } = useParams();
  console.log(id);

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

  const productFilter = products.filter((product) => product.id == id);

  return (
    <>
      <ItemDetail products={productFilter} /> 
    </>
  )
}

export default ItemDetailContainer