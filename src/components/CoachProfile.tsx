import { Person } from '@mui/icons-material';
import { Avatar, Chip, Stack, Typography } from '@mui/material';

export const CoachProfile = () => {
  return (
    <Stack spacing={3} direction="row" alignItems="center">
      <Avatar>
        <Person />
      </Avatar>
      <Stack spacing={2}>
        <Typography variant="h6">Upcoming FREE</Typography>
        <Stack spacing={1} direction="row" alignItems="center">
          <Chip label="CASH" color="primary" size="small" />
          <Typography variant="caption" color="text.secondary">
            coaches.diana_ross.nick
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
