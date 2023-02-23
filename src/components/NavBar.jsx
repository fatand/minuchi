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
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex align="center" justify="space-between" bg='#A6A177'>
        <Link to="/">
            <Box boxSize='200px' p='10px'>
                <Image src={logo} alt='Minuchi Logo' />
            </Box>
        </Link>

        <Link to="/catalogue">
            <Box display="flex" alignItems="center" justifyContent="flex-start" padding="10">
                <Button> Catálogo</Button>
            </Box>
        </Link>

        <Box p='10' bg=''>
            <Menu>
                <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} bgColor='rgb(255, 255, 254)' border='solid #DF7D4F 2px'>
                    Categorías
                </MenuButton>
                <MenuList>
                    <Link to={`/category/${"birthday-party"}`}>
                        <MenuItem>Cumpleaños</MenuItem>
                    </Link>
                    <Link to={`/category/${"baby-shower"}`}>
                        <MenuItem>Baby Shower</MenuItem>
                    </Link>
                    {/* <Link to={`/category/${"bridal-shower"}`}> */}
                        <MenuItem>Bridal Shower - Coming soon</MenuItem>
                    {/* </Link> */}
                    {/* <Link to={`/category/${"sorpresitas"}`}> */}
                        <MenuItem>Sorpresitas - Coming soon</MenuItem>
                    {/* </Link> */}
                    <Link to={`contact`}>
                        <MenuItem>Contacto</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
        <Spacer />
        <Link to="/cart">
            <Box p='10' bg=''>
                <CartWidget />
            </Box>
        </Link>
    </Flex>

  )
}

export default NavBar