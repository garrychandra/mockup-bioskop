import { useState } from 'react'
import {
  Container, Typography, Grid, Box, TextField,
  InputAdornment, ToggleButton, ToggleButtonGroup,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { movies } from '../data/movies'
import MovieCard from '../components/MovieCard'

const STATUS_FILTERS = [
  { value: '', label: 'All' },
  { value: 'now_showing', label: 'Now Showing' },
  { value: 'coming_soon', label: 'Coming Soon' },
]

export default function MoviesPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')

  const filtered = movies.filter((m) => {
    const matchesStatus = status === '' || m.status === status
    const matchesSearch =
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.genre.toLowerCase().includes(search.toLowerCase())
    return matchesStatus && matchesSearch
  })

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 800 }}>
        Movies
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          placeholder="Search by title or genre…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ minWidth: 280 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <ToggleButtonGroup
          value={status}
          exclusive
          onChange={(_, v) => v !== null && setStatus(v)}
          size="small"
        >
          {STATUS_FILTERS.map((f) => (
            <ToggleButton key={f.value} value={f.value}>
              {f.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>

      {filtered.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography color="text.secondary">No movies found</Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filtered.map((movie) => (
            <Grid item xs={6} sm={4} md={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}
