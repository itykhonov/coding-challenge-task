import { useLocation } from 'react-router';

export const useSelectRouterPathSearchItemID: () => string = () => {
  const { pathname } = useLocation();
  const pathNameArray: string[] = pathname.split('/');
  const path = pathNameArray[pathNameArray.length - 1];
  return path === 'search' ? '' : path;
};
