import { movies } from './movies'
import { cinemas } from './cinemas'

function dateStr(offsetDays) {
  const d = new Date()
  d.setDate(d.getDate() + offsetDays)
  return d.toISOString().split('T')[0]
}

function makeShowtime(date, hour, minute = '00') {
  return `${date}T${String(hour).padStart(2, '0')}:${minute}:00`
}

export const schedules = [
  // ── Grand Indonesia (cinema 1) ─────────────────────────────────────────────
  // Today
  { id: 1, movie_id: 1, cinema_id: 1, hall: 'IMAX Hall 1', start_time: makeShowtime(dateStr(0), 10), price_regular: 95000, price_vip: 150000, available_seats: 120 },
  { id: 2, movie_id: 1, cinema_id: 1, hall: 'IMAX Hall 1', start_time: makeShowtime(dateStr(0), 13, '30'), price_regular: 95000, price_vip: 150000, available_seats: 87 },
  { id: 3, movie_id: 2, cinema_id: 1, hall: 'Studio A', start_time: makeShowtime(dateStr(0), 11), price_regular: 75000, price_vip: 120000, available_seats: 60 },
  { id: 4, movie_id: 3, cinema_id: 1, hall: 'Dolby Studio 2', start_time: makeShowtime(dateStr(0), 14), price_regular: 80000, price_vip: 130000, available_seats: 100 },
  { id: 5, movie_id: 4, cinema_id: 1, hall: 'Studio B', start_time: makeShowtime(dateStr(0), 16, '30'), price_regular: 70000, price_vip: 110000, available_seats: 45 },
  // Tomorrow
  { id: 6, movie_id: 1, cinema_id: 1, hall: 'IMAX Hall 1', start_time: makeShowtime(dateStr(1), 10), price_regular: 95000, price_vip: 150000, available_seats: 140 },
  { id: 7, movie_id: 2, cinema_id: 1, hall: 'Studio A', start_time: makeShowtime(dateStr(1), 13), price_regular: 75000, price_vip: 120000, available_seats: 90 },
  { id: 8, movie_id: 5, cinema_id: 1, hall: 'Dolby Studio 2', start_time: makeShowtime(dateStr(1), 16), price_regular: 80000, price_vip: 130000, available_seats: 110 },
  // Day after
  { id: 9, movie_id: 3, cinema_id: 1, hall: 'Studio B', start_time: makeShowtime(dateStr(2), 11, '30'), price_regular: 80000, price_vip: 130000, available_seats: 120 },
  { id: 10, movie_id: 4, cinema_id: 1, hall: 'Studio A', start_time: makeShowtime(dateStr(2), 14, '30'), price_regular: 70000, price_vip: 110000, available_seats: 80 },

  // ── Pondok Indah Mall (cinema 2) ───────────────────────────────────────────
  // Today
  { id: 11, movie_id: 2, cinema_id: 2, hall: '4DX Studio', start_time: makeShowtime(dateStr(0), 12), price_regular: 90000, price_vip: 145000, available_seats: 70 },
  { id: 12, movie_id: 3, cinema_id: 2, hall: 'Studio 1', start_time: makeShowtime(dateStr(0), 15), price_regular: 75000, price_vip: 120000, available_seats: 50 },
  { id: 13, movie_id: 5, cinema_id: 2, hall: 'Studio 2', start_time: makeShowtime(dateStr(0), 17, '30'), price_regular: 75000, price_vip: 120000, available_seats: 95 },
  // Tomorrow
  { id: 14, movie_id: 1, cinema_id: 2, hall: '4DX Studio', start_time: makeShowtime(dateStr(1), 11, '30'), price_regular: 90000, price_vip: 145000, available_seats: 65 },
  { id: 15, movie_id: 4, cinema_id: 2, hall: 'Studio 1', start_time: makeShowtime(dateStr(1), 14), price_regular: 70000, price_vip: 115000, available_seats: 80 },
  // Day after
  { id: 16, movie_id: 2, cinema_id: 2, hall: '4DX Studio', start_time: makeShowtime(dateStr(2), 10, '30'), price_regular: 90000, price_vip: 145000, available_seats: 130 },
  { id: 17, movie_id: 5, cinema_id: 2, hall: 'Studio 2', start_time: makeShowtime(dateStr(2), 15, '30'), price_regular: 75000, price_vip: 120000, available_seats: 100 },

  // ── Mall of Indonesia (cinema 3) ───────────────────────────────────────────
  // Today
  { id: 18, movie_id: 4, cinema_id: 3, hall: 'Premium Hall', start_time: makeShowtime(dateStr(0), 11), price_regular: 85000, price_vip: 140000, available_seats: 40 },
  { id: 19, movie_id: 1, cinema_id: 3, hall: 'Studio 1', start_time: makeShowtime(dateStr(0), 14), price_regular: 75000, price_vip: 120000, available_seats: 88 },
  { id: 20, movie_id: 3, cinema_id: 3, hall: 'Studio 2', start_time: makeShowtime(dateStr(0), 19), price_regular: 80000, price_vip: 125000, available_seats: 75 },
  // Tomorrow
  { id: 21, movie_id: 2, cinema_id: 3, hall: 'Premium Hall', start_time: makeShowtime(dateStr(1), 12), price_regular: 85000, price_vip: 140000, available_seats: 55 },
  { id: 22, movie_id: 5, cinema_id: 3, hall: 'Studio 1', start_time: makeShowtime(dateStr(1), 16, '30'), price_regular: 75000, price_vip: 120000, available_seats: 92 },

  // ── Senayan City (cinema 4) ────────────────────────────────────────────────
  // Today
  { id: 23, movie_id: 1, cinema_id: 4, hall: 'IMAX Hall', start_time: makeShowtime(dateStr(0), 9, '30'), price_regular: 100000, price_vip: 160000, available_seats: 150 },
  { id: 24, movie_id: 1, cinema_id: 4, hall: 'IMAX Hall', start_time: makeShowtime(dateStr(0), 13), price_regular: 100000, price_vip: 160000, available_seats: 30 },
  { id: 25, movie_id: 2, cinema_id: 4, hall: '4DX Studio', start_time: makeShowtime(dateStr(0), 11, '30'), price_regular: 95000, price_vip: 150000, available_seats: 60 },
  { id: 26, movie_id: 3, cinema_id: 4, hall: 'Dolby Vision Studio', start_time: makeShowtime(dateStr(0), 16), price_regular: 85000, price_vip: 140000, available_seats: 110 },
  // Tomorrow
  { id: 27, movie_id: 4, cinema_id: 4, hall: 'Studio 1', start_time: makeShowtime(dateStr(1), 10), price_regular: 75000, price_vip: 120000, available_seats: 85 },
  { id: 28, movie_id: 5, cinema_id: 4, hall: 'IMAX Hall', start_time: makeShowtime(dateStr(1), 14, '30'), price_regular: 100000, price_vip: 160000, available_seats: 70 },
  // Day after
  { id: 29, movie_id: 1, cinema_id: 4, hall: 'IMAX Hall', start_time: makeShowtime(dateStr(2), 10, '30'), price_regular: 100000, price_vip: 160000, available_seats: 140 },
  { id: 30, movie_id: 3, cinema_id: 4, hall: '4DX Studio', start_time: makeShowtime(dateStr(2), 15), price_regular: 95000, price_vip: 150000, available_seats: 95 },
].map((sc) => {
  const movie = movies.find((m) => m.id === sc.movie_id)
  const cinema = cinemas.find((c) => c.id === sc.cinema_id)
  return {
    ...sc,
    movie_title: movie?.title,
    poster_url: movie?.poster_url,
    duration_min: movie?.duration_min,
    genre: movie?.genre,
    cinema_name: cinema?.name,
    cinema_location: cinema?.location,
  }
})
