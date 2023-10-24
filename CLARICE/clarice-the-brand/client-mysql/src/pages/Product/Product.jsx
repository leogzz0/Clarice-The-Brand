import React from 'react';
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
//import BalanceIcon from "@mui/icons-material/Balance";
import './Product.scss'
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id
    const[selectedImg, setSelectedImg] = useState("img");
    const[quantity, setQuantity] = useState(1);
    // const images = [
    //     "https://img01.ztat.net/article/spp-media-p1/579fd32c33444d8b88a2ed7126b60cff/dbe779a0451949c1bdcc04cb3922192d.jpg?imwidth=762",
    //     "https://img.ltwebstatic.com/images3_pi/2021/10/14/16341767122abf123dfd8d662364f2eabaaf786b63_thumbnail_900x.webp",
    //     "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176715803904b7b50ac1ecd0b9a1dc2ecd76be_thumbnail_900x.webp",
    //     "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176717946e2e28d7982bed9198c6d52e83ed4f_thumbnail_900x.webp",
    //     "https://images.unsplash.com/photo-1609534927279-5d8c599f3ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    // ];
    /*
    const images = [
        "https://img01.ztat.net/article/spp-media-p1/579fd32c33444d8b88a2ed7126b60cff/dbe779a0451949c1bdcc04cb3922192d.jpg?imwidth=762",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/16341767122abf123dfd8d662364f2eabaaf786b63_thumbnail_900x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176715803904b7b50ac1ecd0b9a1dc2ecd76be_thumbnail_900x.webp",
        "https://img.ltwebstatic.com/images3_pi/2021/10/14/1634176717946e2e28d7982bed9198c6d52e83ed4f_thumbnail_900x.webp",
        "https://images.unsplash.com/photo-1609534927279-5d8c599f3ea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    ];
    */
    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(
        `/products/${id}?populate=*`
    );
    return (
        <div className='product'>
            {loading 
            ? ("loading") 
            : (
                <>
                <div className='left'>
                    <div className="images">
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg("img")}/>
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg("img2")}/>
                        {/* <img src={data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg(2)}/>
                        <img src={data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg(3)}/>
                        <img src={data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=>setSelectedImg(4)}/> */}
                    </div>
                    <div className="mainImg">
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
                    </div>
                </div>
                <div className='right'>
                    <h1>{data?.attributes?.title}</h1>
                    <span className="price">${data?.attributes?.price}</span>
                    <p>
                        {data?.attributes?.description}
                    </p>
                    <div className="quantity">
                        <button onClick={()=>setQuantity((prev)=>(prev === 1 ? 1 : prev - 1))}>-</button>
                        {quantity}
                        <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
                    </div>
                    <button className="add" onClick={() => dispatch(addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        description: data.attributes.description,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        quantity
                    }))}>
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
                </>)
            }
        </div>
    )
}

export default Product