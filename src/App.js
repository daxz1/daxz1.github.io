import React from 'react';

import portrait from './images/portrait.jpg';

function App() {
  return (
    <div className="flex__container">
      <div className="grid__container">
        <main className="content">
          <div className="portrait--container">
            <img src={portrait} alt="Dav Singh (daxz1)" className="portrait"/>
          </div>
          <p className="text__align--center">Dav Singh (daxz1)</p>
        </main>
      </div>
    </div>
  );
}

export default App;
