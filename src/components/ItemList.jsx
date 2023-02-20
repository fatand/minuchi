import React from 'react'
import Item from './Item'

const ItemList = ({products, cat}) => {
    console.log("ITEM LIST");
    console.log(products);
    console.log(cat);

    const catFilter = cat.filter((cat) =>{
        return cat === "MTB";
    })

    console.log(catFilter);

  return (
    <>
    <div>Catálogo de productos</div>
    <div>
      {products.map((prod) => { //aca estoy haciedno un map para cada producto
        return (
            <Item 
                key={prod.id}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
                stock={prod.stock}
                category={prod.category}
            />
        )
      })}
    </div>
    </>
  )
}

export default ItemList