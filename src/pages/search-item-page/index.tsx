import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Image } from 'src/shared/image/image';
import {
  useGetSearchItem,
  useSelectSearchItem,
  useSelectSearchItemLoading
} from 'src/store/search-item/hooks';
import { ISearchItem } from 'src/store/search-item/types';
import { ERoutes } from 'src/types/enums';
import { useSelectRouterPathSearchItemID } from './hooks';
import { useStyles } from './styles';

export const SearchItemPage: FC = () => {
  const styles = useStyles();
  const searchItemId = useSelectRouterPathSearchItemID();
  const searchItem: ISearchItem | undefined = useSelectSearchItem();
  const loading: boolean = useSelectSearchItemLoading();
  const getSearchItem = useGetSearchItem();
  const navigate = useNavigate();

  const navigateToSearchPage = (): void => {
    navigate(ERoutes.search);
  };

  useEffect(() => {
    if (searchItemId) {
      getSearchItem(searchItemId);
    }
  }, [getSearchItem, searchItemId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!searchItem) {
    return <div>Did not find item by the id = {searchItemId}</div>;
  }

  const {
    title,
    overview,
    poster_path,
    homepage,
    budget,
    adult,
    original_language,
    popularity,
    production_companies,
    production_countries,
    spoken_languages,
    status,
    tagline,
    vote_average,
    vote_count,
    runtime,
    revenue,
    release_date
  }: ISearchItem = searchItem;

  return (
    <div className={styles.wrapper}>
      <button className={styles.btnBack} onClick={() => navigateToSearchPage()}>
        Back to search page
      </button>
      <div className={styles.holder}>
        <div className={styles.column}>
          <div className={styles.imageHolder}>
            <a href={homepage}>
              <Image src={poster_path} alt={title} />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          {title && (
            <h1>
              <a href={homepage}>{title}</a>
            </h1>
          )}
          {overview && <p>{overview}</p>}
          <dl className="info-list">
            {budget > 0 && <dt>budget</dt>}
            {budget > 0 && <dd>{budget}</dd>}
            {adult && <dt>adult</dt>}
            {adult && <dd>{adult}</dd>}
            {status && <dt>status</dt>}
            {status && <dd>{status}</dd>}
            {tagline && <dt>tagline</dt>}
            {tagline && <dd>{tagline}</dd>}
            {vote_average > 0 && <dt>vote average</dt>}
            {vote_average > 0 && <dd>{vote_average}</dd>}
            {vote_count > 0 && <dt>vote count</dt>}
            {vote_count > 0 && <dd>{vote_count}</dd>}
            {original_language && <dt>original language</dt>}
            {original_language && <dd>{original_language}</dd>}
            {popularity > 0 && <dt>popularity</dt>}
            {popularity > 0 && <dd>{popularity}</dd>}
            {runtime && <dt>runtime</dt>}
            {runtime && <dd>{runtime}</dd>}
            {revenue > 0 && <dt>revenue</dt>}
            {revenue > 0 && <dd>{revenue}</dd>}
            {release_date && <dt>release date</dt>}
            {release_date && <dd>{release_date}</dd>}
            {production_companies.length > 0 && <dt>production companies</dt>}
            {production_companies.length > 0 && (
              <dd>{production_companies.map((c) => c.name + ' ')}</dd>
            )}
            {production_countries.length > 0 && <dt>production countries</dt>}
            {production_countries.length > 0 && (
              <dd>{production_countries.map((c) => c.name + ' ')}</dd>
            )}
            {spoken_languages.length > 0 && <dt>spoken languages</dt>}
            {spoken_languages.length > 0 && (
              <dd>{spoken_languages.map((l) => l.name + ' ')}</dd>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
};
