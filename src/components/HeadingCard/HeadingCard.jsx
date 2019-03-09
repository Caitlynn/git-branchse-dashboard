import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-toolbox/lib/avatar';
import AppBar from 'react-toolbox/lib/app_bar';
import codemoIcon from '../../codemo-icon.png';


class HeadingCard extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      subtitle,
      icon,
      className,
    } = this.props;
    return (
      <div className={`heading-card ${className}`}>
        <AppBar className="heading-card__header">
          <img className="heading-card__codemo-logo" src={codemoIcon} alt="Codemo" />
          <div className="heading-card__title">
            <h1 className="heading-card__title-text">
              {title}
            </h1>
            <small className="heading-card__subtitle">
              {subtitle}
            </small>
          </div>
          <Avatar
            className="heading-card__icon"
            title="A"
          />
        </AppBar>
      </div>
    );
  }
}

export default HeadingCard;
