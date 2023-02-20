import React from 'react'
import productpic from '../assets/product_example.png'
import { Image } from '@chakra-ui/react'

const Item = ({id, name, stock, category, price}) => {
  return (
    <>
        <div>
            <h1>Item id: {id}</h1>
            <h5>Producto: {name}</h5>
            <Image src={productpic} />
            <h5>Stock: {stock}</h5>
            <h5>Categoría: {category}</h5>
            <h5>$ {price}</h5>
        </div>
    </>
  )
}

export default Item