import React, { useEffect } from 'react';
import { useNavbarVisibility } from '../../contexts/NavbarContext';
import { useParams } from 'react-router-dom';
import CollectionCollage from '../../components/CollectionCollage/CollectionCollage';
import collectionData from '../../data/collectionData';

const CollectionDetail = () => {
  const { season } = useParams();
  const collection = collectionData[season];
  const { setIsVisible } = useNavbarVisibility();

  useEffect(() => {
    setIsVisible(false);
    return () => {
      setIsVisible(true);
    };
  }, [setIsVisible]);

  return (
    <div>
      <CollectionCollage
        title={collection.title}
        photos={collection.photos}
        intro={collection.intro}
        description={collection.description}
        collection={collection.collection}
      />
    </div>
  );
};

export default CollectionDetail;
