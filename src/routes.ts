import { SearchPage } from './pages/search-page';
import { SearchItemPage } from './pages/search-item-page';
import { ERoutes } from './types/enums';

export const routes = [
  {
    path: ERoutes.searchItemPage,
    component: SearchItemPage
  },
  {
    path: ERoutes.search,
    component: SearchPage
  }
];
