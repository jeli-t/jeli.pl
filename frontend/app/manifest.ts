import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tomasz Jelito | Jeli.pl',
    short_name: 'Jeli.pl',
    description: 'Tomasz Jelito - Full Stack Developer | Design and development of websites and web applications | Comprehensive solutions | Personalized approach | Cooperation',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}