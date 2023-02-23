import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import logo from '../assets/logos-14.png'
import { Image } from '@chakra-ui/react'


const Footer = () => {
  return (
    <>
     <Flex align="center" justify="space-between" bg='#A6A177'>
            <Link to="/">
            <Box boxSize='100px' p='10px'>
                <Image src={logo} alt='Minuchi Logo' />
            </Box>
            </Link>
            <Link to="/">
                <Box p='10' bg=''>
                    Volver a Inicio
                </Box>
            </Link>

            <Link to="/contact">
                <Box p='10' bg=''>
                    Contacto
                </Box>
            </Link>
     </Flex>

    </>
  )
}

export default Footer