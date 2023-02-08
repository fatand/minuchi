import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'



const CartWidget = () => {
  return (
    <div className='cartWidget'>
        <span class="material-symbols-outlined">
            shopping_cart
        </span>
        <p className='cartNumber'>4</p>
    </div>
    
  )
}

export default CartWidget

