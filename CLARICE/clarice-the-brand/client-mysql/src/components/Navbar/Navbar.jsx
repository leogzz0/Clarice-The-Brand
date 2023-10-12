import React from 'react';
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOoutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
import { useState } from 'react';
import Cart from '../Cart/Cart'
import "./Navbar.scss"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='item'>
                        <Link className='link' to='/'>Shop</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/products/'>Collections</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Editorials</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Brand</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className='link' to='/'>CLARICE</Link>
                    {/*<img src='./img/clarice.png' alt='' />*/}
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className='link' to='/'>Stores</Link>
                    </div>
                    <div className='icons'>
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className='cartIcon' onClick={()=>setOpen(!open)}>
                            <ShoppingCartOoutlinedIcon/>
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar