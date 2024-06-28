import React, { useEffect } from 'react';
import { useNavbarVisibility } from '../../contexts/NavbarContext';
import FeaturedCollection from '../../components/FeaturedCollection/FeaturedCollection';

const CollectionData = [
  {
    imageUrl: '/img/ClariceGlitz&GlamourCollectionWEBP/closeup cheetah y vino.webp',
    season: 'The Glitz & Glamour Collection',
    collection: 'The Glitz & Glamour Collection',
    link: '/',
  },
  {
    imageUrl: '/img/Editorial Clarice/DSC_1415.JPG',
    season: 'Clarice The Brand',
    collection: 'La Beauté Collection',
    link: '/',
  },
];

const Collection = () => {
  const { setIsVisible } = useNavbarVisibility();

  useEffect(() => {
    setIsVisible(false);
    return () => {
      setIsVisible(true);
    };
  }, [setIsVisible]);

  return (
    <div>
      {CollectionData.map((collection, index) => (
        <FeaturedCollection
          key={index}
          imageUrl={collection.imageUrl}
          season={collection.season}
          collection={collection.collection}
          link={collection.link}
        />
      ))}
    </div>
  );
};

export default Collection;