import React from 'react';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="./img/EditorialClariceWebp/68-SAM_0390.webp"
            alt="image-collage-1"
            loading='lazy'
          />
        </div>
        <div className="row">
          <img
            src="./img/EditorialClariceWebp/163-SAM_0237.webp"
            alt="image-collage-2"
            loading='lazy'
          />
        </div>
      </div>
      <div className="col">
        <div className="row">
          {' '}
          <img
            src="./img/EditorialClariceWebp/88-SAM_0359.webp"
            alt="image-collage-3"
            loading='lazy'
          />
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="./img/EditorialClariceWebp/20-SAM_0487.webp"
                alt="image-collage-4"
                loading='lazy'
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              {' '}
              <img
                src="./img/EditorialClariceWebp/121-SAM_0302.webp"
                alt="image-collage-5"
                loading='lazy'
              />
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="./img/EditorialClariceWebp/DSC_1415.webp"
            alt="image-collage-6"
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
