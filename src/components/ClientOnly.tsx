"use client";

import React, { useEffect, useState } from 'react';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {InitColorSchemeScript({
        attribute: "data-mui-color-scheme",
        modeStorageKey: "mui-mode",
        colorSchemeStorageKey: "mui-color-scheme",
        defaultMode: "system",
      })}
      {children}
    </>
  );
}