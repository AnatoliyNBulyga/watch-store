import React from 'react';
import ContentLoader from "react-content-loader";

const Preload = () => {
  return (
    <ContentLoader
      className="watch-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="283" rx="3" ry="3" width="280" height="18" />
      <circle cx="138" cy="110" r="90" />
      <rect x="1" y="317" rx="10" ry="10" width="280" height="83" />
      <rect x="1" y="414" rx="10" ry="10" width="110" height="43" />
      <rect x="130" y="412" rx="20" ry="20" width="151" height="44" />
    </ContentLoader>
  );
}

export default Preload;