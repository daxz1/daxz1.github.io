import React, {useState} from 'react';
import Nav from "./components/Nav";
import Planets from "./components/Planets";
import People from "./components/People";

function App():JSX.Element {

    const [page, setPage] = useState('planets');

  return (
      <div>
          <h1>Star Wars Info</h1>
          <p>Viewing {page} page</p>
          <Nav setPage={setPage}/>
          <div className='content'>
              {page === 'planets' ? <Planets /> : <People />}
          </div>
      </div>
  );
}



export default App;
