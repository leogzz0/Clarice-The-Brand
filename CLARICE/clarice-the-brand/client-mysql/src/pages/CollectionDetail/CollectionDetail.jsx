import React from 'react';
import { useParams } from 'react-router-dom';
// import FifteenCollage from '../../components/FifteenCollage/FifteenCollage';
import CollectionCollage from '../../components/CollectionCollage/CollectionCollage';
import collectionData from '../../data/collectionData';

const CollectionDetail = () => {
  const { season } = useParams();
  const collection = collectionData[season];
  return (
    <div>
      <CollectionCollage photos={collection.photos} type="trending"/>
    </div>
  );
};

export default CollectionDetail;