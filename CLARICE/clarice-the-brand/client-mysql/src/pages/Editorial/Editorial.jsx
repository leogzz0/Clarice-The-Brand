import React from 'react';
import FeaturedEditorial from '../../components/FeaturedEditorial/FeaturedEditorial';

const EditorialData = [
  {
    imageUrl: '/img/Editorial Clarice/57-SAM_0412.jpg',
    season: 'FW2023 Launch',
    launchTitle: 'Clarice The Brand',
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