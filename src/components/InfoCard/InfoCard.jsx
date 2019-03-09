import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardTitle, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { withRouter } from 'react-router';

@withRouter
class InfoCard extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="info-card">
        <Card className="info-card__card">
          <CardTitle
            className="info-card__title"
            title={`${this.props.emoji} ${this.props.projectName}`}
          />
          <CardText className="info-card__text-title">Last Commit Message</CardText>
          <CardText className="info-card__text">{this.props.commitMessage}</CardText>
          <CardActions className="info-card__btns">
            <Button
              className="info-card__view-btn"
              label="View Live"
              icon='play_arrow'
              onClick={() => window.open(this.props.url)}
              disabled={!this.props.url}
              accent
              raised
            />
            <Button
              className="info-card__details-btn"
              label="Details"
              onClick={() => this.props.history.push('/instance')}
              primary
              raised
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

InfoCard.propTypes = {
  emoji: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  commitMessage: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default InfoCard;
