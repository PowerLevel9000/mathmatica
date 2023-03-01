import React from 'react';

const WellcomeCalc = ({role}) => (
  <div role={role} className="calc">
    <h2 className="calcHeadding">Let&apos;s Do Some Maths!</h2>
    <p>
      Start with some basics calculations
    </p>
    <p>
      How about 2 + 2 ?
    </p>
  </div>
);

export default WellcomeCalc;
