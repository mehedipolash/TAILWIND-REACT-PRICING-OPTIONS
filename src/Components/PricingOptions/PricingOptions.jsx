import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';
import DaisyPricingcard from '../DaisyPricingCard/DaisyPricingcard';

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  // console.log(pricingData);

  return (
    <div>
      <h2 className="text-5xl">Get our membership</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* my custom card */}

        {/* {pricingData.map(pricing => (
          <PricingCart pricing={pricing} key={pricing.id}></PricingCart>
        ))} */}

        {/* daisyUi + custom card */}

        {pricingData.map(pricing => (
          <DaisyPricingcard
            pricing={pricing}
            key={pricing.index}
          ></DaisyPricingcard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
