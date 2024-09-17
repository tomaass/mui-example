import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { LandingPage } from './components/LandingPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        html: {
          minHeight: '100%',
        },
        body: {
          backgroundColor: theme.palette.background.default,
          minHeight: '100vh',
        },
      }),
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
          <LandingPage />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
