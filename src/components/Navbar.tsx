import {
  AppBar, Toolbar, Typography, Button, Box,
} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie'
import { Link as RouterLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{ background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(10px)' }}
    >
      <Toolbar>
        <MovieIcon sx={{ color: 'primary.main', mr: 1, fontSize: 30 }} />
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            fontWeight: 900,
            color: 'white',
            textDecoration: 'none',
            letterSpacing: 1,
            flexGrow: 0,
            mr: 4,
          }}
        >
          CINEMAX
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/movies">
            Movies
          </Button>
          <Button color="inherit" component={RouterLink} to="/schedule">
            Schedule
          </Button>
          <Button color="inherit" component={RouterLink} to="/cinema">
            Cinemas
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="outlined" color="inherit" size="small">
            Login
          </Button>
          <Button variant="contained" color="primary" size="small">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
