import {
  AdsClick,
  BackupTable,
  CardMembership,
  Check,
  ChevronRight,
  CoPresent,
  CreateNewFolder,
  Edit,
  Info,
  School,
  SportsEsports,
  Upload,
} from '@mui/icons-material';
import { Grid2, Stack } from '@mui/material';
import { CoachProfile } from './CoachProfile';
import { DashboardList } from './DashboardList';
import { DashboardListItemModel } from './DashboardListItem';
import { EventStart } from './EventStart';
import { LandingPageCard } from './LandingPageCard';
import { Progress } from './Progress';
import { Stat } from './Stat';

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
        >
          <Grid2 container spacing={2}>
            <Grid2 container spacing={2} size={4}>
              <Grid2 size={6}>
                <Stat title="Hands" value={0} />
              </Grid2>
              <Grid2 size={6}>
                <Stat title="Moves" value={3} />
              </Grid2>
              <Grid2 size={6}>
                <Stat title="Mistakes" value={42} />
              </Grid2>
              <Grid2 size={6}>
                <Stat title="GTOW score" value={69} />
              </Grid2>
            </Grid2>
            <Grid2 size={8}>
              <Stack spacing={1}>
                <Progress
                  color="success"
                  progress={30}
                  title="Best"
                  icon={<Check />}
                />
                <Progress
                  color="success"
                  progress={45}
                  title="Correct"
                  icon={<Check />}
                />
                <Progress
                  color="warning"
                  progress={10}
                  title="Inaccuracy"
                  icon={<Check />}
                />
                <Progress
                  color="error"
                  progress={5}
                  title="Wrong"
                  icon={<Check />}
                />
                <Progress
                  color="error"
                  progress={0}
                  title="Blunder"
                  icon={<Check />}
                />
              </Stack>
            </Grid2>
          </Grid2>
        </LandingPageCard>
        <LandingPageCard
          title="Analyzer Stats"
          actionIcon={<ChevronRight />}
          sx={{ flex: 1 }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Stat title="Total" value={0} />
            </Grid2>
            <Grid2 size={6}>
              <Stat title="Correct" value={3} />
            </Grid2>
            <Grid2 size={6}>
              <Stat title="Wrong" value={42} />
            </Grid2>
            <Grid2 size={6}>
              <Stat title="Avg. EV loss" value={69} />
            </Grid2>
          </Grid2>
        </LandingPageCard>
      </Stack>
    </Stack>
  );
};
