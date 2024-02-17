import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
 
const HeroBanner = ({heroBanner :{smallText,image,midText,largeText1,product,buttonText,desc}}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{smallText}</p>
        </div>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <Image loader={imageLoader} src={urlFor(image).url()} alt="Tissu-bazin" width={500} height={500} className='hero-banner-image'/>
        <div>
            <Link href="/boutique">
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
