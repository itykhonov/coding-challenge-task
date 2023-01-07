import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      outline: 'none'
    },
    body: {
      margin: 0,
      fontFamily: 'Montserrat',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '15px',
      color: '#251F1F',
      background: '#F8FAFB',
      minWidth: 320
    },
    p: {
      marginBottom: 10
    },
    ul: {
      listStyle: 'none'
    },
    h1: {
      fontSize: 32,
      lineHeight: '32px',
      color: '#8AB1BB',
      marginBottom: 30
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: '20px',
      color: '#251F1F',
      marginBottom: 25
    },
    'div::-webkit-scrollbar': {
      background:
        'linear-gradient(270deg, #EBECEE 0%, #EBECEE 95.83%, #EBECEE 100%)',
      width: 6
    },
    'div::-webkit-scrollbar-thumb': {
      borderRadius: 5
    },
    'div::-webkit-scrollbar-button': {
      display: 'none'
    },
    input: {},
    'input:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input:-webkit-autofill:hover': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input:-webkit-autofill:focus': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input:-webkit-autofill:active': {
      '-webkit-box-shadow': '0 0 0 30px white inset !important'
    },
    'input::placeholder': {
      color: '#C5CBD8'
    },
    a: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
});
