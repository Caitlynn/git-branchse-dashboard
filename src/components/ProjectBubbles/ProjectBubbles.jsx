import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import PropTypes from 'prop-types';
import emojiFromStatus from '../../emojiFromStatus';

class ProjectBubbles extends React.Component {
  // USAGE: <ProjectBubbles status="Building/Running/Exited" label="Branch Name" />
  static propTypes = {
    status: PropTypes.oneOf(['building', 'running', 'exited']).isRequired,
    label: PropTypes.string.isRequired,
  }

  render() {
    const status = this.props.status;
    const emoji = emojiFromStatus(status);

    return (
      <div className="project-bubbles">
        <Button
          className={`project-bubbles__button project-bubbles__button--${status}`}
          raised
          primary
        >
          <text>
            <span className="project-bubbles__label">{this.props.label}</span>
            <span className="project-bubbles__emoji">{emoji}</span>
          </text>
        </Button>
      </div>
    );
  }
}

export default ProjectBubbles;
