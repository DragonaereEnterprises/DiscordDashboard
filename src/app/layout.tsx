import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import Theme from "../components/ColorMode";
import getInitColorSchemeScript from "@mui/system/cssVars/getInitColorSchemeScript";
import { Experimental_CssVarsProvider } from "@mui/material";

import './globals.css';

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
      <body>
        <AppRouterCacheProvider>
          <Experimental_CssVarsProvider defaultMode="system">
            {getInitColorSchemeScript({
              attribute: "data-mui-color-scheme",
              modeStorageKey: "mui-mode",
              colorSchemeStorageKey: "mui-color-scheme",
              defaultMode: "system",
            })}
            <Theme>
              {children}
            </Theme>
          </Experimental_CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
