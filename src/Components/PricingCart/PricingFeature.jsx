import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({ feature }) => {
  return (
    <div className="flex">
      <CircleCheckBig className="mr-2 mt-4 text-blue-700"></CircleCheckBig>
      {feature}
    </div>
  );
};

export default PricingFeature;
