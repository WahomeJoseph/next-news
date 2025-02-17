import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata = {
  title: 'Page Routing & Rendering',
  description: 'Learn how to route to different pages. Parralel routes, Intercept routes, Catch all routes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Navigation />
          {children}
      </body>
    </html >
  )
}
