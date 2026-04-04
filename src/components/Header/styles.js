// import { alpha } from '@mui/material/styles';
// import { makeStyles } from 'tss-react/mui';


// const useStyles = makeStyles()((theme) => ({
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//       background: 'red',
//     },
//   },
//   search: {
//     display: 'flex', // Aligne l'icône et l'input horizontalement
//     alignItems: 'center', // Centrer verticalement
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },

//   // search: {
//   //   position: 'relative',
//   //   borderRadius: theme.shape.borderRadius,
//   //   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   //   '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
//   //   marginRight: theme.spacing(2),
//   //   marginLeft: 0,
//   //   width: '100%',
//   //   [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
//   // },
//   searchIcon: {
//     // padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
// // backgroundColor: 'red',
//     padding: theme.spacing(1), // Ajustez cet espace pour une marge interne confortable
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     // padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
// // background: 'blue',
//     // padding: theme.spacing(1, 1, 1, 4), // Ajuste la marge pour ne pas chevaucher l'icône
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   toolbar: {
//     display: 'flex', justifyContent: 'space-between',
//   },
// }));

// export default useStyles;


import { alpha } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '64px', 
  },
  centerBox: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
