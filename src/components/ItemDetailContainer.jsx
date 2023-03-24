import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect} from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(products);
    });
  }, []);


  return (
    <>
      <ItemDetail products={data} /> 

    </>
  )
}

export default ItemDetailContainer