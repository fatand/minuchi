import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Container,
    Box,
    Flex,
    Textarea,
  } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
    <div>Contactanos</div>

    <div>Envianos tu mensaje por consultas, dudas, pedidos especiales, lo que necesites.</div>

    <Container >
      <FormControl>
        <Box>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" placeholder='*'/>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder='*'/>
          <FormLabel>Celular</FormLabel>
          <Input type="number" placeholder=''/>
        </Box>
        <FormLabel>Mensaje</FormLabel>
        <Textarea placeholder='Escriba aquí su mensaje.'></Textarea>
        <Box className="btn-send">
          <Button colorScheme="teal" variant="outline">
            Enviar
          </Button>
        </Box>
      </FormControl>
    </Container>
    
    
    </>

  )
}

export default Contact