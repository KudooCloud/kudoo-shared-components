
import * as React from 'react';
import cx from 'classnames';
import { getFirstLetters } from 'components/helpers';
import withStyles from 'components/hoc/withStyles';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import styles from './styles';
import { CardProps } from './types';

class DAOCard extends React.Component<CardProps, {}> {
  static defaultProps = {
    onClick: () => {},
    onSettingClick: () => {},
  };

  _renderCard() {
    const {
      classes,
      onClick,
      secondaryLabel,
      primaryLabel,
      imageUrl,
      onSettingClick,
      isJoinedDAO,
    } = this.props;
    return (
      <div className={cx(classes.root)} onClick={onClick}>
        <div className={cx(classes.upperPart)}>
          {!imageUrl && (
            <div className={cx(classes.letterImage)}>
              {getFirstLetters(primaryLabel || '')}
            </div>
          )}
          {imageUrl && (
            <div className={cx(classes.cardImage)}>
              <img src={imageUrl} alt="card image" />
            </div>
          )}
          <div className={cx(classes.primaryLabel)}>{primaryLabel}</div>
        </div>
        <div className={cx(classes.lowerPart)}>
          <div className={cx(classes.secondaryLabel)}>{secondaryLabel}</div>
          {!isJoinedDAO && (
            <div className={cx(classes.settingIcon)} onClick={onSettingClick}>
              <i className={'icon icon-settings'} />
            </div>
          )}
        </div>
      </div>
    );
  }

  render() {
    let { classes } = this.props;
    let componentClass = cx(classes.component);
    return (
      <ErrorBoundary>
        <div className={componentClass}>{this._renderCard()}</div>
      </ErrorBoundary>
    );
  }
}

export default withStyles<CardProps>(styles)(DAOCard);
