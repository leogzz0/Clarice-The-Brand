import React from 'react';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="./img/Editorial Clarice/68-SAM_0390.jpg"
            alt="image-collage-1"
            loading='lazy'
          />
        </div>
        <div className="row">
          <img
            src="./img/Editorial Clarice/163-SAM_0237.jpg"
            alt="image-collage-2"
            loading='lazy'
          />
        </div>
      </div>
      <div className="col">
        <div className="row">
          {' '}
          <img
            src="./img/Editorial Clarice/88-SAM_0359.jpg"
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
                src="./img/Editorial Clarice/20-SAM_0487.jpg"
                alt="image-collage-4"
                loading='lazy'
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              {' '}
              <img
                src="./img/Editorial Clarice/121-SAM_0302.jpg"
                alt="image-collage-5"
                loading='lazy'
              />
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="./img/Editorial Clarice/DSC_1415.JPG"
            alt="image-collage-6"
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
