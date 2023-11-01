import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import './Navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const location = useLocation();

  const getLinkClassName = (route) => {
    const whiteRoutes = ['/editorial', '/brand', '/collections', '/editorial/Clarice%20The%20Brand'];
    const isActive = location.pathname === route;
    const isWhite = whiteRoutes.includes(location.pathname);
    return `link${isActive ? ' active' : ''}${isWhite ? ' white' : ''}`;
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className={getLinkClassName('/products/1')} to="/products/1">
              SHOP
            </Link>
          </div>
          <div className="item">
            <Link className={getLinkClassName('/collections')} to="/collections">
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
          {/*<img src='./img/clarice.png' alt='' />*/}
        </div>
        <div className="right">
          <div className="item">
            <Link className={getLinkClassName('/about')} to="/about">
              ABOUT
            </Link>
          </div>
          <div className="item">
            <Link className={getLinkClassName('/link')} to="/">
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
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
