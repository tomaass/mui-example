import { Stack, Typography } from '@mui/material';

export const EventStart = () => {
  return (
    <Stack spacing={1} maxWidth={150}>
      <Typography variant="h6" textAlign="center">
        01/01/33, 6:00
      </Typography>
      <Typography variant="caption" textAlign="center">
        Link will be available before the start
      </Typography>
    </Stack>
  );
};
