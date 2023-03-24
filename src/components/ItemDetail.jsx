import React from 'react'
import { useParams } from 'react-router-dom';
import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
import ItemCount from './ItemCount';
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({products}) => {
  const { id } = useParams();
  const [producto, setProduct] = useState([]);

    useEffect(() => {
      const db = getFirestore();
      const productReference = doc(db, "products", `${id}`);
  
      getDoc(productReference).then((snapshot) => {
        if (snapshot.exists()) {
          setProduct(snapshot.data());
        } else {
          console.log("No existe el documento!");
        }
      });
    }, []);
  
    const productFilter = products.filter((product) => product.id == id);

  

  return (
    <>
      {productFilter.map((product) => (
        <div key={product.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody className="card-body">
                <Image 
                  src={product.image}
                  alt={product.name}
                  borderRadius="lg"                 
                  boxSize='200px'
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.name}</Heading>
                  <Text color="black" fontSize="l">
                    Descripción: {product.description}
                  </Text>
                  <Text color="black" fontSize="l">
                    Categoría: {product.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {product.stock}
                  </Text>
                  <Text color="teal" fontSize="xl">
                    Precio: $ {product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount 
                  stock={product.stock}
                  id={product.id}
                  price={product.price}
                  name={product.name}
                  image={product.image}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>      
        ))}
    </>
  )
}

export default ItemDetail