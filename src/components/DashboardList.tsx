import { List } from '@mui/material';
import { DashboardListItem, DashboardListItemModel } from './DashboardListItem';

export type DashboardListProps = {
  items: DashboardListItemModel[];
};

export const DashboardList = ({ items }: DashboardListProps) => {
  return (
    <List>
      {items.map((item) => (
        <DashboardListItem item={item} />
      ))}
    </List>
  );
};
