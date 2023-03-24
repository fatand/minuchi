import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Heading } from '@chakra-ui/react';



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); 

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(products);
    });
  }, []);




  const catFilter = products.filter((product) => product.category === category);


  return (
    <>
    <Flex align="center" justify="center" bg='' flexWrap="wrap" p="10px" flexDirection="column">
      <Heading as="h2">Catálogo de productos</Heading>
      {/* ACA CARGO EL jsx DE ITEM LIST DONDE LE PASO LA LISTA DE PRODUCTOS products Y LAS CATEGORIAS */}
      {category ? <ItemList products={catFilter} /> : <ItemList products={products} />}
    </Flex>
    </>
  )
}

export default ItemListContainer