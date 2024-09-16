import {
  Card,
  CardContent,
  CardHeader,
  CardProps,
  IconButton,
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
      />
      <CardContent sx={{ px: 4 }}>{children}</CardContent>
    </Card>
  );
};
