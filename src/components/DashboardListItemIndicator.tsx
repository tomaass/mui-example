import { Box } from '@mui/material';

type DashboardListItemIndicatorProps = {
  icon: React.ReactNode;
  color: 'success' | 'info' | 'warning';
};

export const DashboardListItemIndicator = ({
  icon,
  color,
}: DashboardListItemIndicatorProps) => {
  return (
    <Box
      sx={{
        width: 45,
        height: 45,
        borderRadius: 2,
        backgroundColor: `${color}.main`,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      {icon}
    </Box>
  );
};
