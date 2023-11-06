import React from 'react';
import './Categories.scss';
// import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="./img/Editorial Clarice/68-SAM_0390.jpg"
            alt="image-collage-1"
          />
          {/* <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button> */}
        </div>
        <div className="row">
          <img
            src="./img/Editorial Clarice/163-SAM_0237.jpg"
            alt="image-collage-2"
          />
          {/* <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button> */}
        </div>
      </div>
      <div className="col">
        <div className="row">
          {' '}
          <img
            src="./img/Editorial Clarice/88-SAM_0359.jpg"
            alt="image-collage-3"
          />
          {/* <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button> */}
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="./img/Editorial Clarice/20-SAM_0487.jpg"
                alt="image-collage-4"
              />
              {/* <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button> */}
            </div>
          </div>
          <div className="col">
            <div className="row">
              {' '}
              <img
                src="./img/Editorial Clarice/121-SAM_0302.jpg"
                alt="image-collage-5"
              />
              {/* <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button> */}
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="./img/Editorial Clarice/DSC_1415.JPG"
            alt="image-collage-6"
          />
          {/* <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
