import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import './Products.scss';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { data, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`,
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const handleFilterApply = () => {
    setIsFilterOpen(false);
  };

  return (
    <>
      <div className='navbar-spacer'></div>
      <div className="products">
        <div className="filter-dropdown">
          <button onClick={() => setIsFilterOpen(!isFilterOpen)}>Filter +</button>
          {isFilterOpen && (
            <div className="filter-content">
              {/* Filter Options */}
              {/* Product Categories */}
              <div className="filterItem">
                <h2>Product Categories</h2>
                {data?.map((item) => (
                  <div className="inputItem" key={item.id}>
                    <input
                      type="checkbox"
                      id={`cat-${item.id}`}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={`cat-${item.id}`}>{item.attributes.title}</label>
                  </div>
                ))}
              </div>

              {/* Filter by Price */}
              <div className="filterItem">
                <h2>Filter by price</h2>
                <div className="inputItem">
                  <span>0</span>
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <span>{maxPrice}</span>
                </div>
              </div>

              {/* Sort by */}
              <div className="filterItem">
                <h2>Sort by</h2>
                <div className="inputItem">
                  <input
                    type="radio"
                    id="asc"
                    value="asc"
                    name="sort"
                    onChange={() => setSort('asc')}
                  />
                  <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className="inputItem">
                  <input
                    type="radio"
                    id="desc"
                    value="desc"
                    name="sort"
                    onChange={() => setSort('desc')}
                  />
                  <label htmlFor="desc">Price (Highest first)</label>
                </div>
              </div>

              <button onClick={handleFilterApply}>Apply Filters</button>
            </div>
          )}
        </div>
        <div className="product-list">
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
    </>
  );

};

export default Products;