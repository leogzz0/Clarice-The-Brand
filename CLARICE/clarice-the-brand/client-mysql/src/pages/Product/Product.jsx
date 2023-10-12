import React from 'react';
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//import BalanceIcon from "@mui/icons-material/Balance";
import './Product.scss'

const Product = () => {
    const[selectedImg, setSelectedImg] = useState(0);
    const[quantity, setQuantity] = useState(1);
    const images = [
        "https://img01.ztat.net/article/spp-media-p1/579fd32c33444d8b88a2ed7126b60cff/dbe779a0451949c1bdcc04cb3922192d.jpg?imwidth=762",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/16341767122abf123dfd8d662364f2eabaaf786b63_thumbnail_900x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176715803904b7b50ac1ecd0b9a1dc2ecd76be_thumbnail_900x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176717946e2e28d7982bed9198c6d52e83ed4f_thumbnail_900x.webp",
        "https://images.unsplash.com/photo-1609534927279-5d8c599f3ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    ];
    /*
    const images = [
        "https://img01.ztat.net/article/spp-media-p1/579fd32c33444d8b88a2ed7126b60cff/dbe779a0451949c1bdcc04cb3922192d.jpg?imwidth=762",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/16341767122abf123dfd8d662364f2eabaaf786b63_thumbnail_900x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176715803904b7b50ac1ecd0b9a1dc2ecd76be_thumbnail_900x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176717946e2e28d7982bed9198c6d52e83ed4f_thumbnail_900x.webp",
        "https://images.unsplash.com/photo-1609534927279-5d8c599f3ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    ];
    */

    return (
        <div className='product'>
            <div className='left'>
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
                    <img src={images[2]} alt="" onClick={e=>setSelectedImg(2)}/>
                    <img src={images[3]} alt="" onClick={e=>setSelectedImg(3)}/>
                    <img src={images[4]} alt="" onClick={e=>setSelectedImg(4)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className='right'>
                <h1>Martinolli Sandal </h1>
                <span className="price">$199</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. 
                </p>
                <div className="quantity">
                    <button onClick={()=>setQuantity((prev)=>(prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    {/* 
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                    */}
                </div>
                <div className="info">
                    <span>Collection: Aviato</span>
                    <span>Product Type: Shoes</span>
                    <span>Tag: Shoes, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                <hr />
                    <span>ADDITIONAL INFORMATION</span>
                <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}

export default Product