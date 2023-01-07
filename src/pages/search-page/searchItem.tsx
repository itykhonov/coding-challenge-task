// import { ICandidate } from '../../store/candidate/types';
import React, { FC } from 'react';
import { useStyles } from './styles';
import { ERoutes } from '../../types/enums';
import { Image } from 'src/shared/image/image';
import { useNavigate } from 'react-router-dom';
import { ISearchItem } from 'src/store/search-item/types';

interface ISearchItemProps {
  searchItem: ISearchItem;
}

export const SearchItem: FC<ISearchItemProps> = ({
  searchItem
}: ISearchItemProps) => {
  const styles = useStyles();
  const navigate = useNavigate();

  const navigateToCandidatePage = (id: number): void => {
    navigate(`${ERoutes.search}/${id}`);
  };

  const { id, poster_path, title }: ISearchItem = searchItem;

  return (
    <div className={styles.searchItem}>
      <div
        className="search-result-item"
        onClick={() => navigateToCandidatePage(id)}
      >
        <Image src={poster_path} alt={title} />
        <h2>{title}</h2>
      </div>
    </div>
  );
};
