"use client";

import React, { useEffect, useState } from 'react';
import { getInitColorSchemeScript } from "@mui/material/styles";

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
      {getInitColorSchemeScript({
        attribute: "data-mui-color-scheme",
        modeStorageKey: "mui-mode",
        colorSchemeStorageKey: "mui-color-scheme",
        defaultMode: "system",
      })}
      {children}
    </>
  );
}