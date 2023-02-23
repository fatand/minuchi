import React from 'react'
import productpic from '../assets/example.jpg'


import { Box, Flex, Image } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name, stock, category, price, description, theme, image}) => {
  return (
    <>
        <Flex  align="center" justify="flex-start" m="10px">
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={productpic}
                // src={`image_id${id}.jpg`}
                alt={name}
                borderRadius='lg'
                boxSize='200px'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{name}</Heading>
                {/* <Text> {description} </Text> */}
                <Text color='teal' fontSize='2xl'>
                  ${price}
                </Text>
                <Text> Stock: {stock} </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Box>
              <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='teal'>
                  <Link to={`/item/${id}`}>Detalle</Link>
                </Button>
              </ButtonGroup>
              </Box>
            </CardFooter>
          </Card>
        </Flex>
    </>
  )
}

export default Item