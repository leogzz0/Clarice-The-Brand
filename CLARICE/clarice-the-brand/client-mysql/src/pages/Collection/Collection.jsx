import React from 'react';
import FeaturedCollection from '../../components/FeaturedCollection/FeaturedCollection';

const CollectionData = [
  {
    imageUrl: '/img/Editorial Clarice/DSC_1415.JPG',
    collection: 'La Beauté Collection',
    link: '/',
  },
];

const Collection = () => {
  return (
    <div>
      {CollectionData.map((collection, index) => (
        <FeaturedCollection
          key={index}
          imageUrl={collection.imageUrl}
          collection={collection.collection}
          link={collection.link}
        />
      ))}
    </div>
  );
};

export default Collection;