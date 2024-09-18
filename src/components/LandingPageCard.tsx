import {
  Card,
  CardContent,
  CardHeader,
  CardProps,
  IconButton,
  lighten,
} from '@mui/material';

export type LandingPageCardProps = CardProps & {
  title: string;
  actionIcon?: React.ReactNode | null;
};

export const LandingPageCard = ({
  title,
  actionIcon,
  children,
  ...cardProps
}: LandingPageCardProps) => {
  return (
    <Card {...cardProps}>
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'h6' }}
        action={actionIcon ? <IconButton>{actionIcon}</IconButton> : null}
        sx={{
          backgroundColor: (theme) =>
            lighten(theme.palette.background.paper, 0.08),
        }}
      />
      <CardContent sx={{ px: 4 }}>{children}</CardContent>
    </Card>
  );
};
