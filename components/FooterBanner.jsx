import React from "react";
import Link from 'next/link';
import { urlFor } from "../lib/client";
import Image from "next/image";


const FooterBanner = ({ footerBanner :{discount ,largeText1,desc,largeText2,saleTime,smallText,midText,product,buttonText,image}}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
          <div className="left">
              <p>{discount}</p>
              <h3 className="interline">{largeText1}</h3>
              <h3>{largeText2}</h3>
              <p>{saleTime}</p>
          </div>
          <div className="right">
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>
            <Link href="/boutique">
              <button type="button">{buttonText}</button>
            </Link>
          </div>
          <Image src={urlFor(image).url()} alt="" width={600} height={600} className="footer-banner-image" />

      </div>
    </div>
  )
}

export default FooterBanner
