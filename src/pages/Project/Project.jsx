import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import { CSSTransitionGroup } from 'react-transition-group';
import Chip from 'react-toolbox/lib/chip';
import HeadingCard from '../../components/HeadingCard';
import FilterTrafficLight from '../../components/FilterTrafficLight';
import InfoCard from '../../components/InfoCard';
import ProjectBubbles from '../../components/ProjectBubbles';
import { observer } from 'mobx-react';
import AppInstance from '../../AppInstanceHack';
import emojiFromStatus from '../../emojiFromStatus';
import { Card, AppBar } from 'react-toolbox';

@observer
class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appInstances: demoAppInstances,
      selectedAppInstance: null,
      statusFilter: null,
    };
    window._testAddInstance = this._testAddInstance;
  }

  onFilterChange = (filterValue) => {
    this.setState({
      statusFilter: filterValue.selected,
    });
  }

  asyncSetState(newState) {
    return new Promise((resolve, reject) => {
      this.setState(newState, () => resolve());
    });
  }

  renderAppInstance(appInstance) {
    return (
      <div
        onClick={() => this.setState({ selectedAppInstance: appInstance })}
      >
        <ProjectBubbles
          label={appInstance.name}
          status={appInstance.status}
        />
      </div>
    )
  }

  renderInfoCard() {
    const selectedAppInstance = this.state.selectedAppInstance;
    if (selectedAppInstance === null) {
      return null;
    }
    return (
      <div
        key={this.state.appInstances.indexOf(selectedAppInstance)}
      >
        <InfoCard
          emoji={emojiFromStatus(selectedAppInstance.status)}
          projectName={selectedAppInstance.name}
          commitMessage={selectedAppInstance.lastCommitMessage}
          url={selectedAppInstance.url}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="project">
        <HeadingCard
          title="Typewriter"
          subtitle="https://github.com/Place1/react-animated-writer.git"
          icon="apps"
        />
        <div className="project__content">
        <div className='project__app-instances'>
        <Card className='project__card'>
          <AppBar className="project__section">Project Branches</AppBar>
            <FilterTrafficLight
            className="project__traffic-light"
            onChange={this.onFilterChange}
            />
            <FlipMove
              className="project__app-instances"
              duration={750}
              easing="ease-out"
            >
              {this.state.appInstances
                .filter((item) => {
                  if (this.state.statusFilter === null) {
                    return true;
                  }
                  return item.status === this.state.statusFilter;
                })
                .map((item, i) => {
                  const selectedAppInstance = this.state.selectedAppInstance;
                  let className = 'project__app-instance';
                  if (selectedAppInstance === item) {
                    className += ' project__app-instance--selected';
                  }
                  return (
                    <div
                      className={className}
                      key={i}
                    >
                      {this.renderAppInstance(item)}
                    </div>
                  );
                })
              }
            </FlipMove>
          </Card>
          </div>
          <Card className='project__card'>
            <AppBar className="project__section">Branch Info</AppBar>
            <CSSTransitionGroup
              className="project__info-card"
              transitionName="project__info-card-transition"
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}
            >
              {this.renderInfoCard()}
            </CSSTransitionGroup>
          </Card>
        </div>
      </div>
    );
  }
}

var demoAppInstances = [
  new AppInstance({
    name: 'master',
    lastCommitMessage: 'Implemented the landing page',
    url: 'http://master-typewriter.codemo.com'
  }),
  new AppInstance({
    name: 'features-super-upgrade',
    lastCommitMessage: 'This is a moonshot attempt at making the site useful!',
    shouldDie: true,
  }),
  new AppInstance({
    name: 'features-new-background',
    lastCommitMessage: 'I\'ve extensively redesigned the landing page!',
    url: 'http://features-new-background-typewriter.codemo.com'
  }),
];

export default Project;
