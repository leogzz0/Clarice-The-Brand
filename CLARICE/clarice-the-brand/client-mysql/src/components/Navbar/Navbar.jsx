import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavbarVisibility } from '../../contexts/NavbarContext';
import Cart from '../Cart/Cart';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isVisible } = useNavbarVisibility();
  const products = useSelector((state) => state.cart.products);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const getLinkClassName = (route) => {
    const whiteRoutes = ['/editorial', '/brand', '/collection', '/editorial/Clarice%20The%20Brand', '/collection/Clarice%20The%20Brand'];
    const isActive = location.pathname === route;
    const isWhite = whiteRoutes.includes(location.pathname);
    return `link${isActive ? ' active' : ''}${isWhite ? ' white' : ''}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeCart = () => {
    setCartOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`navbar ${!isVisible ? 'hidden' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrapper">
        {isMobile ? (
          <>
            <div className='burger-menu'>
              <button aria-label='burger-icon' onClick={() => setMobileMenuOpen(true)}>
                <MenuOutlinedIcon className='burger-icon'/>
              </button>
            </div>
            <div className="center-mobile">
              <Link className={getLinkClassName('/')} to="/">
                CLARICE THE BRAND
              </Link>
            </div>
            <div className="right-mobile">
              <SearchIcon className="icon" />
              <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
                <ShoppingBagOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </div>
            <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
              <div className="menu-header">
                <Link to="/" className="menu-title" onClick={() => setMobileMenuOpen(false)}>
                  Clarice The Brand
                </Link>
                <div className="close-btn" onClick={() => setMobileMenuOpen(false)}>
                  <CloseIcon />
                </div>
              </div>
              <div className="separator"></div>
              <div className="menu-content">
                <Link onClick={closeMobileMenu} className={getLinkClassName('/products/1')} to='/products/1'>
                  SHOP
                </Link>
                <Link Click={closeMobileMenu} className={getLinkClassName('/collection')} to='/collection'>
                  COLLECTIONS
                </Link>
                <Link Click={closeMobileMenu} className={getLinkClassName('/editorial')} to='/editorial'>
                  EDITORIAL
                </Link>
                <Link Click={closeMobileMenu} className={getLinkClassName('/brand')} to='/brand'>
                  BRAND
                </Link>
                <Link Click={closeMobileMenu} className={getLinkClassName('/about')} to='/about'>
                  ABOUT
                </Link>
                <Link Click={closeMobileMenu} className={getLinkClassName('/contact')} to='/contact'>
                  CONTACT
                </Link>
                <Link Click={closeMobileMenu} className={getLinkClassName('/stores')} to='/stores'>
                  STORES
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="left">
              <div className="item">
                <Link className={getLinkClassName('/products/1')} to="/products/1">
                  SHOP
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/collection')} to="/collection">
                  COLLECTIONS
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/editorial')} to="/editorial">
                  EDITORIALS
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/brand')} to="/brand">
                  BRAND
                </Link>
              </div>
            </div>
            <div className="center">
              <Link className={getLinkClassName('/')} to="/">
                CLARICE THE BRAND
              </Link>
            </div>
            <div className="right">
              <div className="item">
                <Link className={getLinkClassName('/about')} to="/about">
                  ABOUT
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/contact')} to="/contact">
                  CONTACT
                </Link>
              </div>
              <div className="item">
                <Link className={getLinkClassName('/stores')} to="/">
                  STORES
                </Link>
              </div>
              <div className="icons">
                <SearchIcon className={getLinkClassName('/searchIcon')}/>
                <PersonOutlineOutlinedIcon className={getLinkClassName('/profileIcon')}/>
                <FavoriteBorderOutlinedIcon className={getLinkClassName('/wishlistIcon')}/>
                <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
                  <ShoppingBagOutlinedIcon className={getLinkClassName('/cartIcon', true)}/>
                  <span>{products.length}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Cart isCartOpen={cartOpen} isMobile={isMobile} onClose={closeCart} />
    </div>
  );
};

export default Navbar;
