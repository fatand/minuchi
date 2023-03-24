import { Box, Flex, VStack, Stack, HStack } from '@chakra-ui/react'
import {
  Center,
  Heading,
  Card,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";
import { Image } from '@chakra-ui/react';
import { DeleteIcon} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const Cart = () => {

  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  console.log("Cart:");
  console.log(cart);

  const deleteProduct = (id)=> {
    setCart(cart.filter((item) => item.id !== id));
  }
  const cantProductos = cart.length;
  
  const subtotalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  const shippingCost = 200

  const totalPrice = subtotalPrice + shippingCost

  return (
    <>
      <Center>
        <Heading as="h2">
          Mi carrito
        </Heading>
      </Center>

    {cantProductos == 0 ? 
      <Flex align="center" justify="center" bg=''>
        <VStack>
          <Box>El carrito está vacio.</Box>
          <Link to="/">
            <Box>Seguir navegando</Box>
          </Link>
        </VStack>
      </Flex>
 :
      <Flex align="center" justify="center" bg='' flexWrap="wrap" p="10px" flexDirection="row">
        <Flex align="flex-start" flexDirection="column">
            {cart.map((item) => {
              return (
                <Flex key={item.id} padding="10px" margin="10px">
                  <Card minWidth="600px">
                    <HStack>
                    <Image 
                          src={item.image}
                          alt={item.name}
                          borderRadius="lg"                 
                          boxSize='100px'
                    />
                    <CardHeader>
                      <Heading size="md">{item.name}</Heading>
                    </CardHeader>
                      <Text as="b">Cantidad: {item.quantity}</Text>
                      <Text>Subtotal: $ {item.price * item.quantity}</Text>
                    <IconButton 
                        icon={<DeleteIcon />}
                        colorScheme="red" 
                        onClick={() => deleteProduct(item.id)}
                      />
                    </HStack>
                  </Card>
                  
                </Flex>
              );
            })}
          </Flex>
        <Box>
          <Heading as="h3">Resumen del pedido</Heading>
          <Text>Subtotal: $ {subtotalPrice}</Text>
          <Text>Envío: $ {shippingCost}</Text>
          <Text>Total: $ {totalPrice}</Text>
          <SendOrder cart={cart} totalPrice={totalPrice}/>
        </Box>
  
      </Flex>
    }
    </>
  )
}

export default Cart