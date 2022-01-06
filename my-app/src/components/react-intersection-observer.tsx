import React, { useRef } from 'react';

import { useInView } from "react-intersection-observer";


const Component = (props:any) => {
  const [ref, inView] = useInView({
    triggerOnce: false
  });
  console.log(inView,'----')
  return (
    <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}{props.count}</h2>
    </div>
  );
};

export default Component;