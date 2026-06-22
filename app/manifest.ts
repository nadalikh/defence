import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Defence',
        short_name: 'Defence',
        description: 'Defence offline',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/images/plane.png',   // Make sure this file exists in public/icons/
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/images/plane.png',   // Make sure this file exists in public/icons/
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
