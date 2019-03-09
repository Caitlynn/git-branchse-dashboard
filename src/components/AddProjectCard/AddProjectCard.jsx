import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import { withRouter } from 'react-router-dom';
import Input from 'react-toolbox/lib/input';

@withRouter
class AddProjectCard extends React.Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      addurl: '',
    };
  }

  onAddProject = () => {
    this.props.history.push('/project');
  }

  render() {
    return (
      <div className="add-card">
        <Card className="add-card__card">
          <CardTitle
            className="add-card__title"
            title="Add New Project"
            subtitle="Simply paste a git repo below"
          />
          <Input
            className="add-card__input"
            label="Git URL"
            primary
          />
          <CardActions className="add-card__btns">
            <Button
              className="add-card__add-btn"
              onClick={this.onAddProject}
              label="add"
              primary
              raised
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default AddProjectCard;
