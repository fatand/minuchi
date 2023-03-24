import React, { useState } from 'react'
import {
    Text,
    ButtonGroup,
    IconButton,
    Tooltip,
    Center,
    Button
  } from "@chakra-ui/react";
  import { AddIcon, MinusIcon } from "@chakra-ui/icons";
  import { useContext } from "react";
  import { CartContext } from "../contexts/ShoppingCartContext";

const ItemCount = ({stock, id, price, name, image}) => {
    const [cart, setCart] = useContext(CartContext);
    const [count, setCount] = useState(1);

    const addQty = () => {
        setCount(count + 1);
    };

    const substractQty = () => {
        setCount(count - 1);
    }

    const addToCart = () => {
      setCart((currItems) => {
        const isItemFound = currItems.find((item) => item.id === id);
        if (isItemFound) {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + count};
            } else {
              return item;
            }
          });
        } else {
          return [...currItems, { id, quantity: count, price, name, image }];
        }
      });
    };
   
  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline" padding="20px">
        {count < 1 ? (
          <Tooltip label="Ha alcanzado el mínimo" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractQty} />
        )}
        <Center width="40px">
          <Text>{count}</Text>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="Ha alcanzado el stock máximo" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
      <Button
            onClick={() => addToCart()}
            variant="solid"
            colorScheme='teal'
          >
            Agregar al carrito
          </Button>
    </>
  )
}

export default ItemCount