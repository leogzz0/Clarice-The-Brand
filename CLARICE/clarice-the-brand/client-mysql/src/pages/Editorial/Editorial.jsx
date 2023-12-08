import React from 'react';
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