import React from 'react';
import DeptLogo from '../../Generic/logo/DeptLogo';
import Navbar from '../NavBar/index';



class HomepageBanner extends React.Component {
  render() {
    return (
      <div className="homepage-banner-container">
        <div className="top-bar-wrapper">
          <div className="top-bar-wrapper-content">
            <DeptLogo />
            <Navbar />
          </div>
        </div>

        <div className="work-text-wrapper">
          <h1 className="work-title-text" >WORK</h1>
        </div>

        <div className="button-wrapper">
          <button>View Case</button>
        </div>
      </div>
    );
  }
}

export default HomepageBanner;
