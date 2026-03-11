import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import MoviesPage from '../pages/MoviesPage'
import SchedulePage from '../pages/SchedulePage'
import CinemaPage from '../pages/CinemaPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/cinema" element={<CinemaPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
