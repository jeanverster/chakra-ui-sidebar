import { mode } from '@chakra-ui/theme-tools';

const parts = ['sideBar', 'sideBarItem', 'sideBarToggle', 'sideBarSection'];

type Dict = Record<string, any>;

const baseStyle = (props: Dict) => {
  return {
    sideBar: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flex: '0 0 200px',
      position: 'fixed',
      height: '100vh',
    },
    sideBarItem: {
      fontWeight: 'medium',
      color: mode(`gray.900`, `gray.100`)(props),
      textAlign: 'center',
      fontSize: 'md',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // '&.active-nav-link::before': {
      //   top: '0',
      //   left: '0',
      //   bottom: '0',
      //   width: '5px',
      //   content: '',
      //   position: 'absolute',
      // },
      // '& .icon-wrap svg': {
      //   stroke: mode(`gray.900`, `gray.100`)(props),
      // },
    },
  };
};

// const sizes = {
//   sm: {
//     stepIcon: {
//       width: '32px',
//       height: '32px',
//       borderWidth: '2px',
//     },
//     icon: {
//       width: '16px',
//       height: '16px',
//     },
//     label: {
//       fontWeight: 'medium',
//       textAlign: 'center',
//       fontSize: 'sm',
//     },
//     description: {
//       fontWeight: '300',
//       textAlign: 'center',
//       fontSize: 'xs',
//     },
//   },
//   md: {
//     stepIcon: {
//       width: '40px',
//       height: '40px',
//       borderWidth: '2px',
//     },
//     icon: {
//       width: '20px',
//       height: '20px',
//     },
//     label: {
//       fontWeight: 'medium',
//       textAlign: 'center',
//       fontSize: 'md',
//     },
//     description: {
//       fontWeight: '300',
//       textAlign: 'center',
//       fontSize: 'sm',
//     },
//   },
//   lg: {
//     stepIcon: {
//       width: '48px',
//       height: '48px',
//       borderWidth: '2px',
//     },
//     icon: {
//       width: '24px',
//       height: '24px',
//     },
//     label: {
//       fontWeight: 'bold',
//       textAlign: 'center',
//       fontSize: 'lg',
//     },
//     description: {
//       fontWeight: '300',
//       textAlign: 'center',
//       fontSize: 'md',
//     },
//   },
// };

const defaultProps = {
  size: 'md',
  colorScheme: 'green',
};

export const SideBarStyleConfig = {
  parts,
  baseStyle,
  defaultProps,
};
