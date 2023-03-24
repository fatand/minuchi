import { Flex } from '@chakra-ui/react';
import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {

  return (
    <>
      <Flex align="center" justify="center" bg='' flexWrap="wrap" p="10px">
        {products.map((prod) => { //aca estoy haciendo un map para cada producto
          return (
            
              <Item 
                  key={prod.id}
                  id={prod.id}
                  name={prod.name}
                  description={prod.description}
                  price={prod.price}
                  stock={prod.stock}
                  category={prod.category}
                  theme={prod.theme}
                  image={prod.image}
              />
          )
        })}
      </Flex>
    </>
  )
}

export default ItemList