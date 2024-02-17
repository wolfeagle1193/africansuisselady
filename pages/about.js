import React from 'react';
import Image from 'next/image';


const AboutPage = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2 style={{ color: 'white' }}>Qui nous sommes</h2>
        <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet</p>
      </section>

      <section id="about-head" className="section-p1">
        <Image width={250} height={250} src="/images/logo.png" alt="image" />
        <div>
          <h2>Qui sommes-nous</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <abbr title="">
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </abbr>
          <br />
          <br />
          <marquee loop="-1" style={{ backgroundColor: '#ccc' }} scrollamount="5" width="100%">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </marquee>
        </div>
      </section>

      
    </>
  );
};

export default AboutPage;