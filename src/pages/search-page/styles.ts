import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    container: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden'
    },
    wrapper: {
      display: 'flex',
      flex: 1
    },
    holder: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    header: {
      padding: [16, 27],
      '& h1': {
        textAlign: 'center',
        marginBottom: 10
      }
    },
    main: {
      padding: [0, 27],
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      position: 'relative',
      transition: 'opacity 2s',
      '&.loading': {
        opacity: 0.5
      }
    },
    searchInputHolder: {
      display: 'flex',
      justifyContent: 'center',
      '& input': {
        outline: 'none',
        fontSize: 14,
        lineHeight: '20px',
        height: 40,
        width: '50%',
        color: '#000',
        marginBottom: 20,
        background: '#fff',
        border: '1.5px solid #000',
        padding: 10,
        overflow: 'hidden'
      }
    },
    searchResultsContainer: {
      position: 'relative',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      paddingBottom: 60
    },
    searchResultsHolder: {
      position: 'relative',
      maxHeight: 'calc(100vh - 200px)',
      overflowY: 'auto',
      display: 'flex',
      flexWrap: 'wrap'
    },
    searchItem: {
      width: '20%',
      marginBottom: 14,
      paddingRight: 10,
      display: 'flex',
      flexDirection: 'column',
      '@media (max-width: 1000px)': {
        width: '25%'
      },
      '@media (max-width: 700px)': {
        width: '50%'
      },
      '& .search-result-item': {
        cursor: 'pointer'
      },
      '& h2': {
        fontSize: 14,
        lineHeight: '20px',
        marginBottom: 6,
        display: 'inline-block',
        verticalAlign: 'top'
      },
      '& img': {
        width: '100%',
        height: 'auto',
        display: 'block',
        marginBottom: 10
      }
    },
    paginationHolder: {
      padding: 13,
      background: '#fff',
      position: 'absolute',
      bottom: 0,
      left: -27,
      right: -27,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
      '& .pagination': {
        display: 'flex',
        '& li': {
          marginRight: 14,
          width: 34,
          height: 34,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          cursor: 'pointer',
          '@media (max-width: 1000px)': {
            width: 15
          },
          '&.disabled': {
            pointerEvents: 'none',
            opacity: 0.7
          },
          '&.active': {
            pointerEvents: 'none',
            background: '#000',
            color: '#fff'
          },
          '&:hover': {
            background: '#000',
            color: '#fff'
          },
          '& a': {
            flex: 1,
            textAlign: 'center',
            padding: [10, 2],
            '&:hover': {
              textDecoration: 'none'
            }
          }
        }
      }
    },
    noResults: {
      fontSize: 20,
      lineHeight: '24px'
    }
  };
});
