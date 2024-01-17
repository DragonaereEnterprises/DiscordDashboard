import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ApolloWrapper } from './ApolloWrapper';
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dragonaere Discord Bot',
    template: '%s - Dragonaere Discord Bot',
  },
  description: 'In Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ApolloWrapper>{children}</ApolloWrapper>
        </Providers>
      </body>
    </html>
  )
}
