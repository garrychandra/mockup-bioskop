import { useState, useMemo } from 'react'
import {
  Container, Typography, Grid, Box, Card, CardContent,
  Chip, Button, Divider, ToggleButtonGroup, ToggleButton,
  Select, MenuItem, FormControl, InputLabel,
} from '@mui/material'
import { schedules } from '../data/schedules'
import { cinemas } from '../data/cinemas'

function dateStr(offsetDays) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return d.toISOString().split('T')[0]
}

function formatDateLabel(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.round((d.getTime() - today.getTime()) / 86400000)
  const dayName = d.toLocaleDateString('en-US', { weekday: 'short' })
  const label = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  if (diff === 0) return `Today · ${label}`
  if (diff === 1) return `Tomorrow · ${label}`
  return `${dayName} · ${label}`
}

function formatTime(datetimeStr) {
  return new Date(datetimeStr).toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function SchedulePage() {
  const dateOptions = useMemo(() => [dateStr(0), dateStr(1), dateStr(2)], [])
  const [date, setDate] = useState(dateOptions[0])
  const [cinemaFilter, setCinemaFilter] = useState('')

  const filtered = schedules.filter((sc) => {
    const scDate = sc.start_time.split('T')[0]
    const matchDate = scDate === date
    const matchCinema = cinemaFilter === '' || sc.cinema_id === cinemaFilter
    return matchDate && matchCinema
  })

  // Group by cinema
  const byCinema = filtered.reduce((acc, sc) => {
    const key = sc.cinema_name
    if (!acc[key]) acc[key] = []
    acc[key].push(sc)
    return acc
  }, {})

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 800 }}>
        Movie Schedules
      </Typography>

      {/* Filters */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
        <ToggleButtonGroup
          value={date}
          exclusive
          onChange={(_, v) => { if (v) setDate(v) }}
          size="small"
        >
          {dateOptions.map((d) => (
            <ToggleButton key={d} value={d} sx={{ textTransform: 'none', px: 2.5 }}>
              {formatDateLabel(d)}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <FormControl size="small" sx={{ minWidth: 220 }}>
          <InputLabel>All Cinemas</InputLabel>
          <Select
            value={cinemaFilter}
            label="All Cinemas"
            onChange={(e) => setCinemaFilter(e.target.value)}
          >
            <MenuItem value="">All Cinemas</MenuItem>
            {cinemas.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {Object.keys(byCinema).length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography color="text.secondary">No schedules for this date</Typography>
        </Box>
      ) : (
        Object.entries(byCinema).map(([cinemaName, cinemaSchedules]) => (
          <Box key={cinemaName} sx={{ mb: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              {cinemaName}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {cinemaSchedules[0]?.cinema_location}
            </Typography>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={2}>
              {cinemaSchedules.map((sc) => (
                <Grid item xs={12} sm={6} md={4} key={sc.id}>
                  <Card sx={{ display: 'flex', gap: 2, p: 2 }}>
                    <Box
                      component="img"
                      src={sc.poster_url}
                      alt={sc.movie_title}
                      sx={{
                        width: 70,
                        height: 100,
                        objectFit: 'cover',
                        borderRadius: 1,
                        flexShrink: 0,
                      }}
                    />
                    <CardContent sx={{ p: 0, flexGrow: 1, '&:last-child': { pb: 0 } }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }} noWrap>
                        {sc.movie_title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        {sc.hall}
                      </Typography>
                      <Box sx={{ my: 1 }}>
                        <Chip
                          label={formatTime(sc.start_time)}
                          size="small"
                          color="primary"
                        />
                      </Box>
                      <Typography variant="caption" color="text.secondary" display="block">
                        Regular: Rp{Number(sc.price_regular).toLocaleString()}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" display="block">
                        VIP: Rp{Number(sc.price_vip).toLocaleString()}
                      </Typography>
                      <Chip
                        label={`${sc.available_seats} seats left`}
                        size="small"
                        color={sc.available_seats < 50 ? 'warning' : 'default'}
                        sx={{ mt: 0.5, fontSize: '0.65rem' }}
                      />
                      <Button
                        size="small"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 1 }}
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </Container>
  )
}
