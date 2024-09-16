import {
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { DashboardListItemIndicator } from './DashboardListItemIndicator';

export type DashboardListItemModel = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'success' | 'info' | 'warning';
};

type DashboardListItemProps = { item: DashboardListItemModel };

export const DashboardListItem = ({ item }: DashboardListItemProps) => {
  return (
    <ListItemButton>
      <ListItemAvatar sx={{ color: (theme) => theme.palette.common.black }}>
        <DashboardListItemIndicator icon={item.icon} color={item.color} />
      </ListItemAvatar>
      <ListItemText>
        <Stack spacing={0}>
          <Typography variant="body1">{item.title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {item.description}
          </Typography>
        </Stack>
      </ListItemText>
    </ListItemButton>
  );
};
