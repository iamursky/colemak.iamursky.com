import type { AppProps } from "next/app";

import { Fragment } from "react";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import NextHead from "next/head";
import { GlobalStateProvider } from "@/state";

export const emotionCache = createEmotionCache({ key: "css" });

export default function App({ Component, pageProps }: AppProps) {
  const colorScheme = useColorScheme();

  return (
    <Fragment>
      <NextHead>
        <title>Colemak Mod-DH Trainer</title>
        <meta name="description" content="Free open source Colemak-DH typing trainer" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={emotionCache}
        theme={{ colorScheme }}
      >
        <GlobalStateProvider initialState={pageProps.initialGlobalState}>
          <Component {...pageProps} />
        </GlobalStateProvider>
      </MantineProvider>
    </Fragment>
  );
}
