import React, { useEffect } from 'react';
import { useNavbarVisibility } from '../../contexts/NavbarContext';
import { useParams } from 'react-router-dom';
import FifteenCollage from '../../components/FifteenCollage/FifteenCollage';
import editorialData from '../../data/editorialData';

const EditorialDetail = () => {
  const { season } = useParams();
  const editorial = editorialData[season];
  const { setIsVisible } = useNavbarVisibility();

  useEffect(() => {
    setIsVisible(false);
    return () => {
      setIsVisible(true);
    };
  }, [setIsVisible]);

  return (
    <div>
      <FifteenCollage photos={editorial.photos} />
    </div>
  );
};

export default EditorialDetail;