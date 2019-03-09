import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardTitle, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';

class InstanceCard extends React.Component {
  render() {
    return (
      <div>
    <Card className='card'>
        <CardTitle className='title' title={this.props.instanceName}/>
        <div>
            <CardText><b>Health:</b> {this.props.healthStatus} {this.props.emoji} </CardText>
            <CardText><b>URL:</b> {this.props.url}</CardText>
            <CardText><b>Last Updated on:</b> {this.props.lastUpdated} </CardText>
            <CardText><b>Last commit message:</b> {this.props.lastCommitMessage} </CardText>
            <Button className='live' icon='play_arrow' label='View Live' raised accent />
        </div>
    </Card>
    </div>

    );
  }
}

InstanceCard.propTypes = {
  instanceName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  branchName: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  lastCommitMessage: PropTypes.string.isRequired,
  healthStatus: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default InstanceCard;
