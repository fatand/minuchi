import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {

  return (
    <>
      <Flex align="center" justify="center" bg=''>
        <VStack>
          <Box>Mi Carrito</Box>
          <Box>El carrito está vacio.</Box>
          <Link to="/">
            <Box>Seguir navegando</Box>
          </Link>
        </VStack>
      </Flex>

    </>
  )
}

export default Cart