import React from 'react'
import "./Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1620298106068-62c6a8bd05cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                <button>
                    <Link className="link" to="/products/1">
                        Sale
                    </Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1530904655194-92d55d4a006b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt=""/>
                <button>
                <Link to="/products/1" className="link">
                    Women
                    </Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                {" "}
                <img src="https://images.unsplash.com/photo-1617074172287-f364b77c1e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt=""/>
            <button>
                <Link to="/products/1" className="link">
                    New Season
                </Link>
            </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/5745782/pexels-photo-5745782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                        <button>
                            <Link to="/products/1" className="link">
                                Men
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                            {" "}
                            <img src="https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1456&q=80" alt=""/>
                            <button>
                            <Link to="/products/1" className="link">
                                Accessories
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3209&q=80" alt=""/>
                    <button>
                        <Link to="/products/1" className="link">
                            Shoes
                        </Link>
                    </button>
            </div>
        </div>
    </div>
    );
};

export default Categories;