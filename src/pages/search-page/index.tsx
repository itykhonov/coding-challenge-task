import React, { FC, useState } from 'react';
import { useStyles } from './styles';
import classnames from 'classnames';
import {
  useGetSearchItems,
  useSelectSearchItems,
  useSelectSearchItemsLoading,
  useSelectSearchItemsCurrentPage,
  useSelectSearchItemsPagesCount,
  useSelectSearchString,
  useSelectSearchLimit
} from 'src/store/search/hooks';
import ReactPaginate from 'react-paginate';
import { Search } from './search';
import { SearchItem } from './searchItem';

export const SearchPage: FC = () => {
  const styles = useStyles();
  const searchItems = useSelectSearchItems();
  const search = useGetSearchItems();
  const latestSearchString = useSelectSearchString();
  const [searchValue, setSearchValue] = useState(latestSearchString);
  const pagesCount = useSelectSearchItemsPagesCount();
  const loading = useSelectSearchItemsLoading();
  const currentPage = useSelectSearchItemsCurrentPage();
  const limit = useSelectSearchLimit();

  const handlePageClick = ({ selected }: { selected: number }) => {
    search(latestSearchString, selected + 1);
    setSearchValue(latestSearchString);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.holder}>
          <header className={styles.header}>
            <h1>Movie Search</h1>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </header>
          <main
            className={classnames(styles.main, {
              loading
            })}
          >
            {searchItems && searchItems.length > 0 && (
              <section className={styles.searchResultsContainer}>
                <div className={classnames(styles.searchResultsHolder)}>
                  {searchItems.map((searchItem) => (
                    <SearchItem key={searchItem.id} searchItem={searchItem} />
                  ))}
                </div>
                <div className={styles.paginationHolder}>
                  <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pagesCount}
                    forcePage={currentPage - 1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    renderOnZeroPageCount={() => null}
                  />
                </div>
              </section>
            )}
            {!loading &&
              searchItems &&
              searchItems.length === 0 &&
              limit > 0 && (
                <div className={styles.noResults}>No results found</div>
              )}
          </main>
        </div>
      </div>
    </div>
  );
};
