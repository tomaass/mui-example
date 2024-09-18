import { Grid2, LinearProgress, Stack, Typography } from '@mui/material';

export type ProgressProps = {
  icon: React.ReactNode;
  title: string;
  progress: number;
  color: 'success' | 'warning' | 'error';
};

export const Progress = ({ icon, title, progress, color }: ProgressProps) => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ color: (theme) => theme.palette[color].main }}
      alignItems="center"
    >
      <Grid2 size={3}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ flex: 1 }}>
          {icon}
          <Typography variant="body2">{title}</Typography>
        </Stack>
      </Grid2>
      <Grid2 size={8}>
        <LinearProgress
          variant="determinate"
          value={progress}
          color={color}
          sx={{ flex: 5, height: 10, width: '100%', justifySelf: 'flex-end' }}
        />
      </Grid2>
      <Grid2 size={1}>
        <Typography variant="body2">{progress}</Typography>
      </Grid2>
    </Grid2>
  );
};
