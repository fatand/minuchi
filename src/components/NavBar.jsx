import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    HStack,
  } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from '../assets/logos-14.png'

const NavBar = () => {
  return (
    <Flex align="center" justify="space-between" bg='#A6A177'>
        <Box boxSize='200px' p='10px'>
            <Image src={logo} alt='Minuchi Logo' />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="flex-start" padding="10">
            <h1>Minuchi e-commerce</h1>
            
        </Box>

        <Box p='10' bg=''>
            <Menu>
                <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} bgColor='rgb(255, 255, 254)' border='solid #DF7D4F 2px'>
                    Menu
                </MenuButton>
                <MenuList>
                    <MenuItem>Cumpleaños</MenuItem>
                    <MenuItem>Baby Shower</MenuItem>
                    <MenuItem>Bridal Shower</MenuItem>
                    <MenuItem>Sorpresitas</MenuItem>
                    <MenuItem>Contacto</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Spacer />
        <Box p='10' bg=''>
            <CartWidget />
        </Box>
    </Flex>

  )
}

export default NavBar