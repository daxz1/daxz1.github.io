import React from 'react';
import TSComponent from './Components/TSComponent';
import JSComponent from './Components/JSComponent';

const App:React.FC = () => {
  return (
    <>
      <TSComponent name="Foo"/>
      <JSComponent name="bar" />
    </>
  );
}

export default App;
