import React from 'react';
import { useParams } from 'react-router-dom';
import FifteenCollage from '../../components/FifteenCollage/FifteenCollage';
import collectionData from '../../data/collectionData';

const CollectionDetail = () => {
  const { season } = useParams();
  const collection = collectionData[season];
  return (
    <div>
      <FifteenCollage photos={collection.photos} />
    </div>
  );
};

export default CollectionDetail;