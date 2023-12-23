import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
const HeroBanner = ({heroBanner :{smallText,image,midText,largeText1,product,buttonText,desc}}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{smallText}</p>
        </div>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image).url()} alt="Tissu-bazin" className='hero-banner-image'/>
        <div>
            <Link href="/">
            <button type="button">{buttonText}</button>
            </Link>
            <div className='desc'>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
