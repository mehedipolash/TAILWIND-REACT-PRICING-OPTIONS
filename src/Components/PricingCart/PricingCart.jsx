import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCart = ({ pricing }) => {
  const { name, price, description, features } = pricing;
  return (
    <div className="flex-col border bg-purple-800 rounded-2xl m-2 p-4">
      {/* card header */}

      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">{price}</h4>
      </div>

      {/* card body */}
      <div className="bg-amber-400 text-black p-4 mt-10 rounded-2xl flex-1">
        <p>{description}</p>
        {features.map(feature => (
          <PricingFeature
            feature={feature}
            key={feature.index}
          ></PricingFeature>
        ))}
      </div>
      <button class="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCart;
