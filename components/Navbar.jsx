import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { FaOutdent } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    // Vérifier si la route correspond à la page de détails du produit
    if (router.query.productId) {
      setActiveItem('');
    }
  }, [router.query.productId]);

  return (
    <div className="navbar-container">
      <p className="logoContainer">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </Link>
        <span>AfricanSuisseLady</span>
      </p>
      <div className={`main_navbar ${isMenuOpen ? '' : 'menu-hidden'}`}>
        <ul className="navbar">
          <li>
            <Link href="/" as="/">
              <span className={router.pathname === '/' ? 'active' : ''}>Accueil</span>
            </Link>
          </li>
          <li>
            <Link href="/boutique" as="/boutique">
              <span className={router.pathname.startsWith('/boutique') && !router.query.productId ? 'active' : ''}>
                Boutique
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about" as="/about">
              <span className={router.pathname === '/about' ? 'active' : ''}>A propos</span>
            </Link>
          </li>
          <li>
            <Link href="/contact" as="/contact">
              <span className={router.pathname === '/contact' ? 'active' : ''}>Contact</span>
            </Link>
          </li>
        </ul>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        <Link href="#" id="close" onClick={closeMenu}>
          <FaTimes className={isMenuOpen ? '' : 'menu-hidden'} />
        </Link>
      </div>

      <div id="mobile" onClick={toggleMenu}>
        <FaOutdent style={{ color: 'white' }} />
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;


