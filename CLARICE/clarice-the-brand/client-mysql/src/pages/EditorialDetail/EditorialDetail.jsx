import React from 'react';
import { useParams } from 'react-router-dom';
import FifteenCollage from '../../components/FifteenCollage/FifteenCollage';
import editorialData from '../../data/editorialData';

const EditorialDetail = () => {
  const { season } = useParams();
  const editorial = editorialData[season];

  return (
    <div>
      <FifteenCollage photos={editorial.photos} />
    </div>
  );
};

export default EditorialDetail;