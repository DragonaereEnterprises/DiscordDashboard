import type { Metadata } from 'next';
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
        <script defer src="/u/script.js" data-website-id="7184a2a4-7a85-452b-9b8a-06926934eb3f" data-host-url="/u"></script>
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
