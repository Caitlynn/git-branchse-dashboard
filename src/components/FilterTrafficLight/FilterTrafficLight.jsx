import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardActions } from 'react-toolbox/lib/card';
import {
  IconButton,
  Button,
} from 'react-toolbox';

class FilterTrafficLight extends React.Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  onChange(status) {
    const newState = { selected: status };
    this.setState(newState);
    this.props.onChange(newState);
  }

  onChangeFactory(status) {
    return this.onChange.bind(this, status);
  }

  render() {
    return (
      <div className="traffic-light">
        <Card className="traffic-light__card">
          <CardActions className="traffic-light__actions">
            <CardText className="traffic-light__text">Filter:</CardText>
            <Button
              className="traffic-light__building-btn"
              icon="🛠"
              floating
              mini
              onClick={this.onChangeFactory('building')}
            />
            <Button
              className="traffic-light__running-btn"
              icon="😇"
              floating
              mini
              onClick={this.onChangeFactory('running')}
            />
            <Button
              className="traffic-light__exited-btn"
              icon="😱"
              floating
              mini
              onClick={this.onChangeFactory('exited')}
            />
            <Button
              label="clear"
              onClick={this.onChangeFactory(null)}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}


export default FilterTrafficLight;
