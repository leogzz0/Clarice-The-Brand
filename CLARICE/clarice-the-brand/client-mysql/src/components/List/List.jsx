import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/4/K/1681232753_KCQ886VEV_S22B_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/N/N/1682680124_F_23_3_LOOK_829_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/0261/6898/3607/products/1677671451_KCQ266VEA_S63H_E02_GH_494x494@2x.jpg?v=1678095940",
            img2: "https://cdn.shopify.com/s/files/1/0261/6898/3607/products/1677671451_KCQ266VEA_S63H_E06_ZH_1024x1024@2x.jpg?v=1678095931",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 24,
            price: 15,
        },
        {
            id: 3,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/R/z/1681746327_KDV073VNI_S900_E02_GH.jpg",
            img2: "https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/grid_image_5/460x497/17f82f742ffe127f42dca9de82fb58b1/R/z/1681746328_KDV073VNI_S900_E05_GH.jpg?imwidth=870",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/p/Y/1681232714_KCQ889VNI_S18U_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/7/y/1682680091_F_23_3_LOOK_824_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 20,
            price: 12,
        },
        {
            id: 5,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/8/z/1681232765_KCQ889VNI_S900_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/6/w/1682714805_F_23_3_LOOK_746_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 6,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/r/h/1681988351_KCQ886VEV_S52H_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/w/8/1681829127_KCQ886VEV_S52H_E06_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 24,
            price: 15,
        },
        {
            id: 7,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/M/v/1681825527_KCB828VCA_S64P_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/e/A/1682680075_F_23_3_LOOK_836_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 24,
            price: 15,
        },
        {
            id: 8,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/k/7/1681815627_KCV073VNI_S18U_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/Y/k/1682680144_F_23_3_LOOK_826_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 9,
            img: "https://cdn.shopify.com/s/files/1/0261/6898/3607/products/1677671451_KCQ266VEA_S63H_E02_GH_494x494@2x.jpg?v=1678095940",
            img2: "https://cdn.shopify.com/s/files/1/0261/6898/3607/products/1677671451_KCQ266VEA_S63H_E06_ZH_1024x1024@2x.jpg?v=1678095931",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 24,
            price: 15,
        },
        {
            id: 10,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/R/z/1681746327_KDV073VNI_S900_E02_GH.jpg",
            img2: "https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/grid_image_5/460x497/17f82f742ffe127f42dca9de82fb58b1/R/z/1681746328_KDV073VNI_S900_E05_GH.jpg?imwidth=870",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 11,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/p/Y/1681232714_KCQ889VNI_S18U_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/7/y/1682680091_F_23_3_LOOK_824_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 20,
            price: 12,
        },
        {
            id: 12,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/8/z/1681232765_KCQ889VNI_S900_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/6/w/1682714805_F_23_3_LOOK_746_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 13,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/4/K/1681232753_KCQ886VEV_S22B_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/N/N/1682680124_F_23_3_LOOK_829_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 6,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/r/h/1681988351_KCQ886VEV_S52H_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/w/8/1681829127_KCQ886VEV_S52H_E06_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 24,
            price: 15,
        },
        {
            id: 14,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/M/v/1681825527_KCB828VCA_S64P_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/e/A/1682680075_F_23_3_LOOK_836_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: false,
            oldPrice: 24,
            price: 15,
        },
        {
            id: 15,
            img: "https://media.dior.com/couture/ecommerce/media/catalog/product/k/7/1681815627_KCV073VNI_S18U_E02_GH.jpg?imwidth=3840",
            img2: "https://media.dior.com/couture/ecommerce/media/catalog/product/Y/k/1682680144_F_23_3_LOOK_826_E15_GH.jpg?imwidth=1080",
            title: "Long Sleeve",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]

    return (
        <div className='list'>{data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}</div>
    )
}

export default List