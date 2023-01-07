import React, {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FC,
  KeyboardEvent,
  SetStateAction
} from 'react';
import { useStyles } from './styles';
import { useGetSearchItems } from 'src/store/search/hooks';

export interface IProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const Search: FC<IProps> = ({ searchValue, setSearchValue }: IProps) => {
  const styles = useStyles();
  const search = useGetSearchItems();

  const onSearch = () => {
    if (searchValue.trim().length) {
      search(searchValue, 1);
    }
  };

  const onChangeSearchInput = (
    event: ChangeEventHandler<HTMLInputElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const searchValue: string = (event as ChangeEvent<HTMLInputElement>).target
      .value;
    setSearchValue(searchValue);
  };

  const onKeyDownSearchInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch();
    }
  };

  return (
    <div className={styles.searchInputHolder}>
      <input
        type="search"
        className="search-input"
        placeholder="Type here and press Enter..."
        onChange={onChangeSearchInput}
        onKeyDown={onKeyDownSearchInput}
        value={searchValue}
      />
    </div>
  );
};
