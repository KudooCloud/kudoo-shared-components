import { StyleKeys, DrawerProps } from './types';
import { Theme } from 'shared/src/config/theme';

export default (theme: Theme): StyleFnReturnType<StyleKeys, DrawerProps> => ({
  component: {
    minHeight: '100vh',
    width: theme.drawer.openWidth,
    fontFamily: theme.typography.font.family2,
    backgroundColor: theme.palette.primary.color3,
    overflow: 'hidden',
    transition: 'width ease-in 0.2s',
    display: 'flex',
    flexDirection: 'column',
    '&.closed': {
      width: theme.drawer.closedWidth,
    },
  },
  wrapper: {
    backgroundColor: theme.palette.primary.color3,
    height: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  upperPart: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  closeIconWrapper: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  closeIcon: {
    padding: '20px',
    width: '20px',
    height: '20px',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
  },
  hamburgerIconWrapper: {
    height: '60px',
  },
  hamburgerIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 0px',
    color: 'white',
    fontSize: '35px',
    cursor: 'pointer',
  },
  userImageWrapper: {
    padding: '20px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${theme.palette.blueGrey[50]}`,
  },
  userInitial: {
    background: theme.palette.primary.color2,
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    fontSize: '13px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDAOName: {
    flex: 1,
    whiteSpace: 'pre-wrap',
    lineHeight: '23px',
    wordBreak: 'break-word',
  },
  usernameWrapper: {
    padding: '25px 20px',
    color: 'white',
    cursor: 'pointer',
    borderBottom: `1px solid ${theme.palette.blueGrey[50]}`,
    whiteSpace: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  moreRightArrow: {
    transition: 'all ease-in 0.2s',
    transform: 'rotate(0deg)',
    paddingLeft: 10,
    '&.down': {
      transform: 'rotate(90deg)',
    },
  },
  goToDAOIcon: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  userMoreItem: {
    cursor: 'pointer',
    padding: '20px',
    borderBottom: `1px solid ${theme.palette.blueGrey[50]}`,
    backgroundColor: theme.palette.shadow.color3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
  },
  onlineStatus: {
    height: '10px',
    width: '10px',
    backgroundColor: theme.palette.primary.color1,
    borderRadius: '50%',
  },
  daoName: {
    color: 'white',
    fontSize: '14px',
    flex: 1,
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    paddingRight: 15,
    '$userMoreItem.selected &': {
      color: '#64666b',
      fontStyle: 'italic',
    },
  },
  manageDAOBtn: {
    padding: '15px',
    border: `1px solid ${theme.palette.primary.color2}`,
    borderRadius: '50px',
    color: theme.palette.primary.color2,
    textAlign: 'center',
    fontSize: '14px',
  },
  drawerItem: {
    padding: '20px',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.blueGrey[50]}`,
    cursor: 'pointer',
    '&.active': {
      backgroundColor: theme.palette.shadow.color3,
    },
  },
  itemIcon: {
    marginRight: '20px',
    fontSize: '30px',
    color: theme.palette.primary.color1,
    display: 'flex',
  },
  itemTitle: {
    fontSize: '16px',
    color: theme.palette.grey[300],
    fontFamily: theme.typography.font.family2,
    fontWeight: 300,
  },
  kudooIconWraper: {
    padding: 20,
    textAlign: 'center',
  },
  kudooIconImage: {
    width: 50,
    '&.closed': {
      width: 30,
    },
  },
  userWrapper: {},
  userMoreWrapper: {},
});
