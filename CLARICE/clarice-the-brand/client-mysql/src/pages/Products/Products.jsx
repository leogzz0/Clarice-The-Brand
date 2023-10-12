import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Products.scss'
import List from "../../components/List/List"

const Products = () => {
    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null)
    console.log(maxPrice)

    return (
        <div className='products'>
            <div className='left'>
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id='1' value={1}/>
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='2' value={2} />
                        <label htmlFor="2">Boots</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id='3' value={3} />
                        <label htmlFor="3">Sandals</label>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='desc' value='desc' name='price' onChange={e=>setSort("desc")}/>
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img className='catImg' src="https://images.unsplash.com/photo-1629935226757-6e22f6ef9ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="" />
                <List carId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}

export default Products