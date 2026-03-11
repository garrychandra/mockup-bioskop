import {
  Container, Typography, Grid, Card, CardMedia,
  CardContent, CardActions, Button, Box, Chip, Stack,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import { useNavigate } from 'react-router-dom'
import { cinemas } from '../data/cinemas'

const FACILITY_COLORS = {
  IMAX: 'primary',
  '4DX': 'secondary',
  'Dolby Atmos': 'info',
  'Dolby Vision': 'info',
  'VIP Lounge': 'warning',
  'Recliner Seats': 'success',
  'Premium Cinema': 'success',
  'Couple Seats': 'default',
  'Kids Zone': 'default',
  Parking: 'default',
  Bar: 'default',
  'Food Court': 'default',
  'Snack Bar': 'default',
  'Premium Dining': 'warning',
}

export default function CinemaPage() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
        Our Cinemas
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
        Find the nearest CINEMAX location and enjoy a world-class movie experience.
      </Typography>

      <Grid container spacing={4}>
        {cinemas.map((cinema) => (
          <Grid item xs={12} sm={6} md={4} key={cinema.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.2s',
                '&:hover': {
                  boxShadow: '0 8px 30px rgba(229,9,20,0.3)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={cinema.image_url}
                alt={cinema.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {cinema.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5, mb: 1 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 18, mt: 0.2 }} />
                  <Typography variant="body2" color="text.secondary">
                    {cinema.location}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                  <PhoneIcon sx={{ color: 'text.secondary', fontSize: 16 }} />
                  <Typography variant="body2" color="text.secondary">
                    {cinema.phone}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <TheaterComedyIcon sx={{ color: 'text.secondary', fontSize: 16 }} />
                  <Typography variant="body2" color="text.secondary">
                    {cinema.totalStudios} studios
                  </Typography>
                </Box>

                <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap>
                  {cinema.facilities.map((f) => (
                    <Chip
                      key={f}
                      label={f}
                      size="small"
                      color={FACILITY_COLORS[f] || 'default'}
                      variant="outlined"
                      sx={{ mb: 0.5, fontSize: '0.68rem' }}
                    />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0, gap: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  fullWidth
                  onClick={() => navigate('/schedule')}
                >
                  View Schedules
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  fullWidth
                >
                  Get Directions
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
