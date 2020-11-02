import React from 'react';
import { SocialIcon } from 'react-social-icons';
import portrait from './images/portrait.jpg';

const SOCIAL_URLS = [
  'https://www.twitter.com/davsinghc',
  'https://www.linkedin.com/in/dxc/',
];

function App() {
  return (
    <>
    <section className="flex__container">
      <div className="grid__container">
        <main className="content">
          <div className="portrait--container">
            <img src={portrait} alt="Dav Singh (daxz1)" className="portrait"/>
          </div>
          <p className="text__align--center">daxz1</p>
          <p className="text__align--center">
            Frontend Engineer currently working at {' '}
            <a href="https://www.prodyna.com/en/" target="_blank" rel="noopener noreferrer" className="text__link--no-styles"><strong>@prodyna</strong></a> {' '}
            London office.
          </p>
          <div className="flex__container">
            <div className="social__container">
              { SOCIAL_URLS.map(url => {
                return (<SocialIcon
                  key={url}
                  url={url}
                  bgColor="rgb(255,255,255)"
                  style={{ height: 25, width: 25 }}
                />)
              })}
            </div>
          </div>
        </main>
      </div>
    </section>

    <section className='flex__container'>
      <div className='grid__container--full'>
        <div className='content section__projects'>
          <div className="powwownow">
            Powwownow
          </div>
          <div className='fn'>
            Financial News
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
