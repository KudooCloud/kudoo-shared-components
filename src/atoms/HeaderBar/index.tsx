import * as React from 'react';
import { HeaderBarProps, ProductType } from './types';
import { Link, matchPath, withRouter } from 'react-router-dom';
import { Portal } from 'react-portal';
import cx from 'classnames';
import idx from 'idx';
import withStyles from 'components/hoc/withStyles';
import Collapse from '@material-ui/core/Collapse';
import ErrorBoundary from 'components/hoc/ErrorBoundary';
import TriangleArrow from 'components/bosons/TriangleArrow';
import styles from './styles';

const HeaderBar: React.FC<HeaderBarProps> = props => {
  let {
    classes,
    headerLabel,
    profile,
    noOfDAOs,
    onSelectProduct,
    products,
    initialSelectedProductIndex,
    accountSettingsUrl,
    loginUrl,
    configurationUrl,
  } = props;
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = React.useState(false);
  const [selectedProductIndex, selectProduct] = React.useState(
    initialSelectedProductIndex || 0,
  );
  let componentClass = cx(classes.component);

  const _isActive = (url: string) => {
    const match = matchPath(idx(props, _ => _.location.pathname), {
      path: url,
    });
    return Boolean(match);
  };

  const renderUserMenu = () => {
    return (
      <Collapse
        in={isUserMenuOpen}
        timeout="auto"
        unmountOnExit
        className={classes.userMenu}
      >
        <div>
          <Link
            className={classes.userMenuItem}
            onClick={() => {
              setIsUserMenuOpen(false);
            }}
            to={accountSettingsUrl}
          >
            <div className={classes.userMenuItemLabel}>Account Settings</div>
            <div className={classes.userMenuItemIcon}>
              <i className={cx('icon icon-user-account')} />
            </div>
          </Link>
          <div
            className={classes.userMenuItem}
            id="header-bar-logout"
            onClick={() => {
              if (props.actions) {
                props.actions.logoutUser();
              }
              props.logout();
              props.history.replace(loginUrl);
            }}
          >
            <div className={classes.userMenuItemLabel}>Logout</div>
            <div className={classes.userMenuItemIcon}>
              <i className={cx('icon icon-logout')} />
            </div>
          </div>
        </div>
      </Collapse>
    );
  };

  const renderProductMenu = () => {
    return (
      <Collapse
        in={isProductMenuOpen}
        timeout="auto"
        unmountOnExit
        className={classes.userMenu}
      >
        <div>
          {products.map((product, index) => (
            <div
              className={classes.userMenuItem}
              key={product.key}
              onClick={() => {
                selectProduct(index);
                setIsProductMenuOpen(false);
                onSelectProduct(index, product);
              }}
            >
              <div className={classes.userMenuItemLabel}>{product.key}</div>
              {selectedProductIndex === index && (
                <div className={classes.userMenuItemIcon}>
                  <i className={cx('icon icon-tick')} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Collapse>
    );
  };

  return (
    <ErrorBoundary>
      <div className={componentClass}>
        <div className={classes.headerLeft}>
          <div className={cx(classes.headerLabel)}>{headerLabel}</div>
        </div>
        <div className={classes.headerRight}>
          {/* Product menu dropdown */}
          <div
            className={cx(classes.smallBtn, classes.userBtn, {
              active: isProductMenuOpen,
            })}
            id="header-bar-username"
            onClick={() => {
              setIsProductMenuOpen(!isProductMenuOpen);
            }}
          >
            <div className={classes.userName}>
              {products[selectedProductIndex].key}
            </div>
            <TriangleArrow direction={isProductMenuOpen && 'down'} />
            {renderProductMenu()}
          </div>
          {/* settings gear icon */}
          {noOfDAOs > 0 && (
            <Link
              className={cx(classes.smallBtn, {
                active: _isActive(configurationUrl),
              })}
              to={configurationUrl}
            >
              <i className={cx('icon icon-settings', classes.smallBtnIcon)} />
            </Link>
          )}
          {/* set user menu open */}
          <div
            className={cx(classes.smallBtn, classes.userBtn, {
              active: isUserMenuOpen,
            })}
            id="header-bar-username"
            onClick={() => {
              setIsUserMenuOpen(!isUserMenuOpen);
            }}
          >
            <div className={classes.userName}>
              {profile.firstName} {profile.lastName}
            </div>
            <TriangleArrow direction={isUserMenuOpen && 'down'} />
            {renderUserMenu()}
          </div>
        </div>
        {(isUserMenuOpen || isProductMenuOpen) && (
          <Portal>
            <div
              onClick={() => {
                setIsUserMenuOpen(false);
                setIsProductMenuOpen(false);
              }}
              className={classes.userMenuOverlay}
            />
          </Portal>
        )}
      </div>
    </ErrorBoundary>
  );
};

HeaderBar.defaultProps = {
  headerLabel: 'Header',
  onSelectProduct: () => {},
};

export default withRouter<any, any>(withStyles(styles)(
  HeaderBar,
) as any) as React.ComponentClass<HeaderBarProps>;
