import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import './Products.scss';

const Products = () => {
  const catId = parseInt(useParams().id);

  const [localMaxPrice, setLocalMaxPrice] = useState(5000);
  const [localSort, setLocalSort] = useState(null);
  const [localSelectedSubCats, setLocalSelectedSubCats] = useState([]);

  const [maxPrice, setMaxPrice] = useState(5000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const initialMacPrice = 5000;
  const initialSort = null;
  const initialSelectedSubCats = [];

  const { data, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`,
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setLocalSelectedSubCats(
      isChecked
        ? [...localSelectedSubCats, value]
        : localSelectedSubCats.filter((item) => item !== value)
    );
  };

  const handleFilterApply = () => {
    setMaxPrice(localMaxPrice);
    setSort(localSort);
    setSelectedSubCats(localSelectedSubCats);
    setIsFilterOpen(false);
  };

  const handleResetFilters = () => {
    setLocalMaxPrice(initialMacPrice);
    setLocalSort(initialSort);
    setLocalSelectedSubCats(initialSelectedSubCats);
    setMaxPrice(initialMacPrice);
    setSort(initialSort);
    setSelectedSubCats(initialSelectedSubCats);
  };

  return (
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
                <div className='price-range-wrapper'>
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    value={localMaxPrice}
                    onChange={(e) => setLocalMaxPrice(e.target.value)}
                  />
                  <span className='price-number'>{localMaxPrice}</span>
                </div>
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
                  onChange={() => setLocalSort('asc')}
                  checked={localSort === 'asc'}
                />
                <label htmlFor="asc">Price (Lowest first)</label>
              </div>
              <div className="inputItem">
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="sort"
                  onChange={() => setLocalSort('desc')}
                  checked={localSort === 'desc'}
                />
                <label htmlFor="desc">Price (Highest first)</label>
              </div>
            </div>
            <div className="filter-buttons">
              <button className="reset-button" onClick={handleResetFilters}>Reset Filters</button>
              <button className="apply-button" onClick={handleFilterApply}>
                <span className="button-text">Apply Filters</span>
                <span className="button-text-appear">Apply Filters</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="product-list">
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );

};

export default Products;