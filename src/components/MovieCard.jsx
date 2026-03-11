import {
  Card, CardMedia, CardContent, CardActions,
  Typography, Button, Chip, Box, Rating,
} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useNavigate } from 'react-router-dom'

export default function MovieCard({ movie }) {
  const navigate = useNavigate()
  const isNowShowing = movie.status === 'now_showing'

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 48px rgba(229,9,20,0.35)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="360"
          image={movie.poster_url || 'https://via.placeholder.com/300x450?text=No+Poster'}
          alt={movie.title}
          sx={{ objectFit: 'cover' }}
        />
        <Chip
          label={isNowShowing ? 'Now Showing' : 'Coming Soon'}
          color={isNowShowing ? 'success' : 'warning'}
          size="small"
          sx={{ position: 'absolute', top: 8, right: 8, fontWeight: 700 }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2, mb: 0.5 }} noWrap>
          {movie.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
          {movie.genre}
        </Typography>
        {movie.rating && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Rating value={movie.rating / 2} precision={0.5} size="small" readOnly />
            <Typography variant="caption" color="text.secondary">
              {movie.rating}/10
            </Typography>
          </Box>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
          <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <Typography variant="caption" color="text.secondary">
            {movie.duration_min} min
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={() => navigate(`/movies/${movie.id}`)}
        >
          {isNowShowing ? 'Details & Book' : 'More Info'}
        </Button>
      </CardActions>
    </Card>
  )
}
