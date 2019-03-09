import React from 'react';
import AddProjectCard from '../../components/AddProjectCard';
import homepage from '../../home-background.png';

class Homepage extends React.Component {

  render() {
    return (
      <div className="homepage">
        <div className="homepage__branding">
          <div className="homepage__title">Codemo</div>
          <div className="homepage__slogan">Code. Demo. Ship.</div>
        </div>
        <AddProjectCard className="homepage__card" />
        <div className="homepage__quote">If you had, one shot, or one opportunity, to fix every bug you ever wrote, in one moment, would you squash them, or just let it ship?</div>
        <img className="homepage__img" src={homepage} alt="homepage" />
      </div>
    );
  }
}

export default Homepage;
