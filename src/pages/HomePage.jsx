import {
  Box, Typography, Button, Grid, Container, Chip, Paper,
} from '@mui/material'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import EventIcon from '@mui/icons-material/Event'
import StarIcon from '@mui/icons-material/Star'
import SecurityIcon from '@mui/icons-material/Security'
import { useNavigate } from 'react-router-dom'
import { movies } from '../data/movies'
import { cinemas } from '../data/cinemas'
import MovieCard from '../components/MovieCard'

const nowShowing = movies.filter((m) => m.status === 'now_showing').slice(0, 4)

const FEATURES = [
  {
    icon: <ConfirmationNumberIcon sx={{ fontSize: 42, color: 'primary.main' }} />,
    title: 'Easy Booking',
    desc: 'Book tickets in seconds with our seamless checkout.',
  },
  {
    icon: <EventIcon sx={{ fontSize: 42, color: 'secondary.main' }} />,
    title: 'Live Schedules',
    desc: 'Real-time showtimes across all our partner cinemas.',
  },
  {
    icon: <StarIcon sx={{ fontSize: 42, color: 'primary.main' }} />,
    title: 'Seat Selection',
    desc: 'Pick your perfect seat with our interactive seat map.',
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 42, color: 'secondary.main' }} />,
    title: 'QR Verification',
    desc: 'Instant ticket verification with unique QR codes.',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 50%, #0a0a0a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 700 }}>
            <Chip label="Now Showing" color="primary" sx={{ mb: 2, fontWeight: 700 }} />
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.5rem', md: '4.5rem' }, mb: 2 }}
            >
              Your Ultimate
              <Box component="span" sx={{ color: 'primary.main' }}>
                {' '}Cinema{' '}
              </Box>
              Experience
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
              Book tickets instantly, choose your seats, and enjoy the magic of cinema.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/movies')}
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                Browse Movies
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/schedule')}
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                View Schedules
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Stats Banner ── */}
      <Box sx={{ background: 'linear-gradient(90deg, #e50914 0%, #b0060f 100%)', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center" textAlign="center">
            {[
              { value: `${cinemas.length}+`, label: 'Cinema Locations' },
              { value: `${movies.length}+`, label: 'Movies Available' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '99%', label: 'Satisfaction Rate' },
            ].map((s) => (
              <Grid item xs={6} sm={3} key={s.label}>
                <Typography variant="h4" sx={{ fontWeight: 900 }}>{s.value}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.85 }}>{s.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Features ── */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" sx={{ mb: 6 }}>
            Why Choose CINEMAX?
          </Typography>
          <Grid container spacing={4}>
            {FEATURES.map((f, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Paper
                  sx={{ p: 3, textAlign: 'center', height: '100%', bgcolor: 'background.default' }}
                >
                  {f.icon}
                  <Typography variant="h6" sx={{ mt: 1.5, mb: 1, fontWeight: 700 }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {f.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── Now Showing Strip ── */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h3">Now Showing</Typography>
          <Button variant="outlined" onClick={() => navigate('/movies')}>
            See All
          </Button>
        </Box>
        <Grid container spacing={3}>
          {nowShowing.map((movie) => (
            <Grid item xs={6} sm={4} md={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Coming Soon Teaser ── */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h3">Coming Soon</Typography>
            <Button variant="outlined" onClick={() => navigate('/movies')}>
              View All
            </Button>
          </Box>
          <Grid container spacing={3}>
            {movies
              .filter((m) => m.status === 'coming_soon')
              .map((movie) => (
                <Grid item xs={6} sm={4} md={3} key={movie.id}>
                  <MovieCard movie={movie} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA Banner ── */}
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 100%)',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3" sx={{ mb: 2 }}>Ready for the Show?</Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Join thousands of movie lovers who trust CINEMAX for the ultimate cinema experience.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/movies')}
            sx={{ px: 5, py: 1.5, fontSize: '1.1rem' }}
          >
            Book Now
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
