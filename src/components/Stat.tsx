import { Stack, Typography } from '@mui/material';

type StatProps = {
  title: string;
  value: number;
};

export const Stat = ({ title, value }: StatProps) => {
  return (
    <Stack spacing={0}>
      <Typography variant="button" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="h6">{value}</Typography>
    </Stack>
  );
};
