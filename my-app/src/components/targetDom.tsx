import React, { useRef } from 'react';
import ComponentLoader from './renderWhenActive'


const ComponentA = (props: any) => {
  const ref = useRef(null);
  // @ts-ignore 
  // const height = ref ? ref.current.offsetHeight: null;
  const height = 123;
  console.log('=======')
  return (
    <>
    <div id='targetTest1' ref={ref}>
      you can see {height}
    </div>
    </>
  )
}

const ExportComponent = () => {
  return <ComponentLoader domId={'targetTest1'} >
    <ComponentA />
  </ComponentLoader>
}

export default ExportComponent