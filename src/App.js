import React from 'react';

import portrait from './images/portrait.jpg';

function App() {
  return (
    <div className="flex__container">
      <div className="grid__container">
        <main className="content">
          <div className="circular--landscape">
            <img src={portrait} alt="Dav Singh (daxz1)" className="portrait"/>
          </div>
          <div>
            <p>Dav Singh (daxz1)</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
