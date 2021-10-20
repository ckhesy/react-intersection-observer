import React, { useRef } from 'react';

import { useInView } from "react-intersection-observer";


const Component = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });
  console.log(inView,'----')
  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};

export default Component;