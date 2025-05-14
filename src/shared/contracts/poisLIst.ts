export type PoisListProps = {
  pois: PoisListItemProps[];
  searchProps: PoisListSearchProps;
};

export type PoisListItemProps = {
  address: string;
  name: string;
  onClick?: () => void;
};

export type PoisListSearchProps = {
  searchString: string;
  setSearchString: (value: string) => void;
  label: string;
  clearButtonAriaLabel: string;
};
