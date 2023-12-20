import React, { useEffect } from 'react';
import { useNavbarVisibility } from '../../contexts/NavbarContext';
import FeaturedEditorial from '../../components/FeaturedEditorial/FeaturedEditorial';

const EditorialData = [
  {
    imageUrl: '/img/Editorial Clarice/DSC_1426.JPG',
    season: 'Clarice The Brand',
    launchTitle: 'La Beauté Collection',
    link: '/',
  },
];

const Editorial = () => {
  const { setIsVisible } = useNavbarVisibility();

  useEffect(() => {
    setIsVisible(false);
    return () => {
      setIsVisible(true);
    };
  }, [setIsVisible]);

  return (
    <div>
      {EditorialData.map((editorial, index) => (
        <FeaturedEditorial
          key={index}
          imageUrl={editorial.imageUrl}
          season={editorial.season}
          launchTitle={editorial.launchTitle}
          link={editorial.link}
        />
      ))}
    </div>
  );
};

export default Editorial;