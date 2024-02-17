import { urlFor } from "../lib/client";
import React from "react";
import Link from 'next/link';
import Image from "next/image";

const Product = ({product :{image,name,slug,price}}) => {
  return (
    <div>
      <Link href={`/product/${slug?.current}`}>
        <div className="product-card">
          <Image  src={urlFor(image && image[0]).url()} alt='produit'
              width={250} 
              height={250}
          className="product-image" 
         />
         <p className="product-name">{name}</p>
         <p className="product-price">{price} FCFA</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
