import {
  AdsClick,
  BackupTable,
  CardMembership,
  ChevronRight,
  CoPresent,
  CreateNewFolder,
  Edit,
  Info,
  School,
  SportsEsports,
  Upload,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import { CoachProfile } from './CoachProfile';
import { EventStart } from './EventStart';
import { LandingPageCard } from './LandingPageCard';
import { DashboardList } from './DashboardList';
import { DashboardListItemModel } from './DashboardListItem';

const firstItems: DashboardListItemModel[] = [
  {
    title: 'Study',
    description: 'Study any spot you want',
    icon: <School fontSize="large" />,
    color: 'success',
  },
  {
    title: 'Custom solutions',
    description: 'Use AI to solve any spot',
    icon: <CreateNewFolder fontSize="large" />,
    color: 'success',
  },
  {
    title: 'Coaching',
    description: 'Live coaching with pros',
    icon: <CoPresent fontSize="large" />,
    color: 'success',
  },
];

const secondItems: DashboardListItemModel[] = [
  {
    title: 'Trainer',
    description: 'Play vs. GTO opponent',
    icon: <SportsEsports fontSize="large" />,
    color: 'info',
  },
  {
    title: 'Range builder',
    description: 'Practice range construction',
    color: 'info',
    icon: <BackupTable fontSize="large" />,
  },
  {
    title: 'Drills',
    description: 'Manage training drills',
    color: 'info',
    icon: <AdsClick fontSize="large" />,
  },
];

const thirdItems: DashboardListItemModel[] = [
  {
    title: 'Uploads',
    description: 'Study analyzed hands',
    color: 'warning',
    icon: <Upload fontSize="large" />,
  },
  {
    title: 'Hands',
    description: 'Study analyzed hands',
    color: 'warning',
    icon: <CardMembership fontSize="large" />,
  },
  {
    title: 'Help center',
    description: 'Tips & Tricks for GTO Wizard',
    color: 'warning',
    icon: <Info fontSize="large" />,
  },
];

export const LandingPage = () => {
  return (
    <Stack py={3} spacing={4} direction="column">
      <LandingPageCard title="Upcoming coaching">
        <Stack direction="row" justifyContent="space-between">
          <CoachProfile />
          <EventStart />
        </Stack>
      </LandingPageCard>
      <LandingPageCard title="Dashboard" actionIcon={<Edit />}>
        <Stack direction="row" justifyContent="space-between">
          <DashboardList items={firstItems} />
          <DashboardList items={secondItems} />
          <DashboardList items={thirdItems} />
        </Stack>
      </LandingPageCard>
      <Stack spacing={3} direction="row">
        <LandingPageCard
          title="Trainer Stats"
          actionIcon={<ChevronRight />}
          sx={{ flex: 2 }}
        />
        <LandingPageCard
          title="Analyzer Stats"
          actionIcon={<ChevronRight />}
          sx={{ flex: 1 }}
        />
      </Stack>
    </Stack>
  );
};
