export type PoisListProps = {
  pois: PoisListItemProps[];
};

export type PoisListItemProps = {
  address: string;
  name: string;
  onClick?: () => void;
};
