import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Theme from "../components/ColorMode";
import './globals.css';
import ClientOnly from '../components/ClientOnly';

export const metadata: Metadata = {
  title: {
    default: 'Dragonaere Discord Bot',
    template: '%s - Dragonaere Discord Bot',
  },
  description: 'In Development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider trackLocalhost={true} domain='bot.dragonaere.com' customDomain='https://plausible.andrewstill.moe' selfHosted={true} trackOutboundLinks={true} />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Theme>
            <ClientOnly>
              {children}
            </ClientOnly>
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}