export type Cinema = {
  id: number
  name: string
  location: string
  phone: string
  facilities: string[]
  totalStudios: number
  image_url: string
}

export const cinemas: Cinema[] = [
  {
    id: 1,
    name: 'CINEMAX Grand Indonesia',
    location: 'Jl. M.H. Thamrin No.1, Jakarta Pusat',
    phone: '+62 21 2358 0000',
    facilities: ['IMAX', 'Dolby Atmos', 'VIP Lounge', 'Parking'],
    totalStudios: 8,
    image_url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80',
  },
  {
    id: 2,
    name: 'CINEMAX Pondok Indah Mall',
    location: 'Jl. Metro Pondok Indah, Jakarta Selatan',
    phone: '+62 21 7592 0000',
    facilities: ['4DX', 'Dolby Atmos', 'Couple Seats', 'Food Court'],
    totalStudios: 6,
    image_url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80',
  },
  {
    id: 3,
    name: 'CINEMAX Mall of Indonesia',
    location: 'Jl. Boulevard Barat Raya, Jakarta Utara',
    phone: '+62 21 6587 0000',
    facilities: ['Premium Cinema', 'Recliner Seats', 'VIP Lounge', 'Bar'],
    totalStudios: 7,
    image_url: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=600&q=80',
  },
  {
    id: 4,
    name: 'CINEMAX Senayan City',
    location: 'Jl. Asia Afrika No.19, Jakarta Pusat',
    phone: '+62 21 7278 0000',
    facilities: ['IMAX', '4DX', 'Dolby Vision', 'Premium Dining'],
    totalStudios: 10,
    image_url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80',
  },
  {
    id: 5,
    name: 'CINEMAX Kelapa Gading',
    location: 'Jl. Bulevar Kelapa Gading, Jakarta Utara',
    phone: '+62 21 4585 0000',
    facilities: ['Dolby Atmos', 'Couple Seats', 'Snack Bar', 'Parking'],
    totalStudios: 5,
    image_url: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=600&q=80',
  },
  {
    id: 6,
    name: 'CINEMAX Summarecon Mal Serpong',
    location: 'Jl. Boulevard Gading Serpong, Tangerang',
    phone: '+62 21 5453 0000',
    facilities: ['IMAX', 'Recliner Seats', 'Kids Zone', 'Food Court'],
    totalStudios: 6,
    image_url: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=600&q=80',
  },
]
