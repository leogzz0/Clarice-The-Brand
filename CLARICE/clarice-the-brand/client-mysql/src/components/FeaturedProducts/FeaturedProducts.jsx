import React from 'react';
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
    // const data = [
    //     {
    //         id: 1,
    //         img: "https://media.dior.com/couture/ecommerce/media/catalog/product/4/K/1681232753_KCQ886VEV_S22B_E02_GH.jpg?imwidth=3840",
    //         img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/N/N/1682680124_F_23_3_LOOK_829_E15_GH.jpg?imwidth=1080",
    //         title: "Long Sleeve",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://media.dior.com/couture/ecommerce/media/catalog/product/k/7/1681815627_KCV073VNI_S18U_E02_GH.jpg?imwidth=3840",
    //         img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/Y/k/1682680144_F_23_3_LOOK_826_E15_GH.jpg?imwidth=1080",
    //         title: "Long Sleeve",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 3,
    //         img: "https://media.dior.com/couture/ecommerce/media/catalog/product/8/z/1681232765_KCQ889VNI_S900_E02_GH.jpg?imwidth=3840",
    //         img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/6/w/1682714805_F_23_3_LOOK_746_E15_GH.jpg?imwidth=1080",
    //         title: "Long Sleeve",
    //         isNew: false,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 4,
    //         img: "https://media.dior.com/couture/ecommerce/media/catalog/product/p/Y/1681232714_KCQ889VNI_S18U_E02_GH.jpg?imwidth=3840",
    //         img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/7/y/1682680091_F_23_3_LOOK_824_E15_GH.jpg?imwidth=1080",
    //         title: "Long Sleeve",
    //         isNew: false,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    // ];

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    return(
        <div className='FeaturedProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    This are some Features Products that are fan favorite.
                </p>
            </div>
            <div className="bottom">
                {error 
                    ? "Something went wrong!"
                    : loading 
                    ? "loading" 
                    : data?.map((item) => <Card item={item} key={item.id}/>)}
            </div>
        </div>
    )
}

export default FeaturedProducts