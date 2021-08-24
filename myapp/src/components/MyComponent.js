import React, { Suspense } from 'react';

//const Hi = React.lazy(() => import('./Hi'));
//const Welcome = React.lazy(() => import('./Welcome'));
//const Hello = React.lazy(() => import('./Hello'));


/* wait 2000 ms to render component */

const CustomComponent1 = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('./Hi')), 8000)
    )
);

/* wait 5000 ms to render component */

const CustomComponent2 = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('./Welcome')), 2000)
    )
);

/* wait 8000 ms to render component */
const CustomComponent3 = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import('./Hello')), 1000)
    )
);



export default function MyComponent() {
  return (
    <div className="container">
      <Suspense fallback={<div  style={{color:'blue'}}>  <h2>Loading the components...</h2></div>}>
        <CustomComponent1 label="Component 1" />
        
      </Suspense>
    
      <Suspense fallback={<div  style={{color:'red'}}>  <h2>Loading the components...</h2></div>}>
        <CustomComponent2 label="Component 2" />
        
      </Suspense>
    
      <Suspense fallback={<div  style={{color:'purple'}}>  <h2>Loading the components...</h2></div>}>
        <CustomComponent3 label="Component 3" />
        
      </Suspense>
    
    </div>
  );
}