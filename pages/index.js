import React from 'react'
import { Product , FooterBanner ,HeroBanner} from "../components"
import {client} from '../lib/client';

const Home = ({products,bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Produits les plus vendus</h2>
        <p>Variété de motifs</p>
      </div>
      <div className='products-container'>
        {products?.map((product) =><Product key={product._id} product={product}/>)}
        
      
      </div>
    <FooterBanner footerBanner={bannerData.length && bannerData[1]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query ='*[_type =="product" ]';

  const products =await client.fetch(query);

  const banneryQuery ='*[_type =="banner"]';
  const bannerData = await client.fetch(banneryQuery);
  

  return  {
    props :{products,bannerData}
}
}

export default Home;