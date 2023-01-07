import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    wrapper: {
      padding: 10,
      overflow: 'hidden'
    },
    btnBack: {
      display: 'inline-block',
      verticalAlign: 'top',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      marginBottom: 10,
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    holder: {
      display: 'flex',
      '@media (max-width: 700px)': {
        flexDirection: 'column'
      }
    },
    column: {
      width: '50%',
      padding: 10,
      '@media (max-width: 700px)': {
        width: '100%'
      },
      '& h1': {
        marginBottom: 20,
        '& a': {
          color: '#000',
          '&:hover': {
            textDecoration: 'underline'
          }
        }
      },
      '& p': {
        marginBottom: 10
      },
      '& dl': {
        overflow: 'hidden',
        '& dt': {
          float: 'left',
          marginBottom: 10
        },
        '& dd': {
          overflow: 'hidden',
          textAlign: 'right',
          marginBottom: 10,
          paddingLeft: 20
        }
      }
    },
    imageHolder: {
      overflow: 'hidden',
      '& img': {
        width: '100%',
        height: 'auto',
        verticalAlign: 'top'
      }
    }
  };
});
