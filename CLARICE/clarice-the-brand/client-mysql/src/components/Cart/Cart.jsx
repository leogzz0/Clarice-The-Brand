import React from 'react'
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://media.dior.com/couture/ecommerce/media/catalog/product/4/K/1681232753_KCQ886VEV_S22B_E02_GH.jpg?imwidth=3840",
      img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/N/N/1682680124_F_23_3_LOOK_829_E15_GH.jpg?imwidth=1080",
      title: "Martinolli Shoe Black",
      desc: "Martinolli Shoe Black",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0261/6898/3607/products/1677671451_KCQ266VEA_S63H_E02_GH_494x494@2x.jpg?v=1678095940",
      img2: "https://cdn.shopify.com/s/files/1/0261/6898/3607/products/1677671451_KCQ266VEA_S63H_E06_ZH_1024x1024@2x.jpg?v=1678095931",
      title: "Martinolli Shoe Green",
      desc: "Martinolli Shoe Green",
      isNew: false,
      oldPrice: 24,
      price: 15,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">${item.price}</div>
            <p>{item.desc?.substring(0,100)}</p>
          </div>
          <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart