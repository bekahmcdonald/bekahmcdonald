import '../assets/styles/globals.scss'
import { Inter } from 'next/font/google'
import structuredData from './json-ld.json';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bekah McDonald | Freelance web developer based in East London, specialising in WordPress, Shopify and web animation.',
  description: 'Freelance web developer based in East London, specialising in WordPress, Shopify and web animation.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        </body>
    </html>
  )
}
