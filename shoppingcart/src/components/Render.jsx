import { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard"

export default function Render(items){
    // extract from the items
    
    let data=items["items"];
    
    let cards=[]
    data.map((item)=>{
               
            const productInfo = {
                image:item["image"],
                title: item["title"],
                description: item["description"],
                formattedPrice: `${item["price"]}`,
                id:item["id"]
              };
              
                cards.push(<ProductCard {...productInfo} />)
              
            
        })
    
    return(
        <>
        {cards}
        </>
    );
    
    // <ProductCard {...productInfo} />
}
