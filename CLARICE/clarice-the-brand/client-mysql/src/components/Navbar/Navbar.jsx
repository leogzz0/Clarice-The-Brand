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
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/searchSlice';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isVisible, showNavbar, hideNavbar } = useNavbarVisibility();
  const [wasNavbarVisible, setWasNavbarVisible] = useState(isVisible);
  const products = useSelector((state) => state.cart.products);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 1200 });
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const whiteRoutes = ['/editorial', '/brand', '/collection', '/editorial/Clarice%20The%20Brand', '/collection/Clarice%20The%20Brand'];
  const getLinkClassName = (route) => {
    const isActive = location.pathname === route;
    const isWhite = whiteRoutes.includes(location.pathname);
    return `link${isActive ? ' active' : ''}${isWhite ? ' white' : ''}`;
  };
  const isActiveRoute = whiteRoutes.includes(location.pathname);

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

  const toggleSearchBar = () => {
    if (!isSearchBarVisible) {
      setWasNavbarVisible(isVisible);
      showNavbar();
    } else {
      if (!wasNavbarVisible) {
        hideNavbar();
      }
    }
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const closeSearchBar = () => {
    setIsSearchBarVisible(false);
    if (!wasNavbarVisible) {
      hideNavbar();
    }
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div className={`navbar ${!isVisible ? 'hidden' : ''} ${scrolled ? 'scrolled' : ''}`}>
      {isSearchBarVisible && (
        <form onSubmit={handleSearchSubmit} className={`search-container ${isActiveRoute ? 'active-route' : ''}`}>
          <div className="search-inner">
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input-full"
            />
            <button type="submit" className="search-icon" data-testid='searchIcon'>
              <SearchIcon />
            </button>
          </div>
          <div className="close-search" onClick={closeSearchBar}>
            <CloseIcon />
          </div>
        </form>
      )}
      <div className="wrapper">
        {isMobile ? (
          <>
            <div className='burger-menu'>
              <button aria-label='burger-icon' onClick={() => setMobileMenuOpen(true)} data-testid='burgerIcon'>
                <MenuOutlinedIcon className={getLinkClassName('/burgerIcon')} data-testid='burgerIcon' />
              </button>
            </div>
            <div className="center-mobile">
              <Link className={getLinkClassName('/')} to="/">
                CLARICE THE BRAND
              </Link>
            </div>
            <div className="right-mobile">
              <SearchIcon className={getLinkClassName('/searchIcon')} onClick={toggleSearchBar} data-testid='searchIcon' />
              <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
                <ShoppingBagOutlinedIcon className={getLinkClassName('/cartIcon', true)} />
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
                <Link onClick={closeMobileMenu} className={getLinkClassName('/collection')} to='/collection'>
                  COLLECTIONS
                </Link>
                <Link onClick={closeMobileMenu} className={getLinkClassName('/editorial')} to='/editorial'>
                  EDITORIAL
                </Link>
                <Link onClick={closeMobileMenu} className={getLinkClassName('/brand')} to='/brand'>
                  BRAND
                </Link>
                <Link onClick={closeMobileMenu} className={getLinkClassName('/about')} to='/about'>
                  ABOUT
                </Link>
                <Link onClick={closeMobileMenu} className={getLinkClassName('/contact')} to='/contact'>
                  CONTACT
                </Link>
                <Link onClick={closeMobileMenu} className={getLinkClassName('/coming-soon')} to='/coming-soon'>
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
                <Link className={getLinkClassName('/coming-soon')} to="/coming-soon">
                  STORES
                </Link>
              </div>
              <div className="icons">
                <div className="search-icon" onClick={toggleSearchBar}>
                  <SearchIcon className={getLinkClassName('/searchIcon')} data-testid='searchIcon' />
                </div>
                <Link className={getLinkClassName('/profileIcon')} to='/coming-soon'>
                  <PersonOutlineOutlinedIcon className={getLinkClassName('/profileIcon')} />
                </Link>
                <Link className={getLinkClassName('/wishlistIcon')} to='/coming-soon'>
                  <FavoriteBorderOutlinedIcon className={getLinkClassName('/wishlistIcon')} />
                </Link>
                <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
                  <ShoppingBagOutlinedIcon className={getLinkClassName('/cartIcon', true)} />
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
